import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// User Pages
import Home from "./pages/home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/registerPage.jsx";
import ActivitiesPage from "./pages/activities.jsx";
import UserDashboard from "./pages/userDashboard.jsx";
import TourPackages from "./pages/tourPackages.jsx";
import Hotels from "./pages/hotel.jsx";
import Vehicles from "./pages/vehicles.jsx";
import Guides from "./pages/guides.jsx";
import Contact from "./pages/contact.jsx";
import MyBookings from "./pages/myBookins.jsx";

// Admin Pages
import AdminDashboard from "./pages/adminDashboard.jsx";
import AdminVehicles from "./pages/admin/adminVehicle.jsx";
import AdminHotels from "./pages/admin/adminHotel.jsx";
import AdminGuides from "./pages/admin/adminGuieds.jsx";
import AdminContact from "./pages/admin/adminContact.jsx";
import AddHotel from "./pages/admin/adminAddHotel.jsx";
import AddGuide from "./pages/admin/adminAddGuides.jsx";
import AdminAddVehicle from "./pages/admin/adminAddVehicle.jsx";
import AdminBookings from "./pages/admin/adminBookings.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= User Routes ================= */}
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/tours" element={<TourPackages />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookings" element={<MyBookings />} />

        {/* ================= Admin Routes ================= */}
        <Route path="/admin" element={<AdminDashboard />}>
          {/* Default page when visiting /admin */}
          <Route path="vehicles" element={<AdminVehicles />} />
          <Route path="hotels" element={<AdminHotels />} />
          <Route path="guides" element={<AdminGuides />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="add-hotel" element={<AddHotel />} />
          <Route path="add-guide" element={<AddGuide />} />
          <Route path="add-vehicle" element={<AdminAddVehicle />} />
          <Route path="bookings" element={<AdminBookings />} />
        </Route>

        {/* ================= 404 Page ================= */}
        {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;