import { useDrag } from 'react-dnd'
import { useEffect } from 'react'
import { getEmptyImage } from 'react-dnd-html5-backend'

type DraggableChampionProps = {
  id: number
  name: string
  image: string
  traits: string[]
  className: string
  size: string
  onDragEnd?: (id) => void
  onDoubleClick?: (id) => void
}

const DraggableChampion: React.FC<DraggableChampionProps> = ({
  id,
  name,
  image,
  size,
  traits,
  className,
  onDragEnd,
  onDoubleClick
}) => {
  console.log(traits);
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'champion',
    item: { id, name, image, traits},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
    end: (_, monitor) => {
      if (!monitor.didDrop() && onDragEnd) {
        onDragEnd(id)
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
      onDoubleClick={() => {
        if (onDoubleClick) {
          onDoubleClick(id);
        }
      }}
    >
      <img src={image} alt={name} style={{ height: size }} />
    </div>
  )
}

export default DraggableChampion
