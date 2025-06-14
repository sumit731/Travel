import Destination from "../models/destination.model.js"

const getDestinations = async(req, res) => {
    try{
        const data = await Destination.find();
        res.status(200).json({success: true, data: data});
    }
    catch(error){
        console.log("Error in getting destinations", error);
        res.status(500).json({success: false, message: "Error in getting destinations"});
    }
}

const addDestination = async(req, res) => {
    try {
        const {name, image, price} = req.body;
        const response = new Destination({name, image, price});
        const data = await response.save();
        res.status(200).json({success: true, messsge: "Destination added successfully", data: data});
    } catch (error) {
        console.log("Error in adding destination", error);
        res.status(400).json({success: false, message: "Error in adding destination"});
    }
}

export {getDestinations, addDestination};