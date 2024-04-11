import { useState } from 'react'
import Augment from './Augment'
import ChampionPicker from './ChampionPicker'
import Composition from './Composition'
import ItemPicker from './ItemPicker'
import TeamEffect from './TeamEffect'
import Trait from './Trait'

const TeamBuilder = () => {
  const [champions, setChampions] = useState([])
  const [option, setOption] = useState('component')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value)
  }

  return (
    <div className="m-2">
      <div className="flex gap-2 items-center">
        <button className="flex items-center gap-1 bg-bgr rounded-lg px-2 py-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
          Clear Board
        </button>
        <div className="text-sm">Exalted:</div>
        <select id="exalted" title="Select an option" className="w-1/6 bg-bgr rounded-lg px-2 py-1">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 bg-bgr rounded-xl p-2 mt-2 justify-between">
        <div className="flex h-[420px]">
          <Trait champions={champions} />
          <Composition setChampions={setChampions} />
          <div className="w-1/12">
            <TeamEffect />
            <Augment />
          </div>
        </div>
        <div>
          <div className="flex text-center py-2">
            <div
              className={`p-1 w-1/6 text-center ${option === 'unit' ? 'border-x-2 border-x-red-500 border-t-2 border-t-red-500 border-b-2 border-b-transparent rounded-t-lg' : 'border-b-2 border-b-red-500 border-t-2 border-t-transparent'}`}
            >
              <input
                type="radio"
                id="unit"
                name="table"
                className="hidden"
                value={'unit'}
                onChange={handleChange}
              />
              <label htmlFor="unit" className="w-40 text-center">
                Units and Items
              </label>
            </div>
            <div
              className={`p-1 w-1/6 text-center ${option === 'augment' ? 'border-x-2 border-x-red-500 border-t-2 border-t-red-500 border-b-2 border-b-transparent rounded-t-lg' : 'border-b-2 border-b-red-500 border-t-2 border-t-transparent'}`}
            >
              <input
                type="radio"
                id="augment"
                name="table"
                className="hidden"
                value={'augment'}
                onChange={handleChange}
              />
              <label htmlFor="augment" className="w-40 text-center">
                Augment
              </label>
            </div>
            <div
              className={`p-1 w-1/6 text-center ${option === 'damage' ? 'border-x-2 border-x-red-500 border-t-2 border-t-red-500 border-b-2 border-b-transparent rounded-t-lg' : 'border-b-2 border-b-red-500 border-t-2 border-t-transparent'}`}
            >
              <input
                type="radio"
                id="damage"
                name="table"
                className="hidden"
                value={'damage'}
                onChange={handleChange}
              />
              <label htmlFor="damage" className="w-40 text-center">
                Damage Calculator
              </label>
            </div>
            <div className="w-1/2 border-b-2 border-red-500"></div>
          </div>
          {option === 'unit' && (
            <div className="flex gap-2">
              <ChampionPicker />
              <ItemPicker />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamBuilder
