const mongoose = require("mongoose");

let isConnected = false; // Track connection status

module.exports = async function (req, res) {
  if (isConnected) {
    return res.json({ message: "Already connected to MongoDB" });
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    return res.json({ message: "Connected to MongoDB successfully!" });
  } catch (error) {
    return res.status(500).json({ error: "MongoDB connection failed", details: error.message });
  }
};
