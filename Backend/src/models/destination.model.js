import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
},
    {
        timestamps: true
    }
)

const Destination = mongoose.model('Destination', destinationSchema);
export default Destination;