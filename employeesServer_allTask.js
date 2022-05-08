const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3004;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let employees = [
  { fname: "Gal", lname: "Cohen", id: 218445761, city: "Jerusalem" },
  { fname: "Dan", lname: "Levi", id: 218445800, city: "Holon" },
  { fname: "Or", lname: "Magen", id: 218443333, city: "Jaffo" },
  { fname: "Bar", lname: "Shalom", id: 355445801, city: "Haifa" },
];

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/:id", (req, res) => {
  let ids1 = req.params.id;
  let employee = employees.filter((v) => v.id == Number(ids1));
  console.log(employee)
  res.send(employee)
});

app.post("/employees", (req, res) => {
  employees.push(req.body);
  res.send(employees);
});

app.put("/employees/:id", (req, res) => {
  let ids2 = req.body.id;
  let employee = employees.filter((v) => v.id == Number(ids2));
  let index = employees.indexOf(employee[0]);
  employees.splice(index, 1, req.body);
  res.send(employees);
});

app.delete("/employees/:idd", (req, res) => {
  let ids3 = req.params.idd;
  let employee = employees.filter((v) => v.id == Number(ids3));
  let index = employees.indexOf(employee[0]);
  employees.splice(index, 1);
  res.send(employees);
});

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
