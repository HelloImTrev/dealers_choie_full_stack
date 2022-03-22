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
  },
});

const Employee = sequelize.define("employee", {
  name: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

Task.belongsTo(Employee);
Employee.hasMany(Task);

const init = async () => {
  try {
    await sequelize.sync({ force: true });

    const [prof, fred, susey] = await Promise.all([
      Employee.create({ name: "Eric (Prof) Katz" }),
      Employee.create({ name: "Fred" }),
      Employee.create({ name: "Susey" }),
    ]);

    await Promise.all([
      Task.create({ taskName: "Wash Car", employeeId: fred.id }),
      Task.create({ taskName: "Do Laundry", employeeId: susey.id }),
      Task.create({ taskName: "Do a little cheat", employeeId: prof.id }),
    ]);
  } catch (e) {
    console.log(e);
  }
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
    const newTask = await Task.create(req.body);
    console.log(`New task '${req.body}' has been created`);
    res.status(201).send(newTask);
  } catch (e) {
    next(e);
  }
});

app.post("/api/employees", async (req, res, next) => {
  try {
    const newEmployee = await Employee.create(req.body);
    console.log(`New employee '${newEmployee}' has been created`);
    res.status(201).send(newEmployee);
  } catch (e) {
    next(e);
  }
});

app.put('/api/tasks/:id', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);

    task.update({
      employeeId: null
    });

    res.sendStatus(200);
  } catch(e) {
    next(e);
  }
});

app.delete("/api/tasks/:id", async (req, res, next) => {
  try {
    const deletedTask = await Task.findByPk(req.params.id);
    await deletedTask.destroy();
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

app.delete("/api/employees/:id", async (req, res, next) => {
  try {
    console.log('server id:',req.params.id)
    const deletedEmployee = await Employee.findByPk(req.params.id);
    console.log('deleted employee:', deletedEmployee);
    await deletedEmployee.destroy();
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tasks", async (req, res, next) => {
  try {
    res.send(
      await Task.findAll({
        include: [Employee],
      })
    );
  } catch (e) {
    next(e);
  }
});

app.get("/api/employees", async (req, res, next) => {
  try {
    res.send(
      await Employee.findAll({
        include: [Task],
      })
    );
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
