import { useDrag } from 'react-dnd'

type DraggableItemProps = {
  id: number
  name: string
  image: string
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, name, image }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'item',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <div ref={drag} className={`draggable-champion`} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img src={image} alt={name} style={{ height: '30px' }} className='rounded-lg' />
    </div>
  )
}

export default DraggableItem
