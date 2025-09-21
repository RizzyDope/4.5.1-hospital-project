import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT||3000;
let appointments = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");

  });

app.post("/appointment", (req, res) => {
    const {name, email, tel} = req.body;

    appointments.push({name, email, tel});
    res.render("approval", {name});
});  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });  