import express from "express";
import cors from "cors";
import fs from "fs";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


fs.readdirSync("./routes").map((r) => 
  app.use("/api", require(`./routes/${r}`))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
  console.log(`Server run on ${PORT}`)
})
