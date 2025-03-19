const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())

const dotenv = require("dotenv").config()
const products = require("./routes/productRoutes");
const restaurants = require("./routes/restaurantRoutes");

const port = process.env.PORT||3000;

app.use(express.json()); //used for parsing so that always the data return in json
app.use("/api", products);
app.use("/api",restaurants)
app.get('/',(req,res)=>{
  res.send("welcome")
})
app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
