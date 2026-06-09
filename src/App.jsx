import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'
import LoginSalvo from './components/LoginSalvo'
import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Perfil from './pages/Perfil'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<> <Menu /> <Home /> </>} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<> <Menu /><Perfil /></>} />
      </Routes>
      <LoginSalvo />
    </>
  )
}

export default App
