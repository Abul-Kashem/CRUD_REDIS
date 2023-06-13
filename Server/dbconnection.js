import mongoose from "mongoose";

export const connection = async (url) => {
    // mongoose.connect("mongodb://localhost:27017/dbCrud");

    try {
        await mongoose.connect(url);
        console.log("db connected successfully");
    }
    catch (err) {
        console.log("Getting error while connecting to mongodb", err);
    }
}
