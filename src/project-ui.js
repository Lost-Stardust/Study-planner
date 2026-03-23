// code adapted from https://github.com/Lost-Stardust/Todo-list

import { projectList } from "./add-project";
import { todoList } from "./add-todo.js";
const makeProject = (project) => {
  let projectdiv = document.createElement("div");
  projectdiv.className = "project";
  projectdiv.dataset.index = projectList.indexOf(project);

  const projectContainer = document.querySelector(".projects-container");
  projectContainer.appendChild(projectdiv);

  projectdiv.textContent = project.name;
  console.log(projectdiv);

  //   code for task display

  const back = document.querySelector("#back");

  back.addEventListener("click", () => {
    const projectView = document.querySelector("#project-view");
    projectView.classList.remove("inactive");
    console.log("click");
  });

  // Create div for each project to display its respective todos in

  const pDisplay = document.createElement("div");
  // remove whitespace from textcontent to use as class name
  pDisplay.className = project.name.replace(/\s/g, "");
  pDisplay.dataset.index = projectList.indexOf(project);

  const content = document.querySelector(".task-container");
  content.appendChild(pDisplay);
  console.log(pDisplay);

  // const defaultProject = document.querySelector(".Default");
  // defaultProject.classList.add("active");
  // console.log(defaultProject);

  projectdiv.addEventListener("click", (e) => {
    // code for sliding to task view
    const projectView = document.querySelector("#project-view");
    projectView.classList.add("inactive");
    console.log("click");

    // remove whitespace from textContent to use as selector
    const name = project.name.replace(/\s/g, "");
    const pDisplay = document.querySelector(`.${name}`);

    // Select all poject display divs and remove active class for all
    const otherDisplays = content.querySelectorAll("div");
    otherDisplays.forEach((d) => {
      d.classList.remove("active");
    });
    // assign active class to clicked project's div
    pDisplay.classList.add("active");
  });

  //   Create and append buttons group div
  const buttons = document.createElement("div");
  buttons.className = "buttons";
  projectdiv.appendChild(buttons);

  //   Create and append add task button
  const addTodo = document.createElement("button");
  addTodo.className = "add-todo2";
  buttons.appendChild(addTodo);

  //   Create and append edit project button
  // const edit = document.createElement("button");
  // edit.className = "edit";
  // buttons.appendChild(edit);

  // Create and append remove button to project
  const remove = document.createElement("button");
  remove.className = "remove";
  buttons.appendChild(remove);

  remove.addEventListener("click", (e) => {
    let name = e.target.parentNode.parentNode.textContent.replace(/\s/g, "");
    console.log(name);

    let display = document.querySelector(`.${name}`);
    console.log(display);

    let children = display.childNodes;
    let childrenArr = Array.from(children);
    console.log(childrenArr);

    for (let i = 0; i < childrenArr.length; i++) {
      console.log(childrenArr[i]);
      let index = childrenArr[i].dataset.index;
      todoList[index].project = "Default";
      console.log(todoList[index]);
      localStorage.setItem("todoList", JSON.stringify(todoList));
      let defaultp = document.querySelector(".Default");
      defaultp.appendChild(childrenArr[i]);
      console.log(childrenArr);
    }

    display.remove();
    e.target.parentNode.parentNode.remove();
    e.stopPropagation();

    let index = e.target.parentNode.parentNode.dataset.index;
    console.log(index);
    projectList.splice(index, 1);
    console.log(projectList);

    // delete project from local storage
    const list = JSON.parse(localStorage.getItem("projList"));
    list.splice(index, 1);
    localStorage.setItem("projList", JSON.stringify(list));

    // correct data index of project buttons
    let defaultp = projectContainer.querySelector(".project");
    defaultp.classList.add("defaultProject");
    console.log(defaultp);
    let projs = document.querySelectorAll(".project:not(.defaultProject)");
    console.log(projs);
    let n = 0;
    projs.forEach((btn) => {
      btn.dataset.index = n;
      n++;
    });
  });

  console.log(projectList);
  const add = document.querySelector(".add-todo2");
  add.addEventListener("click", () => {
    const popup = document.querySelector(".todo-popup");
    const overlay = document.querySelector(".overlay");
    const projectSelect = document.querySelector("#projectSelect");
    popup.classList.add("active");
    overlay.classList.add("active");
    projectSelect.replaceChildren();
    const projectContainer = document.querySelector(".projects-container");
    const projectArr = projectContainer.querySelectorAll(".project");
    for (let i = 0; i < projectArr.length; i++) {
      const option = document.createElement("option");
      option.textContent = projectArr[i].textContent;
      projectSelect.appendChild(option);
    }
  });
};

// Create div for default project
let project = document.createElement("div");
project.className = "project";
const projectContainer = document.querySelector(".projects-container");
projectContainer.appendChild(project);

project.textContent = "Default";
console.log(project);

// Create display div for default project
const pDisplay = document.createElement("div");
pDisplay.className = "Default";

const content = document.querySelector(".task-container");
content.appendChild(pDisplay);

const defaultProject = document.querySelector(".Default");
// defaultProject.classList.add("active");
console.log(defaultProject);

project.addEventListener("click", (e) => {
  // code for sliding to task view
  const projectView = document.querySelector("#project-view");
  projectView.classList.add("inactive");
  console.log("click");

  // Select all poject display divs and remove active class for all
  const otherDisplays = content.querySelectorAll("div");
  otherDisplays.forEach((d) => {
    d.classList.remove("active");
  });
  // assign active class to clicked project's div
  pDisplay.classList.add("active");
});

export { makeProject };
