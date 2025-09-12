import { resizeImage } from "../utils/imageProcessing";
import fs from "fs";

describe("Image Processing Function", () => {
  it("should resize image with valid parameters and save it to thumb folder", async () => {
    const outputPath = await resizeImage("fjord", 200, 200);
    expect(fs.existsSync(outputPath)).toBeTrue();
  });
  it("should throw error for non-existent source image", async () => {
    await expectAsync(
      resizeImage("nonexistent", 200, 200)
    ).toBeRejectedWithError();
  });
});
