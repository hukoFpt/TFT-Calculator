import { useDrag } from 'react-dnd'
import { useEffect } from 'react'
import { getEmptyImage } from 'react-dnd-html5-backend'

type DraggableChampionProps = {
  id: number
  name: string
  image: string
  className: string
  size: string
  onDragEnd?: () => void
  onDoubleClick?: () => void
}

const DraggableChampion: React.FC<DraggableChampionProps> = ({
  id,
  name,
  image,
  size,
  className,
  onDragEnd,
  onDoubleClick
}) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'champion',
    item: { id, name, image },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
    end: (_, monitor) => {
      if (!monitor.didDrop() && onDragEnd) {
        onDragEnd()
      }
    }
  }))

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])

  return (
    <div
      ref={drag}
      className={`${className} ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onDoubleClick={onDoubleClick}
    >
      <img src={image} alt={name} style={{ height: size }} />
    </div>
  )
}

export default DraggableChampion
