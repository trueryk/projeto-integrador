import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'
import './App.css'
import Cadastro from './pages/Cadastro'

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </>
  )
}

export default App
