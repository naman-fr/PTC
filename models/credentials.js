import mongoose from "mongoose";

const newCard = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
});

const Card = mongoose.models.Credentials || mongoose.model("Credentials", newCard, "Credentials");
export default Card;