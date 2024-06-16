// require("dotenv").config({path: "./.env"});

import dotenv from "dotenv";
import connectToDB from "./db/index.js";

dotenv.config({ path: "./.env" });



connectToDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
  })
  .catch((error) => {
    console.log("MONGO DB Connection failed !! ", error);
  });






/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})()
*/