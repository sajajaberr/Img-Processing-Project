import express from "express";
import { resizeImage } from "../utils/imageProcessing";
const router = express.Router();

router.get("/", async (req, res) => {
  const filename = String(req.query.filename || "");
  const width = parseInt(String(req.query.width || "0"), 10);
  const height = parseInt(String(req.query.height || "0"), 10);

  if (!filename) return res.status(400).json({ error: "filename is required" });
  if (!width || !height)
    return res
      .status(400)
      .json({ error: "width and height required as positive integers" });

  try {
    const resultPath = await resizeImage(filename, width, height);
    return res.sendFile(resultPath);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

export default router;
