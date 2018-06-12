import express from "express";
const app = express();

const PORT = 8081;

app.use(express.static("public"));
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`p5-test listening on port ${PORT}`));
