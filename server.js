const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const morgan = require("morgan");

require('dotenv').config()
const app = express();

// const userRouter = require("./src/routes/user.routes");

//----------------MIDDLEWARES--------------------
app.use(morgan('dev'));

// parse requests of content-type - application/json
app.use(express.json());
// Enable requests from origins
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST","GET","DELETE","UPDATE","PUT","PATCH"],
    credentials: true
}));
app.use(cookieParser())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//------------------SETTINGS----------------
// set port. 4000 if not defined in env
const PORT = process.env.PORT || 4000; 

//------------------ROUTES------------------
// app.use("/api/users", userRouter);


//------------------SERVER------------------
// simple route for testing in browser
app.get("/", (req, res) => {
res.json({ message: "Welcome to Login application - Plurative." });
});

// set port, listen for requests
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
  