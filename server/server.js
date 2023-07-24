const express = require("express");
const cors = require("cors");
const {readdirSync} = require("fs");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


readdirSync("./routes").map((r) => 
  app.use("/api", require(`./routes/${r}`))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
  console.log(`Server run on ${PORT}`)
})
