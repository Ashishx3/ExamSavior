const mongoose = require('mongoose');

let isConnected = false; // Track database connection status

async function connectToDatabase() {
    if (isConnected) {
        console.log('✅ Using existing database connection');
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log('🚀 Connected to MongoDB (Database: userdata)');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw new Error('Database connection failed');
    }
}

module.exports = connectToDatabase; // Export the function
