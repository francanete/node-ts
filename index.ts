import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola World!");
});

app.get("/api", (req, res) => {
  res.send({
    name: "Yoda",
    age: 900,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
