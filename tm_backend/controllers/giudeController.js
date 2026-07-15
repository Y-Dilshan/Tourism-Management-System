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

export const getGuideById = async (req, res) => {
  const { id } = req.params;
  try {
    const guideData = await guide.findById(id);
    if (!guideData) {
      return res.status(404).json({ message: "Guide not found" });
    }
    res.status(200).json(guideData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateGuide = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const updatedGuide = await guide.findByIdAndUpdate(id, { name, email, password }, { new: true });
    if (!updatedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }
    res.status(200).json(updatedGuide);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};