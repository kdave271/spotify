import './App.css'
import {Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<LoginPage />} />
        <Route  path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
