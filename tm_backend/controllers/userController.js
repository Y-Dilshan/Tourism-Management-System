import User from "../models/User.js";
import express from "express";

export const createUser = async (req, res) =>{
    try{
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}