const express = require("express");
const app = express();
const mongoose = require("mongoose");
const GetData = require("./routes/GetData");
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const url =
  "mongodb+srv://Jhonny:jDl5y0NzBMtThART@cluster0.iwap2.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


  app.use('/api/data', GetData);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
