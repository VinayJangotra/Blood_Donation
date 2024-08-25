const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
          "mongodb+srv://vinay:Jangotra@cluster0.k9uteue.mongodb.net/bloodBank",
        )
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}
module.exports = connectDB;