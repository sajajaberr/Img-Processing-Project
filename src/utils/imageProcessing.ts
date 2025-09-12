import path from "path";
import fs from "fs";
import sharp from "sharp";

const fullDir = path.resolve(__dirname, "../../images/full");
const thumbDir = path.resolve(__dirname, "../../images/thumb");

async function ensureThumbDir(): Promise<void> {
  await fs.promises.mkdir(thumbDir, { recursive: true });
}

export async function resizeImage(
  filename: string,
  width: number,
  height: number
): Promise<string> {
  try {
    const inputPath = path.join(fullDir, `${filename}.jpg`);
    const outputPath = path.join(
      thumbDir,
      `${filename}_${width}_${height}.jpg`
    );

    if (fs.existsSync(outputPath)) {
      return outputPath;
    }

    await sharp(inputPath).resize(width, height).toFile(outputPath);

    return outputPath;
  } catch (error) {
    throw new Error(`Image processing failed: ${(error as Error).message}`);
  }
}
