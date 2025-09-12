import request from "supertest";
import app from "../server/app";

describe("GET /api/images", () => {
  it("returns 400 when params missing", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "fjord", width: 200 });
    expect(res.status).toBe(400);
  });

  it("returns image when valid request", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "fjord", width: 200, height: 200 });
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toContain("image");
  });

  it("returns 400 when params missing", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "encenadaport", width: 200 });
    expect(res.status).toBe(400);
  });

  it("returns image when valid request", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "encenadaport", width: 200, height: 200 });
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toContain("image");
  });

  it("returns 400 when params missing", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "icelandwaterfall", width: 200 });
    expect(res.status).toBe(400);
  });

  it("returns image when valid request", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "icelandwaterfall", width: 200, height: 200 });
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toContain("image");
  });

  it("returns 400 when params missing", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "palmtunnel", width: 200 });
    expect(res.status).toBe(400);
  });

  it("returns image when valid request", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "palmtunnel", width: 200, height: 200 });
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toContain("image");
  });

  it("returns 400 when params missing", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "santamonica", width: 200 });
    expect(res.status).toBe(400);
  });

  it("returns image when valid request", async () => {
    const res = await request(app)
      .get("/api/images")
      .query({ filename: "santamonica", width: 200, height: 200 });
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toContain("image");
  });
});
