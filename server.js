import express from "express"; // import the whole module (defualt export)
import { Liquid } from "liquidjs"; // import only the liquid class {}
import { getSquadData } from "./helpers/dataHelper.js";
import { getStudentId } from "./helpers/dataHelper.js";
import { getPersonResponse } from "./helpers/dataHelper.js";

const app = express();
const engine = new Liquid();

app.use(express.static("public"));

app.engine("liquid", engine.express()); //Express use liquid
app.set("views", "./views"); // set folder for templates
app.set("view engine", "liquid"); //use .liquid as template file

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const squadData = await getSquadData();
    const personResponse = await getPersonResponse();
    res.render("index.liquid", {
      persons: personResponse,
      squads: squadData,
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.post("/", async function (req, res) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van POST, redirect naar GET op /
  res.redirect(303, "/");
});

//haal nu id + naam op
app.get("/student/:id", async function (req, res) {
  try {
    const personDetail = await getStudentId(req);
    const squadData = await getSquadData();
    res.render("student.liquid", { person: personDetail, squads: squadData });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
