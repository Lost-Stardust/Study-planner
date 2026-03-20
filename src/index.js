import "../src/styles.css";

// js module imports
import "./ui.js";
import { projectPopup } from "./project-popup";
import { makeProject } from "./project-ui";
import { projectList } from "./add-project";

projectPopup();

// project local storage
const storedProjs = JSON.parse(localStorage.getItem("projList"));
if (storedProjs.length !== 0) {
  storedProjs.forEach((proj) => {
    projectList.push(proj);
    console.log(projectList);
    makeProject(proj);
  });
}
