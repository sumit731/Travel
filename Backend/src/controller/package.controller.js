import Package from "../models/package.model.js";

const getPackages = async (req, res) => {
    try {
        const data = await Package.find();
        res.status(200).json({ success: true, data: data });
    }
    catch (error) {
        console.log("Error in getting destinations", error);
        res.status(500).json({ success: false, message: "Error in getting destinations" });
    }
}

const addPackage = async (req, res) => {
    try {
        const { name, image } = req.body;
        const response = new Package({ name, image });
        const data = await response.save();
        res.status(200).json({ success: true, messsge: "Package added successfully", data: data });
    } catch (error) {
        console.log("Error in adding destination", error);
        res.status(400).json({ success: false, message: "Error in adding package" });
    }
}

export {getPackages, addPackage};