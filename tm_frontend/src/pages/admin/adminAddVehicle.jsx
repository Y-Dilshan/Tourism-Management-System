import { useState } from "react";
import {
  FaCar,
  FaHashtag,
  FaUsers,
  FaUserTie,
  FaMoneyBillWave,
  FaImage,
  FaSave,
  FaArrowLeft,
  FaTag,
} from "react-icons/fa";

export default function AdminAddVehicle() {
  const [vehicle, setVehicle] = useState({
    name: "",
    type: "",
    number: "",
    seats: "",
    driver: "",
    price: "",
    status: "Available",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const vehicleTypes = ["Van", "Car", "Bus", "SUV", "Mini Van", "Jeep"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setVehicle((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));

    if (errors.image) {
      setErrors((prev) => ({ ...prev, image: null }));
    }
  };

  const validate = () => {
    const next = {};

    if (!vehicle.name.trim()) next.name = "Vehicle name is required";
    if (!vehicle.type) next.type = "Select a vehicle type";

    if (!vehicle.number.trim()) {
      next.number = "Vehicle number is required";
    } else if (!/^[A-Z]{2,3}-\d{4}$/i.test(vehicle.number.trim())) {
      next.number = "Use format like CAB-1234";
    }

    if (!vehicle.seats) {
      next.seats = "Seat count is required";
    } else if (Number(vehicle.seats) <= 0) {
      next.seats = "Seats must be a positive number";
    }

    if (!vehicle.driver.trim()) next.driver = "Assign a driver";

    if (!vehicle.price) {
      next.price = "Price per day is required";
    } else if (Number(vehicle.price) <= 0) {
      next.price = "Price must be a positive number";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const resetForm = () => {
    setVehicle({
      name: "",
      type: "",
      number: "",
      seats: "",
      driver: "",
      price: "",
      status: "Available",
      image: null,
    });
    setPreview(null);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      // Replace with real API call, e.g.:
      // const formData = new FormData();
      // Object.entries(vehicle).forEach(([key, val]) => formData.append(key, val));
      // await fetch("/api/vehicles", { method: "POST", body: formData });

      await new Promise((resolve) => setTimeout(resolve, 600));

      alert("Vehicle Added Successfully!");
      resetForm();
    } catch (err) {
      alert("Something went wrong while saving the vehicle. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0D4F46]">Add New Vehicle</h1>
          <p className="text-gray-500 mt-2">Register a new tour vehicle</p>
        </div>

        <button
          onClick={() => window.history.back()}
          className="bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-2 bg-white rounded-2xl shadow p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              icon={<FaCar />}
              label="Vehicle Name"
              name="name"
              placeholder="Toyota KDH"
              value={vehicle.name}
              onChange={handleChange}
              error={errors.name}
            />

            <div>
              <label className="font-semibold mb-2 block">Vehicle Type</label>
              <select
                name="type"
                value={vehicle.type}
                onChange={handleChange}
                className={`w-full border rounded-xl p-3 outline-none focus:border-[#0D4F46] ${
                  errors.type ? "border-red-400" : "border-gray-300"
                }`}
              >
                <option value="">Select Type</option>
                {vehicleTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.type && (
                <p className="text-red-500 text-sm mt-1">{errors.type}</p>
              )}
            </div>

            <Input
              icon={<FaHashtag />}
              label="Vehicle Number"
              name="number"
              placeholder="CAB-1234"
              value={vehicle.number}
              onChange={handleChange}
              error={errors.number}
            />

            <Input
              icon={<FaUsers />}
              label="Seats"
              name="seats"
              type="number"
              placeholder="12"
              value={vehicle.seats}
              onChange={handleChange}
              error={errors.seats}
            />

            <Input
              icon={<FaUserTie />}
              label="Driver"
              name="driver"
              placeholder="Kamal Perera"
              value={vehicle.driver}
              onChange={handleChange}
              error={errors.driver}
            />

            <Input
              icon={<FaMoneyBillWave />}
              label="Price Per Day"
              name="price"
              type="number"
              placeholder="15000"
              value={vehicle.price}
              onChange={handleChange}
              error={errors.price}
            />

            <div>
              <label className="font-semibold mb-2 block">Status</label>
              <div className="flex items-center border border-gray-300 rounded-xl px-3">
                <span className="text-gray-500 mr-3">
                  <FaTag />
                </span>
                <select
                  name="status"
                  value={vehicle.status}
                  onChange={handleChange}
                  className="w-full p-3 outline-none bg-transparent"
                >
                  <option>Available</option>
                  <option>Booked</option>
                  <option>Maintenance</option>
                </select>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-8">
            <label className="font-semibold block mb-2">Vehicle Image</label>

            <div
              className={`border-2 border-dashed rounded-2xl p-8 text-center ${
                errors.image ? "border-red-400" : "border-gray-300"
              }`}
            >
              <FaImage className="mx-auto text-5xl text-gray-400 mb-3" />
              <input type="file" accept="image/*" onChange={handleImage} />
              <p className="text-gray-500 mt-2">Upload Vehicle Photo</p>
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#C9A84C] text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-[#b9983f] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FaSave />
              {submitting ? "Saving..." : "Save Vehicle"}
            </button>
          </div>
        </form>

        {/* Live Preview */}
        <div className="bg-white rounded-2xl shadow p-8 h-fit sticky top-5">
          <h2 className="text-2xl font-bold text-[#0D4F46] mb-5">Live Preview</h2>

          <img
            src={preview || "https://placehold.co/400x300?text=Vehicle"}
            alt=""
            className="w-full h-48 rounded-xl object-cover border-4 border-[#C9A84C]"
          />

          <h3 className="text-2xl font-bold text-center mt-5">
            {vehicle.name || "Vehicle Name"}
          </h3>

          <p className="text-center text-gray-500">
            {vehicle.type || "Vehicle Type"}
          </p>

          <div className="mt-6 space-y-3">
            <p>
              <strong>Number:</strong> {vehicle.number || "-"}
            </p>
            <p>
              <strong>Seats:</strong> {vehicle.seats || "-"}
            </p>
            <p>
              <strong>Driver:</strong> {vehicle.driver || "-"}
            </p>
            <p>
              <strong>Price:</strong> Rs. {vehicle.price || "0"}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  vehicle.status === "Available"
                    ? "bg-green-100 text-green-700"
                    : vehicle.status === "Booked"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {vehicle.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ icon, label, name, value, onChange, type = "text", placeholder = "", error }) {
  return (
    <div>
      <label className="font-semibold mb-2 block">{label}</label>

      <div
        className={`flex items-center border rounded-xl px-3 ${
          error ? "border-red-400" : "border-gray-300"
        } focus-within:border-[#0D4F46]`}
      >
        <span className="text-gray-500 mr-3">{icon}</span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 outline-none bg-transparent"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}