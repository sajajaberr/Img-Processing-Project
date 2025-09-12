import app from "./server/app";
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`Server on http://localhost:${port}`));
