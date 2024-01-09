import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
