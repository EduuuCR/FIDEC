const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado');
    } catch (err) {
        console.error('Erro na conexão com o MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
