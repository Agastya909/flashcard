import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./note-route.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

const url = process.env.ATLAS_URL;
mongoose.connect(url, { useNewUrlParser: true });

app.use(cors());
app.use(express.json());

const connection = mongoose.connection;
connection.once("open", () => console.log(`Flashcard mongo db connected`));

app.use("/", router);
app.use("*", (req, res) =>
  res.status(404).json({ error: "404, page not found" })
);

app.listen(port, () => console.log(`server started on port ${port}`));
export default app;
