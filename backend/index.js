import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("this is my about page");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Hello contact</h1>");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, joke: "this is first joke" },
    { id: 2, joke: "this is second joke" },
    { id: 3, joke: "this is also a joke" },
  ];
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
