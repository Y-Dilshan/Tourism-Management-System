import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// User Pages
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
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
import AdminTourPackages from "./pages/admin/adminTourPackages.jsx";
import AdminUsers from "./pages/admin/adminUsers.jsx";
import AdminReviews from "./pages/admin/adminReviews.jsx";
import AdminReports from "./pages/admin/adminReport.jsx";
import AdminSettings from "./pages/admin/adminSetting.jsx";
import AdminMessages from "./pages/admin/adminMessage.jsx";
import AdmiAddUser from "./pages/admin/adminAddUser.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= User Routes ================= */}
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
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
          {/* Default page when visiting /admin exactly */}
          <Route index element={<></>} />
          {/* Explicit /admin/dashboard route so it stays on AdminDashboard */}
          <Route path="dashboard" element={<></>} />

          <Route path="vehicles" element={<AdminVehicles />} />
          <Route path="hotels" element={<AdminHotels />} />
          <Route path="guides" element={<AdminGuides />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="add-hotel" element={<AddHotel />} />
          <Route path="add-guide" element={<AddGuide />} />
          <Route path="add-vehicle" element={<AdminAddVehicle />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="tour-packages" element={<AdminTourPackages />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="reviews" element={<AdminReviews />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="add-user" element={<AdmiAddUser />} />
        </Route>

        {/* ================= 404 Page ================= */}
        {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;