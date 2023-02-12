import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send({
    name: "Fran",
    age: 30,
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
