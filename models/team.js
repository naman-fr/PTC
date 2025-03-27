import mongoose from "mongoose";

const newCard = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

const Card = mongoose.models.Team || mongoose.model("Team", newCard, "Team");
export default Card;