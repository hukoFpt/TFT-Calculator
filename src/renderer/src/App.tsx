import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

function App(): JSX.Element {
  const minimizeWindow = () => {
    window.electron.send('minimize-window')
  }
  const closeWindow = () => {
    window.electron.send('close-window')
  }

  const DraggableChampion = ({ id, name, image, className }) => {
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

  const [champions, setChampion] = useState([])
  useEffect(() => {
    fetch('../src/assests/data/champions.csv')
      .then((response) => response.text())
      .then((text) => {
        const result = Papa.parse(text, { header: true })
        setChampion(result.data)
        console.log(result.data)
      })
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="title-bar" className="title-bar flex justify-between">
        <div className="font-semibold py-1 px-2">TFT Calculator</div>
        <div className="button flex">
          <button className="w-8 hover:bg-slate-400" onClick={minimizeWindow}>
            -
          </button>
          <button className="w-8 hover:bg-red-600" onClick={closeWindow}>
            ⨯
          </button>
        </div>
      </div>

      <div className="flex gap-2 text-center mx-2 pt-3">
        <div className="w-1/6 bg-zinc-800 rounded-lg border border-zinc-600 font-semibold pt-1">
          Traits
        </div>
        <div className="w-4/6 bg-zinc-800 rounded-lg border border-zinc-600 font-semibold pt-1">
          Composition
        </div>
        <div className="w-1/6 flex flex-col gap-2">
          <div className="bg-zinc-800 rounded-lg border border-zinc-600 font-semibold pt-1">
            Augments
          </div>
          <div className="bg-zinc-800 rounded-lg border border-zinc-600 font-semibold pt-1">
            Components
          </div>
        </div>
      </div>

      <div className="w-4/6 champion-list p-2 flex flex-col gap-1 bg-zinc-800 m-2 rounded-md border border-zinc-600">
        <div className="text-center font-semibold">Champion List</div>
        <div className="1-cost flex gap-1">
          {champions
            .filter((champion) => champion.cost === '1')
            .map((champion) => (
              // <div key={champion.id} className="border-2 border-slate-500 rounded">
              //   <img src={champion.image} alt="Ahri" style={{ height: '60px', padding: '2px' }} />
              // </div>
              <DraggableChampion
                key={champion.id}
                id={champion.id}
                name={champion.name}
                image={champion.image}
                className="border-2 border-slate-500 rounded"
              />
            ))}
        </div>
        <div className="1-cost flex gap-1">
          {champions
            .filter((champion) => champion.cost === '2')
            .map((champion) => (
              <div key={champion.id} className="border-2 border-emerald-500 rounded">
                <img src={champion.image} alt="Ahri" style={{ height: '60px', padding: '2px' }} />
              </div>
            ))}
        </div>
        <div className="1-cost flex gap-1">
          {champions
            .filter((champion) => champion.cost === '3')
            .map((champion) => (
              <div key={champion.id} className="border-2 border-cyan-500 rounded">
                <img src={champion.image} alt="Ahri" style={{ height: '60px', padding: '2px' }} />
              </div>
            ))}
        </div>
        <div className="1-cost flex gap-1">
          {champions
            .filter((champion) => champion.cost === '4')
            .map((champion) => (
              <div key={champion.id} className="border-2 border-fuchsia-500 rounded">
                <img src={champion.image} alt="Ahri" style={{ height: '60px', padding: '2px' }} />
              </div>
            ))}
        </div>
        <div className="1-cost flex gap-1">
          {champions
            .filter((champion) => champion.cost === '5')
            .map((champion) => (
              <div key={champion.id} className="border-2 border-yellow-500 rounded">
                <img src={champion.image} alt="Ahri" style={{ height: '60px', padding: '2px' }} />
              </div>
            ))}
        </div>
      </div>
    </DndProvider>
  )
}

export default App
