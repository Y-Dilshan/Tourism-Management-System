import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'
import ActivitiesPage from './pages/activities.jsx'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
