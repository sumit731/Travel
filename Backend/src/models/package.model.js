import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
},
    {
        timestamps: true
    }
)

const Package = mongoose.model('Package', packageSchema);
export default Package;