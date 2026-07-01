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
import AdminDashboard from './pages/adminDashboard.jsx'
import AdminVehicles from './pages/admin/adminVehicle.jsx';
import Guides from "./pages/guides.jsx";
import AdminHotels from './pages/admin/adminHotel.jsx';
import AdminGuides from './pages/admin/adminGuieds.jsx';
import Contact from './pages/contact.jsx';

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
          <Route path="/guides" element={<Guides/>} />
          <Route path="/contact" element={<Contact/>} />
        
          <Route path="/admin" element={<AdminDashboard/>} />
            <Route path="/admin/vehicles" element={<AdminVehicles/>} />
            <Route path="/admin/hotels" element={<AdminHotels/>} />
            <Route path="/admin/guides" element={<AdminGuides/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
