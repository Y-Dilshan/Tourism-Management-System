import Vehicle from "../models/vehicle";

export const createVehicle = async (req, res) => {
    try {
        const { make, model, year, vin, owner } = req.body;
        const newVehicle = new Vehicle({ make, model, year, vin, owner });
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
};