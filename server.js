const express= require('express');
const dotenv = require('dotenv')
const colors= require('colors');
const morgan= require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./config/db');


dotenv.config();
// Database connection
connectDB();

const app = express();
// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth",require("./routes/authRoutes"));

const PORT= process.env.PORT||8080;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgBlue.white);
});
