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
  employeeId: {
    type: DataTypes.INTEGER,
    defaultValue: null
  }
});

const Employee = sequelize.define("employee", {
  name: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  }
})

const init = async () => {
  await sequelize.sync({ force: true });
  Task.create({ taskName: "Wash Car" });
  Task.create({ taskName: "Do Laundry" });
  Task.create({ taskName: "Do a little cheat" });

  Employee.create({ name: 'Eric (Prof) Katz'});
  Employee.create({ name: 'Fred'});
  Employee.create({ name: 'Susey'});
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

app.delete('/api/tasks/:id', async(req, res, next) => {
  try{
    const deletedTask = await Task.findByPk(req.params.id);
    await deletedTask.destroy();
    res.sendStatus(204);
  } catch(e) {
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

app.get("/api/employees", async (req, res, next) => {
  try{
    res.send(await Employee.findAll({}));
  } catch(e) {
    next(e);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});