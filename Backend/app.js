import express from "express";
import cors from 'cors';
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
const port = process.env.PORT;

var corsOptions = {
    origin: ['http://localhost:5174'],
    optionsSuccessStatus: 200,
    credentials: true
}

dbConnection;

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api", authRoutes);

app.use('/*', (req, res, next) => {
    res.status(404).json({status: "Error", message: "Url is not valid."});
    next();
})

app.listen(port, () => {
    console.log(`Sever is created on port ${port}.`);
});
