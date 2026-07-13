import guide from "../models/guide";

export const getAllGuides = async (req, res) => {
  try {
    const guides = await guide.find();
    res.status(200).json(guides);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createGuide = async (req, res) => {
  const { name, email, password } = req.body;
  const newGuide = new guide({ name, email, password });
  try {
    await newGuide.save();
    res.status(201).json(newGuide);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};