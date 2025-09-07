import path from "path";
import fs from "fs/promises";
import sharp from "sharp";

const fullDir = path.resolve(__dirname, "../../images/full");
const thumbDir = path.resolve(__dirname, "../../images/thumb");

async function ensureThumbDir() {
  await fs.mkdir(thumbDir, { recursive: true });
}

export async function resizeImage(
  filename: string,
  width: number,
  height: number
): Promise<string> {
  if (
    !Number.isInteger(width) ||
    width <= 0 ||
    !Number.isInteger(height) ||
    height <= 0
  ) {
    throw new Error("width and height must be positive integers");
  }

  const inputFile = path.join(fullDir, `${filename}.jpg`);

  try {
    await fs.access(inputFile);
  } catch {
    throw new Error(`Source image ${filename}.jpg not found`);
  }

  await ensureThumbDir();

  const outputFilename = `${filename}_${width}x${height}.jpg`;
  const outputFile = path.join(thumbDir, outputFilename);

  try {
    await fs.access(outputFile);
    return outputFile; // cache hit
  } catch {
    await sharp(inputFile).resize(width, height).toFile(outputFile);
    return outputFile; // newly created
  }
}
