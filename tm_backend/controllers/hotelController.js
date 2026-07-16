import hotel from '../models/hote.js';

export const getAllHotels = async (req, res) => {
  try {
    const hotels = await hotel.find();  
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHotel = async (req, res) => {
  const { name, location, price } = req.body;
  const newHotel = new hotel({ name, location, price });
    try {
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  } 
};

export const getHotelById = async (req, res) => {
  const { id } = req.params;
    try {
    const hotelData = await hotel.findById(id);
    if (!hotelData) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.status(200).json(hotelData);
  }
    catch (error) { 
        res.status(500).json({ message: error.message });
    }
};