import DropArea from './DropArea'

const Composition = ({ setChampions }) => {
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
            <DropArea key={i} setChampions={setChampions} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Composition
