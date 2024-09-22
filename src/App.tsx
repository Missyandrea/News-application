import { Outlet } from 'react-router-dom'
import './App.css'
import { NavBar } from './components'

function App() {

  return (
    <>
    <div className="">
      <NavBar/>
      <Outlet/>
    </div>
    
    </>
  )
}

export default App
