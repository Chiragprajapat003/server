const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express server is not running");
});



app.get("/users", (req, res) => {
  res.status(200).json(users);
});
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.listen(6001, () => {
  console.log("Server started on port 6001");
});
