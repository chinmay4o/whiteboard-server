import express from "express"
import connectDB from "./mongoDB/db.js"
import dotenv from "dotenv"
import cors from "cors"
import {imgRouter} from "./routes/imageRoutes.js"

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

connectDB();

// const PORT = process.env.PORT || 5000
const PORT = process.env.PORT

app.use("/" , imgRouter);

app.listen(PORT , () => {
    console.log('listening on port 5001');
});