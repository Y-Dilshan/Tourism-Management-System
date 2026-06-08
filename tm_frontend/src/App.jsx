import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'
import ActivitiesPage from './pages/activities.jsx'
import UserDashboard from './pages/userDashboard.jsx'
import TourPackages from './pages/tourPackages.jsx'
import Hotels from './pages/hotel.jsx'
import Vehicles from './pages/vehicles.jsx'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/tours" element={<TourPackages />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
