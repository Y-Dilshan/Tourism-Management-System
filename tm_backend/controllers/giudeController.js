import guide from "../models/guide";

export const getAllGuides = async (req, res) => {
  try {
    const guides = await guide.find();
    res.status(200).json(guides);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};