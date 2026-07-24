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

export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};