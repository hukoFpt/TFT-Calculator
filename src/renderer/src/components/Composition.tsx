import { useDrop } from 'react-dnd'
import { useState } from 'react'
import DraggableChampion from './DraggableChampion'

const DropArea = () => {
  const [droppedChampion, setDroppedChampion] = useState<any>(null)

  const [{}, drop] = useDrop(() => ({
    accept: 'champion',
    drop: (item: any) => setDroppedChampion(item),
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
          onDoubleClick={() => setDroppedChampion(null)}
          onDragEnd={() => setDroppedChampion(null)}
        />
      )}
      <div className="absolute inset-0 bg-hexagon"></div>
    </div>
  )
}

const Composition = () => {
  return (
    <div className="relative w-3/4 bg-bgr rounded-lg font-semibold p-2 flex flex-col ml-6">
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex absolute"
          style={{
            transform: `translateX(${(rowIndex % 2) * 56}px)`,
            top: `${10 + rowIndex * 96}px`
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <DropArea key={i} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Composition
