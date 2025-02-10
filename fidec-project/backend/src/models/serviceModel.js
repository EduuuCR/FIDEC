

const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Design e Branding", "Desenvolvimento Web", "Social Media e Marketing Digital", "Parte Gráfica", "Consultoria"],
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Service", ServiceSchema);
