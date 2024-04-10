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
      className="relative w-24 h-24"
      style={{
        maskImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='50 1 95 25 95 75 50 99 5 75 5 25' style='fill:%23006cff;'/%3E%3C/svg%3E\")",
        maskSize: 'cover'
      }}
    >
      {droppedChampion && (
        <DraggableChampion
          {...droppedChampion}
          className="absolute top-0 left-0"
          style={{ height: '120px' }}
        />
      )}
    </div>
  )
}

const Composition = () => {
  return (
    <div className="w-4/6 bg-zinc-800 rounded-lg border border-zinc-600 font-semibold pt-1 flex flex-col items-center">
      <div>Composition</div>
      <div>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex"
            style={{ transform: `translateX(${(rowIndex % 2) * 40}px)` }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <DropArea key={i} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Composition
