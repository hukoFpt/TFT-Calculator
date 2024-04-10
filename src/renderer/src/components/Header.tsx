import { ipcRenderer } from 'electron'
declare global {
  interface Window {
    electron: typeof ipcRenderer
  }
}
const Header = () => {
  const minimizeWindow = () => {
    window.electron.send('minimize-window')
  }

  const closeWindow = () => {
    window.electron.send('close-window')
  }

  return (
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
  )
}

export default Header
