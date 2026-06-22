const express = require("express");
const app = express();

app.use(express.json());

let students = [];

app.post("/students", (req, res) => {
    students.push(req.body);
    res.json({ message: "Student Added" });
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    res.json(students.find(s => s.id == req.params.id) || "Not Found");
});

app.put("/students/:id", (req, res) => {
    let s = students.find(x => x.id == req.params.id);
    if (!s) return res.json("Not Found");
    Object.assign(s, req.body);
    res.json({ message: "Updated" });
});

app.delete("/students/:id", (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server Running"));