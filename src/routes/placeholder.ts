import express from "express";
import sharp from "sharp";

const router = express.Router();

router.get("/", async (req, res) => {
  const width = parseInt(String(req.query.width || "300"), 10);
  const height = parseInt(String(req.query.height || "200"), 10);
  const text = String(req.query.text || `${width}x${height}`);
  const bg = String(req.query.bg || "#dddddd");

  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bg}"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${Math.floor(Math.min(width, height) / 8)}" fill="#333">${text}</text>
  </svg>`;

  const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
  res.set("Content-Type", "image/png");
  res.send(buffer);
});

export default router;
