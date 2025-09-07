import app from "./server/app";
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on http://localhost:${port}`));
