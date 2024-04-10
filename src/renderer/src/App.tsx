import Trait from './components/Trait'
import Composition from './components/Composition'
import Header from './components/Header'
import Augment from './components/Augment'
import Component from './components/Component'
import ChampionPicker from './components/ChampionPicker'

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex gap-2 text-center mx-2 pt-3">
        <Trait />
        <Composition />
        <div className="w-1/6 flex flex-col gap-2">
          <Augment />
          <Component />
        </div>
      </div>
      <div className="flex gap-2 mt-2 px-2">
        <ChampionPicker />
        <div className="w-2/6 p-2 bg-zinc-800 rounded-md border border-zinc-600">
          <div className="text-center font-semibold">Item</div>
          <div className="flex">
            <input type="radio" id="craftable" name="item" value={'craftable'} />
            <label htmlFor="craftable">Craftable</label>
            <input type="radio" id="radiant" name="item" value={'radiant'} />
            <label htmlFor="radiant">Radiant</label>
            <input type="radio" id="other" name="item" value={'other'} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
