import hotel from '../models/hote.js';

export const getAllHotels = async (req, res) => {
  try {
    const hotels = await hotel.find();  
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};