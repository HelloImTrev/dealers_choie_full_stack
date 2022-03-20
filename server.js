//DATA LAYER
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://localhost/fullstack_task");

const Task = sequelize.define("task", {
  taskName: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

const init = async () => {
  await sequelize.sync({ force: true });
  Task.create({ taskName: "Wash Car" });
  Task.create({ taskName: "Do Laundry" });
};

init();

//EXPRESS LAYER
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.post("/api/tasks", async (req, res, next) => {
  try {
    console.log(req.body);
    const newTask = await Task.create(req.body);
    console.log(`New task '${newTask}' has been created`);
    res.status(201).send(newTask);
  } catch (e) {
    next(e);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tasks", async (req, res, next) => {
  try {
    res.send(await Task.findAll({}));
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
