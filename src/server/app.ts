import express from "express";
import imagesRouter from "../routes/images";
import placeholderRouter from "../routes/placeholder";

const app = express();
app.use(express.json());
app.use("/api/images", imagesRouter);
app.use("/api/placeholder", placeholderRouter);

app.get("/", (_req, res) => res.send("Image Processing API is running"));
export default app;
