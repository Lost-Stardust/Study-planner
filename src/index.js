import "../src/styles.css";

// js module imports
import "./ui.js";
import { projectPopup } from "./project-popup.js";
import { makeProject } from "./project-ui";
import { projectList } from "./add-project";
import { todoPopup } from "./todo-popup.js";
import { makeTodo } from "./todo-ui";
import { todoList } from "./add-todo";

projectPopup();
todoPopup();

// project local storage
const storedProjs = JSON.parse(localStorage.getItem("projList"));
if (storedProjs.length !== 0) {
  storedProjs.forEach((proj) => {
    projectList.push(proj);
    console.log(projectList);
    makeProject(proj);
  });
}

// Retrieve stored todos and create them
const storedList = JSON.parse(localStorage.getItem("todoList"));
console.log(storedList);
if (storedList.length !== 0) {
  storedList.forEach((todo) => {
    todoList.push(todo);
    makeTodo(todo);
  });
}
