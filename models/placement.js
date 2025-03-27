import mongoose from "mongoose";

const newCard = new mongoose.Schema({
    placement_rate: {
        type: String,
        required: true
    },
    recruiting_partners: {
        type: String,
        required: true
    },
    students_placed: {
        type: String,
        required: true
    },
    placement_image: {
        type: String,
        required: true
    }
});

const Card = mongoose.models.Placement || mongoose.model("Placement", newCard, "Placement");
export default Card;