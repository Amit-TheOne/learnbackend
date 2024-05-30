import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MONGODB CONNECTED SUCCESSFULLY !! DB HOST: ${connectionInstance.connection.host}`);
    // console.log(connectionInstance.connection);
    
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR: ", error);
    process.exit(1);
  }
}

export default connectToDB;