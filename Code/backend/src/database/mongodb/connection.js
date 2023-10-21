import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

main()
.then(() => console.log("Mongodb connection successfull"))
.catch(err => console.log("Mongodb connection error: " , err));

async function main() {
    await mongoose.connect(MONGODB_URI);
}