
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import './App.css'

export default function App() {

  return (
    <>
      <div className="container">
        <LeftPanel title="Webshop" />
        <RightPanel title="Inspiration" />
      </div>
    </>
  )
}

