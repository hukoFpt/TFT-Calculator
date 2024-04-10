import Trait from './components/Trait'
import Composition from './components/Composition'
import Header from './components/Header'
import Augment from './components/Augment'
import Component from './components/Component'
import ChampionPicker from './components/ChampionPicker'
import ItemPicker from './components/ItemPicker'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'

function App(): JSX.Element {
  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
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
        <>
          <ChampionPicker />
          <ItemPicker />
        </>
      </div>
    </DndProvider>
  )
}

export default App
