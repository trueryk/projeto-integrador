import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'
import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
