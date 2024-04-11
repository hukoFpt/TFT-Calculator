import { useDrop } from 'react-dnd'
import { useState } from 'react'
import DraggableChampion from './DraggableChampion'

const DropArea = ({ setChampions }) => {
  const [droppedChampion, setDroppedChampion] = useState<any>(null)

  const [{}, drop] = useDrop(() => ({
    accept: 'champion',
    drop: (item: any) => {
      setDroppedChampion(item)
      setChampions((prevChampions) => [...prevChampions, item])
    },
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver()
    })
  }))
  return (
    <div
      ref={drop}
      className="relative w-28 h-28"
      style={{
        maskImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='50 1 95 25 95 75 50 99 5 75 5 25' style='fill:%23202123;'/%3E%3C/svg%3E\")",
        maskSize: 'cover'
      }}
    >
      {droppedChampion && (
        <DraggableChampion
          {...droppedChampion}
          className="absolute top-0 left-0 z-10"
          onDoubleClick={(championId) => {
            setChampions((prevChampions) =>
              prevChampions.filter((champion) => champion.id !== championId)
            )
            setDroppedChampion(null)
          }}
          onDragEnd={() => setDroppedChampion(null)}
        />
      )}
      <div className="absolute inset-0 bg-hexagon"></div>
    </div>
  )
}
export default DropArea
