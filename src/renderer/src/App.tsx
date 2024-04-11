import Trait from './components/Trait'
import Composition from './components/Composition'
import Header from './components/Header'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import TeamBuilder from './components/TeamBuilder'

function App(): JSX.Element {
  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <Header />
      <TeamBuilder />
    </DndProvider>
  )
}

export default App
