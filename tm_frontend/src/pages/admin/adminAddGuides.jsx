import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaBriefcase,
  FaMoneyBillWave,
  FaImage,
  FaSave,
  FaArrowLeft,
  FaStar,
  FaVenusMars,
} from "react-icons/fa";

export default function AddGuide() {
  const [guide, setGuide] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    language: [],
    experience: "",
    age: "",
    gender: "",
    price: "",
    rating: "",
    status: "Available",
    bio: "",
    specialties: [],
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const languages = [
    "English",
    "Sinhala",
    "Tamil",
    "French",
    "German",
    "Japanese",
    "Chinese",
  ];

  const specialties = [
    "Wildlife",
    "Adventure",
    "Historical",
    "Nature",
    "Beach",
    "Food Tour",
    "Photography",
    "Hiking",
  ];

  const handleChange = (e) => {
    setGuide({
      ...guide,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setGuide({
        ...guide,
        image: file,
      });

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleLanguage = (item) => {
    if (guide.language.includes(item)) {
      setGuide({
        ...guide,
        language: guide.language.filter((l) => l !== item),
      });
    } else {
      setGuide({
        ...guide,
        language: [...guide.language, item],
      });
    }
  };

  const handleSpecialty = (item) => {
    if (guide.specialties.includes(item)) {
      setGuide({
        ...guide,
        specialties: guide.specialties.filter((s) => s !== item),
      });
    } else {
      setGuide({
        ...guide,
        specialties: [...guide.specialties, item],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(guide);

    alert("Guide Added Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef7f5] via-white to-[#f8f3e4] p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#0D4F46]">
            Add New Guide
          </h1>

          <p className="text-gray-500 mt-2">
            Register a new professional tour guide
          </p>
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
          className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">

            <Input
              icon={<FaUser />}
              label="Guide Name"
              name="name"
              value={guide.name}
              onChange={handleChange}
            />

            <Input
              icon={<FaEnvelope />}
              label="Email"
              name="email"
              type="email"
              value={guide.email}
              onChange={handleChange}
            />

            <Input
              icon={<FaPhone />}
              label="Phone"
              name="phone"
              value={guide.phone}
              onChange={handleChange}
            />

            <Input
              icon={<FaMapMarkerAlt />}
              label="Address"
              name="address"
              value={guide.address}
              onChange={handleChange}
            />

            <Input
              icon={<FaBriefcase />}
              label="Experience"
              name="experience"
              placeholder="5 Years"
              value={guide.experience}
              onChange={handleChange}
            />

            <Input
              icon={<FaMoneyBillWave />}
              label="Price Per Day"
              name="price"
              type="number"
              value={guide.price}
              onChange={handleChange}
            />

            <Input
              icon={<FaStar />}
              label="Rating"
              name="rating"
              type="number"
              value={guide.rating}
              onChange={handleChange}
            />

            <Input
              icon={<FaVenusMars />}
              label="Age"
              name="age"
              type="number"
              value={guide.age}
              onChange={handleChange}
            />

            <div>
              <label className="font-semibold mb-2 block">
                Gender
              </label>

              <select
                name="gender"
                value={guide.gender}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="font-semibold mb-2 block">
                Status
              </label>

              <select
                name="status"
                value={guide.status}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              >
                <option>Available</option>
                <option>Busy</option>
                <option>Offline</option>
              </select>
            </div>

          </div>

          {/* Languages */}

          <div className="mt-8">
            <label className="font-semibold block mb-3">
              Languages
            </label>

            <div className="grid md:grid-cols-4 gap-3">
              {languages.map((lang) => (
                <label
                  key={lang}
                  className="border rounded-xl p-3 cursor-pointer hover:bg-[#f8f3e4]"
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={guide.language.includes(lang)}
                    onChange={() => handleLanguage(lang)}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          {/* Specialties */}

          <div className="mt-8">
            <label className="font-semibold block mb-3">
              Specialties
            </label>

            <div className="grid md:grid-cols-4 gap-3">
              {specialties.map((item) => (
                <label
                  key={item}
                  className="border rounded-xl p-3 cursor-pointer hover:bg-[#eef7f5]"
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={guide.specialties.includes(item)}
                    onChange={() => handleSpecialty(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Image */}

          <div className="mt-8">
            <label className="font-semibold block mb-2">
              Profile Image
            </label>

            <div className="border-2 border-dashed rounded-2xl p-8 text-center">
              <FaImage className="mx-auto text-5xl text-gray-400 mb-3" />

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
              />

              <p className="text-gray-500 mt-2">
                Upload Guide Photo
              </p>
            </div>
          </div>

          {/* Bio */}

          <div className="mt-8">
            <label className="font-semibold block mb-2">
              Biography
            </label>

            <textarea
              rows={5}
              name="bio"
              value={guide.bio}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              placeholder="Write about the guide..."
            />
          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="reset"
              className="px-6 py-3 bg-gray-200 rounded-xl"
            >
              Reset
            </button>

            <button
              type="submit"
              className="bg-[#C9A84C] text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-[#b9983f]"
            >
              <FaSave />
              Save Guide
            </button>
          </div>
        </form>

        {/* Live Preview */}

        <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-5">
          <h2 className="text-2xl font-bold text-[#0D4F46] mb-5">
            Live Preview
          </h2>

          <img
            src={
              preview ||
              "https://placehold.co/400x400?text=Guide"
            }
            alt=""
            className="w-44 h-44 rounded-full object-cover mx-auto border-4 border-[#C9A84C]"
          />

          <h3 className="text-2xl font-bold text-center mt-5">
            {guide.name || "Guide Name"}
          </h3>

          <p className="text-center text-gray-500">
            {guide.language.join(", ") || "Languages"}
          </p>

          <div className="mt-6 space-y-3">
            <p><strong>Experience:</strong> {guide.experience || "-"}</p>
            <p><strong>Price:</strong> Rs. {guide.price || "0"}</p>
            <p><strong>Rating:</strong> ⭐ {guide.rating || "0"}</p>
            <p><strong>Status:</strong> {guide.status}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function Input({
  icon,
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) {
  return (
    <div>
      <label className="font-semibold mb-2 block">{label}</label>

      <div className="flex items-center border rounded-xl px-3">
        <span className="text-gray-500 mr-3">{icon}</span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 outline-none"
        />
      </div>
    </div>
  );
}