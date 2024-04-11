import { useState } from 'react'
import ListItem from './ListItem'

const ItemPicker = () => {
  const [option, setOption] = useState('component')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value)
  }
  return (
    <div className="w-2/6 p-2 bg-bgrhl rounded-md border border-neutral-900">
      <div className="font-semibold border-b-1 border-zinc-600">Item</div>
      <div className="flex my-2">
        <div
          className={`w-1/4 text-center ${option === 'component' ? 'border-b-2 border-red-500' : ''}`}
        >
          <input
            type="radio"
            id="component"
            name="item"
            className="hidden"
            value={'component'}
            onChange={handleChange}
          />
          <label htmlFor="component">Component</label>
        </div>
        <div
          className={`w-1/4 text-center ${option === 'craftable' ? 'border-b-2 border-red-500' : ''}`}
        >
          <input
            type="radio"
            id="craftable"
            name="item"
            className="hidden"
            value={'craftable'}
            onChange={handleChange}
          />
          <label htmlFor="craftable">Craftable</label>
        </div>
        <div
          className={`w-1/4 text-center ${option === 'radiant' ? 'border-b-2 border-red-500' : ''}`}
        >
          <input
            type="radio"
            id="radiant"
            name="item"
            className="hidden"
            value={'radiant'}
            onChange={handleChange}
          />
          <label htmlFor="radiant">Radiant</label>
        </div>
        <div
          className={`w-1/4 text-center ${option === 'other' ? 'border-b-2 border-red-500' : ''}`}
        >
          <input
            type="radio"
            id="other"
            name="item"
            className="hidden"
            value={'other'}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="flex">
        <ListItem option={option}></ListItem>{' '}
      </div>
    </div>
  )
}

export default ItemPicker
