import { useDrag } from 'react-dnd'

type DraggableChampionProps = {
  id: number
  name: string
  image: string
  className: string
}

const DraggableChampion: React.FC<DraggableChampionProps> = ({ id, name, image, className }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'champion',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <div
      ref={drag}
      className={`draggable-champion ${className}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img src={image} alt={name} style={{ height: '60px' }} />
    </div>
  )
}

export default DraggableChampion
