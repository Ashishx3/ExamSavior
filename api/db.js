import mongoose from 'mongoose';

let isConnected = false; // ✅ Prevent multiple connections

export default async function handler(req, res) {
    if (!isConnected) {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            isConnected = true;
            console.log('✅ Connected to MongoDB');
        } catch (err) {
            console.error('❌ MongoDB Error:', err);
            return res.status(500).json({ error: 'Database connection failed' });
        }
    }
    res.json({ message: 'Database connection established' });
}
