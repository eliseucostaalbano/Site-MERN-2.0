import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CriarPage from './pages/CriarPage'
import NotaDetalhe from './pages/NotaDetalhe'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/criar" element={<CriarPage />} />
        <Route path="/nota/:id" element={<NotaDetalhe />} />
      </Routes>
    </div>
  )
}

export default App
