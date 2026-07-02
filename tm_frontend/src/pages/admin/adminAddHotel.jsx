import { useState } from "react";
import {
  FaHotel,
  FaMapMarkerAlt,
  FaBed,
  FaStar,
  FaMoneyBillWave,
  FaImage,
  FaSave,
  FaArrowLeft,
} from "react-icons/fa";

export default function AddHotel() {
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    rooms: "",
    rating: "",
    price: "",
    status: "Available",
    description: "",
    image: null,
    amenities: [],
  });

  const amenitiesList = [
    "Free WiFi",
    "Swimming Pool",
    "Gym",
    "Restaurant",
    "Parking",
    "Spa",
    "Bar",
    "Airport Shuttle",
    "Air Conditioning",
    "24/7 Reception",
  ];

  const handleChange = (e) => {
    setHotel({
      ...hotel,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setHotel({
      ...hotel,
      image: e.target.files[0],
    });
  };

  const handleAmenity = (item) => {
    if (hotel.amenities.includes(item)) {
      setHotel({
        ...hotel,
        amenities: hotel.amenities.filter((a) => a !== item),
      });
    } else {
      setHotel({
        ...hotel,
        amenities: [...hotel.amenities, item],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(hotel);

    alert("Hotel Added Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0D4F46]">
            Add New Hotel
          </h1>
          <p className="text-gray-500 mt-2">
            Create a new hotel for your system
          </p>
        </div>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded-xl font-semibold"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hotel Name */}

          <div>
            <label className="font-semibold mb-2 block">
              Hotel Name
            </label>

            <div className="flex items-center border rounded-xl px-3">
              <FaHotel className="text-gray-500 mr-3" />

              <input
                type="text"
                name="name"
                placeholder="Enter Hotel Name"
                value={hotel.name}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          {/* Location */}

          <div>
            <label className="font-semibold mb-2 block">
              Location
            </label>

            <div className="flex items-center border rounded-xl px-3">
              <FaMapMarkerAlt className="text-gray-500 mr-3" />

              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                value={hotel.location}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          {/* Rooms */}

          <div>
            <label className="font-semibold mb-2 block">
              Number of Rooms
            </label>

            <div className="flex items-center border rounded-xl px-3">
              <FaBed className="text-gray-500 mr-3" />

              <input
                type="number"
                name="rooms"
                placeholder="Rooms"
                value={hotel.rooms}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          {/* Rating */}

          <div>
            <label className="font-semibold mb-2 block">
              Rating
            </label>

            <div className="flex items-center border rounded-xl px-3">
              <FaStar className="text-yellow-500 mr-3" />

              <select
                name="rating"
                value={hotel.rating}
                onChange={handleChange}
                className="w-full p-3 outline-none"
              >
                <option value="">Select Rating</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
          </div>

          {/* Price */}

          <div>
            <label className="font-semibold mb-2 block">
              Price Per Night (Rs.)
            </label>

            <div className="flex items-center border rounded-xl px-3">
              <FaMoneyBillWave className="text-green-600 mr-3" />

              <input
                type="number"
                name="price"
                placeholder="25000"
                value={hotel.price}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          {/* Status */}

          <div>
            <label className="font-semibold mb-2 block">
              Status
            </label>

            <select
              name="status"
              value={hotel.status}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 outline-none"
            >
              <option>Available</option>
              <option>Booked</option>
            </select>
          </div>

          {/* Image */}

          <div className="md:col-span-2">
            <label className="font-semibold mb-2 block">
              Hotel Image
            </label>

            <div className="border-2 border-dashed rounded-xl p-6 text-center">
              <FaImage className="text-5xl mx-auto text-gray-400 mb-4" />

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
              />

              <p className="text-sm text-gray-500 mt-3">
                Upload hotel cover image
              </p>
            </div>
          </div>

          {/* Description */}

          <div className="md:col-span-2">
            <label className="font-semibold mb-2 block">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={hotel.description}
              onChange={handleChange}
              placeholder="Write hotel description..."
              className="w-full border rounded-xl p-4 outline-none"
            ></textarea>
          </div>

          {/* Amenities */}

          <div className="md:col-span-2">
            <label className="font-semibold block mb-4">
              Hotel Amenities
            </label>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {amenitiesList.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 bg-gray-50 border rounded-lg p-3 cursor-pointer hover:bg-[#f7f3e8]"
                >
                  <input
                    type="checkbox"
                    checked={hotel.amenities.includes(item)}
                    onChange={() => handleAmenity(item)}
                  />

                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-10 flex justify-end gap-4">
          <button
            type="reset"
            className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold"
          >
            Reset
          </button>

          <button
            type="submit"
            className="bg-[#C9A84C] hover:bg-[#b9983f] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2"
          >
            <FaSave />
            Save Hotel
          </button>
        </div>
      </form>
    </div>
  );
}