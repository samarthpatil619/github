const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { selectUser, addUser } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  let user = req.body;

  await addUser(user);
  res.json({ message: "Add User" });
});

app.listen(4000, () => console.log("Server started........"));
