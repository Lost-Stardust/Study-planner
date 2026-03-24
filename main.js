/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/trash.svg */ "./src/assets/trash.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/add.svg */ "./src/assets/add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pencil.svg */ "./src/assets/pencil.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/caret-left.svg */ "./src/assets/caret-left.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

/* Custom styles */

body {
  font-family: "Google Sans", sans-serif;
  color: white;
  cursor: default;
  overflow: hidden;
}

#wrapper {
  display: none;
}

#wrapper.active {
  display: flex;
  height: 100%;
  background: linear-gradient(
    148deg,
    rgba(24, 1, 42, 1) 0%,
    rgba(57, 3, 97, 1) 50%,
    rgba(5, 0, 9, 1) 100%
  );
}
/* . */
/* . */
/* . */
/*  ========== HUZIAFA'S SIGN UP FORM CODE ==========  */

#sign-up-page.active,
#log-in-page.active,
#forgot-pass-page.active {
  display: flex;
  height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #1e0a2f, #4c1d95, #9333ea);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Arial, sans-serif;
}
#sign-up-page {
  display: none;
}
#log-in-page {
  display: none;
}
#forgot-pass-page {
  display: none;
}

/* LEFT PANEL */
.cat-box {
  width: 40%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 40px;
  text-align: center;
}

/* LOGO + TITLE */
.logo-container h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.credit {
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  opacity: 0.7;
}

/* RIGHT FORM SECTION */
.form-box {
  width: 60%;
  background: rgba(30, 20, 60, 0.75);
  backdrop-filter: blur(15px);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

/* TEXT */
.text {
  margin-bottom: 30px;
  font-size: 18px;
  opacity: 0.9;
}

/* FORM STRUCTURE */
form fieldset {
  border: none;
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
}

/* FIXED SELECTOR (IMPORTANT) */
.sign-up-form > div,
.sign-up-form fieldset > div {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* LABEL */
label {
  font-size: 12px;
  margin-bottom: 6px;
  opacity: 0.8;
}

/*  INPUT + ICON SYSTEM  */

.input-box {
  margin-bottom: 15px;
}

/* ICON CONTAINER */
.input-icon {
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 52px;
  transition: 0.3s ease;
}

/* ICON */
.input-icon i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #c084fc;
}

/* INPUT */
.input-icon input {
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  padding: 0 12px 0 45px; /* space for icon */
  color: white;
  font-size: 14px;
}

/* REMOVE DEFAULT INPUT STYLE */
.input-icon input:focus {
  outline: none;
}

/* HOVER */
.input-icon:hover {
  border: 1px solid #a855f7;
}

/* FOCUS */
.input-icon:focus-within {
  border: 1px solid #c084fc;
  box-shadow: 0 0 8px rgba(192, 132, 252, 0.6);
}

/* BUTTON  */

button {
  background: linear-gradient(90deg, #a855f7, #c084fc);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s ease;
}

.btn-box > button:hover,
.log-in:hover {
  background: linear-gradient(90deg, #9333ea, #a855f7);
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.btn-box {
  margin-top: 25px;
}

/* LOGIN TEXT */
.login {
  margin-top: 15px;
  opacity: 0.85;
}

.login a {
  color: #c084fc;
  text-decoration: none;
}

.login a:hover {
  text-decoration: underline;
}

/* PASSWORD ERROR */
.pw-match {
  display: none;
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 5px;
}

/* LOGIN TITLE */
.login-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 30px;
}

/* RIGHT INFO */
.right-info {
  color: white;
  max-width: 400px;
  margin: auto;
  text-align: left;
}

.right-info h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.right-info p {
  opacity: 0.8;
  margin-bottom: 20px;
}

.right-info li {
  margin-bottom: 10px;
  font-size: 15px;
}

/* FORGOT PASSWORD */
.forgot-password {
  margin-top: 6px;
  margin-bottom: 18px;
  font-size: 14px;
}

.forgot-password a {
  color: #c084fc;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}
.btn-box button {
  width: 100%;
}

/*  ========== HUZIAFA'S SIGN UP FORM CODE ========== */
/* . */
/* . */
/* . */
/* page styles */

#Dashboard {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 4%;
  margin-top: 1.5%;
  display: none;
}
#Projects {
  display: flex;
  flex: 1;
  flex-direction: column;
  display: none;
  position: relative;
}
#project-view {
  flex: 1;
  padding: 4%;
  padding-top: 1.5%;
  z-index: 1;
  background: linear-gradient(
    148deg,
    rgba(24, 1, 42, 1) 0%,
    rgba(57, 3, 97, 1) 50%,
    rgba(5, 0, 9, 1) 100%
  );
  transform: translateX(0%);
  -webkit-transition: transform 2s ease-in-out;
  transition: transform 1.4s ease-in-out;
}
#project-view.inactive {
  transform: translateX(-100%);
}
#task-view {
  width: 100%;
  height: 100%;
  padding: 4%;
  padding-top: 1.5%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 0;
}
#Settings {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 4%;
  margin-top: 1.5%;
  display: none;
}

/* sidebar styles */

#sidebar {
  flex: 0.17;
  max-width: 254px;
  min-width: 170px;
  background-color: black;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}
.options {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5%;
}
.options > div {
  display: flex;
  gap: 8%;
  padding: 3%;
  border-radius: 8px;
  cursor: pointer;
}
.options > div:hover {
  color: #9811fa;
}
.title {
  border-bottom: solid 1px rgb(83, 83, 83);
  padding: 4%;
  margin: 4%;
  font-size: 27px;
  background: -webkit-linear-gradient(180deg, #9811fa 40%, #f8a7ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.options,
.options > div,
.account {
  margin: 4%;
  font-size: 20px;
  color: #b1b1b1;
}
.account {
  display: flex;
  align-items: center;
  gap: 15%;
  background-color: #5a5a5a56;
  padding: 3%;
  border-radius: 20px;
  font-size: 22px;
}
.account > .pfp {
  background: linear-gradient(160deg, #9811fa 30%, #53008e 100%);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 15px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/* Dashboard styles */

.greeting {
  flex: 0.24;
  color: white;
}
.greeting > h1 {
  font-size: 2.6em;
}
.greeting > p {
  font-size: 18px;
}
.cardsOne {
  flex: 0.35;
  display: flex;
}
.cardsTwo {
  flex: 1;
  display: flex;
}
.cardsOne > div,
.cardsTwo > div {
  flex: 1;
  margin: 1%;
  border-radius: 10px;
  background: linear-gradient(
    124deg,
    rgba(83, 31, 122, 1) 0%,
    rgba(64, 27, 90, 0.76) 100%
  );
  padding: 1%;
}
.cardsTwo > .two {
  display: flex;
  flex-direction: column;
}
.cardsOne > .one ~ div > div,
.cardsOne > .one > div {
  flex: 1;
}
.cardsOne > .one ~ div,
.cardsOne > .one {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  padding-left: 1.5%;
  gap: 10%;
}
.icon {
  align-content: center;
}
.text {
  align-content: center;
}
.text > p {
  font-size: 17px;
  opacity: 0.7;
}
.cardsTwo > .one {
  display: flex;
  flex-direction: column;
}
.session {
  flex: 0.12;
  display: flex;
  padding: 1%;
  gap: 1%;
}
.session > div {
  flex: 1;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;
}
.session > .btn1 {
  background: linear-gradient(160deg, #9811fa 30%, #53008e 100%);
}
.session > .btn2 {
  background-color: #7f40afa4;
  color: #9e9e9e;
}
.timer {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.timer > .clock {
  margin-top: 5%;
  width: 270px;
  height: 270px;
  border-radius: 200px;
  align-self: center;
  justify-self: center;
  border: solid 15px #9811fa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
}
.timer > .controls {
  flex: 0.7;
  display: flex;
  justify-content: space-evenly;
}
.controls > div {
  background: linear-gradient(160deg, #9811fa 30%, #53008e 100%);
  width: 70px;
  height: 70px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cardsTwo > .two > .task {
  flex: 1;
  margin: 1%;
  /* box-shadow:
    rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px; */
  border-radius: 10px;
  display: flex;
  padding: 2%;
  font-size: 25px;
  box-shadow: rgba(0, 0, 0, 0.398) 1.95px 1.95px 2.6px;
  justify-content: space-between;
  align-items: center;
  color: #d8d8d8;
  background-color: transparent;
}

/* Projects styles */

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header > h1 {
  font-size: 2.6em;
}
.add-project {
  width: 100px;
  height: 50px;
  border-radius: 100px;
  background: linear-gradient(160deg, #9811fa 0%, #53008e 100%);
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}
.projects-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  padding-top: 4%;
}
.project {
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 13px;
  font-size: 1.3em;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background: linear-gradient(160deg, #9811fa 0%, #53008e7f 100%);
  cursor: pointer;
}
.project:hover {
  background: linear-gradient(160deg, #9811fa 80%, #53008e7f 100%);
}
.Default.active,
.Default {
  display: none;
}
.project > .buttons {
  display: flex;
  gap: 40px;
  height: 70%;
  z-index: 3;
}
.project > .buttons > .remove,
.project > .buttons > .add-todo2,
.project > .buttons > .edit {
  width: 30px;
  border: none;
  cursor: pointer;
  padding: 0;
}
.project > .buttons > .remove {
  background: no-repeat center / contain url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.project > .buttons > .add-todo2 {
  background: no-repeat center / contain url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.project > .buttons > .edit {
  background: no-repeat center / contain url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

/* tasks styles */

#task-view > .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25em;
}
#back {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: none;
  background: no-repeat center/contain url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  cursor: pointer;
}
.task-container {
  flex: 1;
  padding-top: 4%;
  padding-left: 4%;
  overflow-y: scroll;
}
.task-container > div {
  display: none;
  gap: 30px;
  flex-wrap: wrap;
}
.add-todo {
  background: no-repeat center/contain url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
}
.todo {
  border-radius: 25px;
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: column-reverse;
  background: linear-gradient(160deg, #9811fa 0%, #53008e7f 100%);
  padding: 1%;
}
.title-box {
  flex: 1;
  display: flex;
  align-items: start;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
}
.todo-title {
  color: white;
}
.other-info {
  flex: 1;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: end;
}
.title-wrapper > p {
  margin: 0;
}
.desc {
  font-size: 15px;
}
.edit {
  width: 25px;
  height: 25px;
}
.edit:hover {
  cursor: pointer;
}
.trash {
  width: 25px;
  height: 25px;
}
.trash:hover {
  cursor: pointer;
}
.todo-date,
.todo-priority {
  font-size: 18px;
  font-weight: bold;
}
.Default.active {
  display: flex;
  flex: 1;
  flex-direction: row;
}
.task-container > div.active {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
}

/* adapted from https://github.com/Lost-Stardust/Calculator */
.task-container::-webkit-scrollbar {
  width: 1em;
  height: 10px;
}
.task-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.664);
  border-radius: 10px;
}
.task-container::-webkit-scrollbar-thumb {
  background-color: #9911fa63;
  outline: 1px solid black;
  border-radius: 5px;
}

/* popup styles */

.popup {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  border-radius: 7px;
  height: 200px;
  z-index: 10;
  min-width: 25%;
  padding: 10px 15px 0 15px;
  background: #53008e;

  display: flex;
  flex-direction: column;
  gap: 5%;
}
.overlay {
  position: fixed;
  opacity: 0;
  transition: 200ms ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 2;
}
.popup form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.popup > form > .buttons {
  display: flex;
  justify-content: space-between;
}
.popup > form > .buttons > button {
  width: 70px;
  height: 40px;
  border-radius: 10px;
  background: #9811fa;
  color: white;
  font-size: 17px;
  border: none;
  cursor: pointer;
  padding: 0;
}
form > #project-title {
  border-radius: 10px;
  border: none;
  font-size: 20px;
}
.popup.active {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
.overlay.active {
  opacity: 1;
  pointer-events: all;
}
.todo-popup,
.edit-popup {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  border-radius: 7px;
  height: 200px;
  z-index: 10;
  min-width: 30%;
  padding: 15px;
  background: #53008e;

  display: flex;
  flex-direction: column;

  border: solid black 1px;
}
.todo-popup.active,
.edit-popup.active {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
.todo-popup form,
.edit-popup form {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
}
form > .buttons {
  padding-top: 2%;
}
.todo-popup #todo-title,
.edit-popup #edit-title {
  font-size: 20px;
  border-radius: 10px 10px 0px 0px;
  border: none;
}
.todo-popup #desc,
.edit-popup #edit-desc {
  font-size: 20px;
  border-radius: 0px 0px 10px 10px;
  border: none;
}
.todo-popup .buttons,
.edit-popup .buttons {
  justify-content: space-between;
}
.leftBtns,
.rightBtns {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}
.leftBtns {
  justify-content: start;
}
.leftBtns > .priority {
  color: white;
  border: #9811fa solid 2px;
  border-radius: 10px;
}
.priority > option,
.edit-priority > option {
  color: black;
}
.buttons div button {
  font-size: 17px;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9811fa;
  color: white;
}
/* .rightBtns .add {
  color: white;
  /* display: flex;
  align-items: center;
  justify-content: center; 
}*/
.rightBtns button,
.leftBtns button {
  height: 30px;
  background-color: rgba(128, 128, 128, 0.116);
}
.rightBtns .edit-confirm {
  background-color: #7b2cbf;
}
#date,
#edit-date {
  background-color: rgba(128, 128, 128, 0.116);
  border: #9811fa 2px solid;
  border-radius: 10px;

  width: 125px;
  color: white;
}
.dropdowns,
.edit-dropdowns {
  display: flex;
}
.priority,
#projectSelect,
.edit-priority,
#edit-projectSelect {
  border: #9811fa 2px solid;
  border-radius: 10px;
  background: none;
  color: white;
}
.priority:focus,
#projectSelect:focus,
.edit-priority:focus,
#edit-projectSelect:focus {
  outline: none;
}
#projectSelect,
#edit-projectSelect {
  padding: 4px;
}
#projectSelect > option,
#edit-projectSelect > option {
  color: black;
}
#picker {
  color: white;
}

/* sidebar options active */
.options > div.active {
  background: linear-gradient(160deg, #9811fa 0%, #4a007e 100%);
}

/* view active */
#Dashboard.active {
  display: flex;
}
#Projects.active {
  display: flex;
}
#Settings.active {
  display: flex;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;EAEE,YAAY;AACd;AACA;EACE,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA,kBAAkB;;AAIlB;EACE,sCAAsC;EACtC,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ;;;;;GAKC;AACH;AACA,MAAM;AACN,MAAM;AACN,MAAM;AACN,wDAAwD;;AAExD;;;EAGE,aAAa;EACb,aAAa;EACb,aAAa;EACb,8DAA8D;EAC9D,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,0CAA0C;AAC5C;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA,eAAe;AACf;EACE,UAAU;EACV,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA,uBAAuB;AACvB;EACE,UAAU;EACV,kCAAkC;EAClC,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA,SAAS;AACT;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,YAAY;EACZ,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA,+BAA+B;AAC/B;;EAEE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA,UAAU;AACV;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA,0BAA0B;;AAE1B;EACE,mBAAmB;AACrB;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,mBAAmB;EACnB,0CAA0C;EAC1C,YAAY;EACZ,qBAAqB;AACvB;;AAEA,SAAS;AACT;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,2BAA2B;EAC3B,eAAe;EACf,cAAc;AAChB;;AAEA,UAAU;AACV;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,sBAAsB,EAAE,mBAAmB;EAC3C,YAAY;EACZ,eAAe;AACjB;;AAEA,+BAA+B;AAC/B;EACE,aAAa;AACf;;AAEA,UAAU;AACV;EACE,yBAAyB;AAC3B;;AAEA,UAAU;AACV;EACE,yBAAyB;EACzB,4CAA4C;AAC9C;;AAEA,YAAY;;AAEZ;EACE,oDAAoD;EACpD,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;;EAEE,oDAAoD;EACpD,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;AAClB;;AAEA,eAAe;AACf;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA,oBAAoB;AACpB;EACE,eAAe;EACf,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B;AACA;EACE,WAAW;AACb;;AAEA,uDAAuD;AACvD,MAAM;AACN,MAAM;AACN,MAAM;AACN,gBAAgB;;AAEhB;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,UAAU;EACV,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,OAAO;EACP,WAAW;EACX,iBAAiB;EACjB,UAAU;EACV;;;;;GAKC;EACD,yBAAyB;EACzB,4CAA4C;EAC5C,sCAAsC;AACxC;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,UAAU;EACV,gBAAgB;EAChB,aAAa;AACf;;AAEA,mBAAmB;;AAEnB;EACE,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,OAAO;EACP,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,wCAAwC;EACxC,WAAW;EACX,UAAU;EACV,eAAe;EACf,iEAAiE;EACjE,qBAAqB;EACrB,oCAAoC;AACtC;AACA;;;EAGE,UAAU;EACV,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,2BAA2B;EAC3B,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,8DAA8D;EAC9D,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA,qBAAqB;;AAErB;EACE,UAAU;EACV,YAAY;AACd;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,UAAU;EACV,aAAa;AACf;AACA;EACE,OAAO;EACP,aAAa;AACf;AACA;;EAEE,OAAO;EACP,UAAU;EACV,mBAAmB;EACnB;;;;GAIC;EACD,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;;EAEE,OAAO;AACT;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,aAAa;EACb,WAAW;EACX,OAAO;AACT;AACA;EACE,OAAO;EACP,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,OAAO;AACT;AACA;EACE,8DAA8D;AAChE;AACA;EACE,2BAA2B;EAC3B,cAAc;AAChB;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,SAAS;EACT,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,8DAA8D;EAC9D,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,OAAO;EACP,UAAU;EACV;;uCAEqC;EACrC,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,eAAe;EACf,oDAAoD;EACpD,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,6BAA6B;AAC/B;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,6DAA6D;EAC7D,YAAY;EACZ,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,SAAS;EACT,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,+DAA+D;EAC/D,eAAe;AACjB;AACA;EACE,gEAAgE;AAClE;AACA;;EAEE,aAAa;AACf;AACA;EACE,aAAa;EACb,SAAS;EACT,WAAW;EACX,UAAU;AACZ;AACA;;;EAGE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,UAAU;AACZ;AACA;EACE,8EAAgE;AAClE;AACA;EACE,8EAA8D;AAChE;AACA;EACE,8EAAiE;AACnE;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,4EAAiE;EACjE,eAAe;AACjB;AACA;EACE,OAAO;EACP,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,SAAS;EACT,eAAe;AACjB;AACA;EACE,4EAA0D;EAC1D,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,+DAA+D;EAC/D,WAAW;AACb;AACA;EACE,OAAO;EACP,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;EACE,OAAO;EACP,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;;EAEE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,OAAO;EACP,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,OAAO;EACP,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA,6DAA6D;AAC7D;EACE,UAAU;EACV,YAAY;AACd;AACA;EACE,8CAA8C;EAC9C,mBAAmB;AACrB;AACA;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,UAAU;EACV,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,cAAc;EACd,yBAAyB;EACzB,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;AACA;EACE,eAAe;EACf,UAAU;EACV,6BAA6B;EAC7B,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,eAAe;EACf,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,yCAAyC;EACzC,UAAU;AACZ;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;;EAEE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,UAAU;EACV,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,cAAc;EACd,aAAa;EACb,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;;EAEtB,uBAAuB;AACzB;AACA;;EAEE,yCAAyC;EACzC,UAAU;AACZ;AACA;;EAEE,aAAa;EACb,sBAAsB;;EAEtB,YAAY;EACZ,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;;EAEE,eAAe;EACf,gCAAgC;EAChC,YAAY;AACd;AACA;;EAEE,eAAe;EACf,gCAAgC;EAChC,YAAY;AACd;AACA;;EAEE,8BAA8B;AAChC;AACA;;EAEE,aAAa;EACb,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;AACrB;AACA;;EAEE,YAAY;AACd;AACA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,YAAY;AACd;AACA;;;;;EAKE;AACF;;EAEE,YAAY;EACZ,4CAA4C;AAC9C;AACA;EACE,yBAAyB;AAC3B;AACA;;EAEE,4CAA4C;EAC5C,yBAAyB;EACzB,mBAAmB;;EAEnB,YAAY;EACZ,YAAY;AACd;AACA;;EAEE,aAAa;AACf;AACA;;;;EAIE,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;AACA;;;;EAIE,aAAa;AACf;AACA;;EAEE,YAAY;AACd;AACA;;EAEE,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA,2BAA2B;AAC3B;EACE,6DAA6D;AAC/D;;AAEA,gBAAgB;AAChB;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* Custom styles */\n\n@import url(\"https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap\");\n\nbody {\n  font-family: \"Google Sans\", sans-serif;\n  color: white;\n  cursor: default;\n  overflow: hidden;\n}\n\n#wrapper {\n  display: none;\n}\n\n#wrapper.active {\n  display: flex;\n  height: 100%;\n  background: linear-gradient(\n    148deg,\n    rgba(24, 1, 42, 1) 0%,\n    rgba(57, 3, 97, 1) 50%,\n    rgba(5, 0, 9, 1) 100%\n  );\n}\n/* . */\n/* . */\n/* . */\n/*  ========== HUZIAFA'S SIGN UP FORM CODE ==========  */\n\n#sign-up-page.active,\n#log-in-page.active,\n#forgot-pass-page.active {\n  display: flex;\n  height: 100vh;\n  display: flex;\n  background: linear-gradient(135deg, #1e0a2f, #4c1d95, #9333ea);\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n}\n#sign-up-page {\n  display: none;\n}\n#log-in-page {\n  display: none;\n}\n#forgot-pass-page {\n  display: none;\n}\n\n/* LEFT PANEL */\n.cat-box {\n  width: 40%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  padding: 40px;\n  text-align: center;\n}\n\n/* LOGO + TITLE */\n.logo-container h1 {\n  font-size: 36px;\n  margin-bottom: 10px;\n}\n\n.credit {\n  position: absolute;\n  bottom: 20px;\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n/* RIGHT FORM SECTION */\n.form-box {\n  width: 60%;\n  background: rgba(30, 20, 60, 0.75);\n  backdrop-filter: blur(15px);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 60px;\n  border-radius: 20px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\n}\n\n/* TEXT */\n.text {\n  margin-bottom: 30px;\n  font-size: 18px;\n  opacity: 0.9;\n}\n\n/* FORM STRUCTURE */\nform fieldset {\n  border: none;\n  display: flex;\n  gap: 25px;\n  margin-bottom: 20px;\n}\n\n/* FIXED SELECTOR (IMPORTANT) */\n.sign-up-form > div,\n.sign-up-form fieldset > div {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n/* LABEL */\nlabel {\n  font-size: 12px;\n  margin-bottom: 6px;\n  opacity: 0.8;\n}\n\n/*  INPUT + ICON SYSTEM  */\n\n.input-box {\n  margin-bottom: 15px;\n}\n\n/* ICON CONTAINER */\n.input-icon {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  height: 52px;\n  transition: 0.3s ease;\n}\n\n/* ICON */\n.input-icon i {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 16px;\n  color: #c084fc;\n}\n\n/* INPUT */\n.input-icon input {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: transparent;\n  padding: 0 12px 0 45px; /* space for icon */\n  color: white;\n  font-size: 14px;\n}\n\n/* REMOVE DEFAULT INPUT STYLE */\n.input-icon input:focus {\n  outline: none;\n}\n\n/* HOVER */\n.input-icon:hover {\n  border: 1px solid #a855f7;\n}\n\n/* FOCUS */\n.input-icon:focus-within {\n  border: 1px solid #c084fc;\n  box-shadow: 0 0 8px rgba(192, 132, 252, 0.6);\n}\n\n/* BUTTON  */\n\nbutton {\n  background: linear-gradient(90deg, #a855f7, #c084fc);\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: 0.3s ease;\n}\n\n.btn-box > button:hover,\n.log-in:hover {\n  background: linear-gradient(90deg, #9333ea, #a855f7);\n  transform: scale(1.05);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n\n.btn-box {\n  margin-top: 25px;\n}\n\n/* LOGIN TEXT */\n.login {\n  margin-top: 15px;\n  opacity: 0.85;\n}\n\n.login a {\n  color: #c084fc;\n  text-decoration: none;\n}\n\n.login a:hover {\n  text-decoration: underline;\n}\n\n/* PASSWORD ERROR */\n.pw-match {\n  display: none;\n  color: #ff6b6b;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n/* LOGIN TITLE */\n.login-title {\n  font-size: 42px;\n  font-weight: 700;\n  margin-bottom: 30px;\n}\n\n/* RIGHT INFO */\n.right-info {\n  color: white;\n  max-width: 400px;\n  margin: auto;\n  text-align: left;\n}\n\n.right-info h1 {\n  font-size: 40px;\n  margin-bottom: 20px;\n}\n\n.right-info p {\n  opacity: 0.8;\n  margin-bottom: 20px;\n}\n\n.right-info li {\n  margin-bottom: 10px;\n  font-size: 15px;\n}\n\n/* FORGOT PASSWORD */\n.forgot-password {\n  margin-top: 6px;\n  margin-bottom: 18px;\n  font-size: 14px;\n}\n\n.forgot-password a {\n  color: #c084fc;\n  text-decoration: none;\n}\n\n.forgot-password a:hover {\n  text-decoration: underline;\n}\n.btn-box button {\n  width: 100%;\n}\n\n/*  ========== HUZIAFA'S SIGN UP FORM CODE ========== */\n/* . */\n/* . */\n/* . */\n/* page styles */\n\n#Dashboard {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 4%;\n  margin-top: 1.5%;\n  display: none;\n}\n#Projects {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  display: none;\n  position: relative;\n}\n#project-view {\n  flex: 1;\n  padding: 4%;\n  padding-top: 1.5%;\n  z-index: 1;\n  background: linear-gradient(\n    148deg,\n    rgba(24, 1, 42, 1) 0%,\n    rgba(57, 3, 97, 1) 50%,\n    rgba(5, 0, 9, 1) 100%\n  );\n  transform: translateX(0%);\n  -webkit-transition: transform 2s ease-in-out;\n  transition: transform 1.4s ease-in-out;\n}\n#project-view.inactive {\n  transform: translateX(-100%);\n}\n#task-view {\n  width: 100%;\n  height: 100%;\n  padding: 4%;\n  padding-top: 1.5%;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  z-index: 0;\n}\n#Settings {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 4%;\n  margin-top: 1.5%;\n  display: none;\n}\n\n/* sidebar styles */\n\n#sidebar {\n  flex: 0.17;\n  max-width: 254px;\n  min-width: 170px;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 2;\n}\n.options {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5%;\n}\n.options > div {\n  display: flex;\n  gap: 8%;\n  padding: 3%;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.options > div:hover {\n  color: #9811fa;\n}\n.title {\n  border-bottom: solid 1px rgb(83, 83, 83);\n  padding: 4%;\n  margin: 4%;\n  font-size: 27px;\n  background: -webkit-linear-gradient(180deg, #9811fa 40%, #f8a7ff);\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.options,\n.options > div,\n.account {\n  margin: 4%;\n  font-size: 20px;\n  color: #b1b1b1;\n}\n.account {\n  display: flex;\n  align-items: center;\n  gap: 15%;\n  background-color: #5a5a5a56;\n  padding: 3%;\n  border-radius: 20px;\n  font-size: 22px;\n}\n.account > .pfp {\n  background: linear-gradient(160deg, #9811fa 30%, #53008e 100%);\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 15px;\n  font-size: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n/* Dashboard styles */\n\n.greeting {\n  flex: 0.24;\n  color: white;\n}\n.greeting > h1 {\n  font-size: 2.6em;\n}\n.greeting > p {\n  font-size: 18px;\n}\n.cardsOne {\n  flex: 0.35;\n  display: flex;\n}\n.cardsTwo {\n  flex: 1;\n  display: flex;\n}\n.cardsOne > div,\n.cardsTwo > div {\n  flex: 1;\n  margin: 1%;\n  border-radius: 10px;\n  background: linear-gradient(\n    124deg,\n    rgba(83, 31, 122, 1) 0%,\n    rgba(64, 27, 90, 0.76) 100%\n  );\n  padding: 1%;\n}\n.cardsTwo > .two {\n  display: flex;\n  flex-direction: column;\n}\n.cardsOne > .one ~ div > div,\n.cardsOne > .one > div {\n  flex: 1;\n}\n.cardsOne > .one ~ div,\n.cardsOne > .one {\n  display: flex;\n  flex-direction: column;\n  font-size: 30px;\n  padding-left: 1.5%;\n  gap: 10%;\n}\n.icon {\n  align-content: center;\n}\n.text {\n  align-content: center;\n}\n.text > p {\n  font-size: 17px;\n  opacity: 0.7;\n}\n.cardsTwo > .one {\n  display: flex;\n  flex-direction: column;\n}\n.session {\n  flex: 0.12;\n  display: flex;\n  padding: 1%;\n  gap: 1%;\n}\n.session > div {\n  flex: 1;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3%;\n}\n.session > .btn1 {\n  background: linear-gradient(160deg, #9811fa 30%, #53008e 100%);\n}\n.session > .btn2 {\n  background-color: #7f40afa4;\n  color: #9e9e9e;\n}\n.timer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.timer > .clock {\n  margin-top: 5%;\n  width: 270px;\n  height: 270px;\n  border-radius: 200px;\n  align-self: center;\n  justify-self: center;\n  border: solid 15px #9811fa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n}\n.timer > .controls {\n  flex: 0.7;\n  display: flex;\n  justify-content: space-evenly;\n}\n.controls > div {\n  background: linear-gradient(160deg, #9811fa 30%, #53008e 100%);\n  width: 70px;\n  height: 70px;\n  border-radius: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.cardsTwo > .two > .task {\n  flex: 1;\n  margin: 1%;\n  /* box-shadow:\n    rgba(0, 0, 0, 0.15) 0px 15px 25px,\n    rgba(0, 0, 0, 0.05) 0px 5px 10px; */\n  border-radius: 10px;\n  display: flex;\n  padding: 2%;\n  font-size: 25px;\n  box-shadow: rgba(0, 0, 0, 0.398) 1.95px 1.95px 2.6px;\n  justify-content: space-between;\n  align-items: center;\n  color: #d8d8d8;\n  background-color: transparent;\n}\n\n/* Projects styles */\n\n#header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#header > h1 {\n  font-size: 2.6em;\n}\n.add-project {\n  width: 100px;\n  height: 50px;\n  border-radius: 100px;\n  background: linear-gradient(160deg, #9811fa 0%, #53008e 100%);\n  color: white;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n}\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 12px;\n  padding-top: 4%;\n}\n.project {\n  padding-left: 20px;\n  padding-right: 20px;\n  border-radius: 13px;\n  font-size: 1.3em;\n  font-weight: bold;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 65px;\n  background: linear-gradient(160deg, #9811fa 0%, #53008e7f 100%);\n  cursor: pointer;\n}\n.project:hover {\n  background: linear-gradient(160deg, #9811fa 80%, #53008e7f 100%);\n}\n.Default.active,\n.Default {\n  display: none;\n}\n.project > .buttons {\n  display: flex;\n  gap: 40px;\n  height: 70%;\n  z-index: 3;\n}\n.project > .buttons > .remove,\n.project > .buttons > .add-todo2,\n.project > .buttons > .edit {\n  width: 30px;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n.project > .buttons > .remove {\n  background: no-repeat center / contain url(\"./assets/trash.svg\");\n}\n.project > .buttons > .add-todo2 {\n  background: no-repeat center / contain url(\"./assets/add.svg\");\n}\n.project > .buttons > .edit {\n  background: no-repeat center / contain url(\"./assets/pencil.svg\");\n}\n\n/* tasks styles */\n\n#task-view > .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.25em;\n}\n#back {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  border: none;\n  background: no-repeat center/contain url(./assets/caret-left.svg);\n  cursor: pointer;\n}\n.task-container {\n  flex: 1;\n  padding-top: 4%;\n  padding-left: 4%;\n  overflow-y: scroll;\n}\n.task-container > div {\n  display: none;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n.add-todo {\n  background: no-repeat center/contain url(./assets/add.svg);\n  width: 40px;\n  height: 40px;\n  border: none;\n  cursor: pointer;\n}\n.todo {\n  border-radius: 25px;\n  width: 450px;\n  height: 200px;\n  display: flex;\n  flex-direction: column-reverse;\n  background: linear-gradient(160deg, #9811fa 0%, #53008e7f 100%);\n  padding: 1%;\n}\n.title-box {\n  flex: 1;\n  display: flex;\n  align-items: start;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.todo-title {\n  color: white;\n}\n.other-info {\n  flex: 1;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: end;\n}\n.title-wrapper > p {\n  margin: 0;\n}\n.desc {\n  font-size: 15px;\n}\n.edit {\n  width: 25px;\n  height: 25px;\n}\n.edit:hover {\n  cursor: pointer;\n}\n.trash {\n  width: 25px;\n  height: 25px;\n}\n.trash:hover {\n  cursor: pointer;\n}\n.todo-date,\n.todo-priority {\n  font-size: 18px;\n  font-weight: bold;\n}\n.Default.active {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n}\n.task-container > div.active {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n}\n\n/* adapted from https://github.com/Lost-Stardust/Calculator */\n.task-container::-webkit-scrollbar {\n  width: 1em;\n  height: 10px;\n}\n.task-container::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.664);\n  border-radius: 10px;\n}\n.task-container::-webkit-scrollbar-thumb {\n  background-color: #9911fa63;\n  outline: 1px solid black;\n  border-radius: 5px;\n}\n\n/* popup styles */\n\n.popup {\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 7px;\n  height: 200px;\n  z-index: 10;\n  min-width: 25%;\n  padding: 10px 15px 0 15px;\n  background: #53008e;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5%;\n}\n.overlay {\n  position: fixed;\n  opacity: 0;\n  transition: 200ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n  z-index: 2;\n}\n.popup form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.popup > form > .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.popup > form > .buttons > button {\n  width: 70px;\n  height: 40px;\n  border-radius: 10px;\n  background: #9811fa;\n  color: white;\n  font-size: 17px;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\nform > #project-title {\n  border-radius: 10px;\n  border: none;\n  font-size: 20px;\n}\n.popup.active {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.todo-popup,\n.edit-popup {\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 7px;\n  height: 200px;\n  z-index: 10;\n  min-width: 30%;\n  padding: 15px;\n  background: #53008e;\n\n  display: flex;\n  flex-direction: column;\n\n  border: solid black 1px;\n}\n.todo-popup.active,\n.edit-popup.active {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.todo-popup form,\n.edit-popup form {\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n  width: 100%;\n}\nform > .buttons {\n  padding-top: 2%;\n}\n.todo-popup #todo-title,\n.edit-popup #edit-title {\n  font-size: 20px;\n  border-radius: 10px 10px 0px 0px;\n  border: none;\n}\n.todo-popup #desc,\n.edit-popup #edit-desc {\n  font-size: 20px;\n  border-radius: 0px 0px 10px 10px;\n  border: none;\n}\n.todo-popup .buttons,\n.edit-popup .buttons {\n  justify-content: space-between;\n}\n.leftBtns,\n.rightBtns {\n  display: flex;\n  gap: 15px;\n  justify-content: flex-end;\n}\n.leftBtns {\n  justify-content: start;\n}\n.leftBtns > .priority {\n  color: white;\n  border: #9811fa solid 2px;\n  border-radius: 10px;\n}\n.priority > option,\n.edit-priority > option {\n  color: black;\n}\n.buttons div button {\n  font-size: 17px;\n  width: 70px;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #9811fa;\n  color: white;\n}\n/* .rightBtns .add {\n  color: white;\n  /* display: flex;\n  align-items: center;\n  justify-content: center; \n}*/\n.rightBtns button,\n.leftBtns button {\n  height: 30px;\n  background-color: rgba(128, 128, 128, 0.116);\n}\n.rightBtns .edit-confirm {\n  background-color: #7b2cbf;\n}\n#date,\n#edit-date {\n  background-color: rgba(128, 128, 128, 0.116);\n  border: #9811fa 2px solid;\n  border-radius: 10px;\n\n  width: 125px;\n  color: white;\n}\n.dropdowns,\n.edit-dropdowns {\n  display: flex;\n}\n.priority,\n#projectSelect,\n.edit-priority,\n#edit-projectSelect {\n  border: #9811fa 2px solid;\n  border-radius: 10px;\n  background: none;\n  color: white;\n}\n.priority:focus,\n#projectSelect:focus,\n.edit-priority:focus,\n#edit-projectSelect:focus {\n  outline: none;\n}\n#projectSelect,\n#edit-projectSelect {\n  padding: 4px;\n}\n#projectSelect > option,\n#edit-projectSelect > option {\n  color: black;\n}\n#picker {\n  color: white;\n}\n\n/* sidebar options active */\n.options > div.active {\n  background: linear-gradient(160deg, #9811fa 0%, #4a007e 100%);\n}\n\n/* view active */\n#Dashboard.active {\n  display: flex;\n}\n#Projects.active {\n  display: flex;\n}\n#Settings.active {\n  display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/add-project.js"
/*!****************************!*\
  !*** ./src/add-project.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _project_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-ui */ "./src/project-ui.js");
// code adapted from https://github.com/Lost-Stardust/Todo-list



let projectList = [
  // projects made will be stored here
];

// variable that will represent stored projectList in local storage
let storedProjs;

const addProject = () => {
  class Project {
    constructor(name) {
      this.name = name;
    }
  }
  const projectName = document.querySelector("#project-title").value;

  const project = new Project(projectName);
  project.name = projectName;
  console.log(project);

  projectList.push(project);
  (0,_project_ui__WEBPACK_IMPORTED_MODULE_0__.makeProject)(project);

  // Retrieve the projList in local storage
  // Update it with the new project that is created

  storedProjs = JSON.parse(localStorage.getItem("projList"));
  storedProjs.push(project);
  localStorage.setItem("projList", JSON.stringify(storedProjs));
  console.log(storedProjs.length);

  console.log(projectList);
};

// add projList to localStorage if it doesnt exist
if (!localStorage.getItem("projList")) {
  localStorage.setItem("projList", JSON.stringify(projectList));
}

console.log(projectList);




// Project name will be taken from popup input


/***/ },

/***/ "./src/add-todo.js"
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   storedList: () => (/* binding */ storedList),
/* harmony export */   todoList: () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");
// code adapted from https://github.com/Lost-Stardust/Todo-list


const todoList = [
  // Todos made will be stored in here
];
// variable that will represent the stored todoList in local storage
let storedList;

const addTodo = () => {
  class Todo {
    constructor(title, desc, priority, date, project) {
      this.title = title;
      this.desc = desc;
      this.priority = priority;
      this.project = project;
      this.date = date;
    }
  }

  const title = document.querySelector("#todo-title").value;
  const desc = document.querySelector("#desc").value;
  const priority = document.querySelector(".priority").value;
  const date = document.querySelector("#date").value;
  const project = document.querySelector("#projectSelect").value;

  console.log(project);

  const todo1 = new Todo(title, desc, priority, date, project);
  console.log(todo1);

  todoList.push(todo1);
  console.log(todoList);

  (0,_todo_ui__WEBPACK_IMPORTED_MODULE_0__.makeTodo)(todo1);

  // Retrieve the todoList in local storage
  // Update it with the new todo that is created
  storedList = JSON.parse(localStorage.getItem("todoList"));
  storedList.push(todo1);
  localStorage.setItem("todoList", JSON.stringify(storedList));
  console.log(storedList.length);
};

// add todoList array to localStorage if it doesnt have it already

if (!localStorage.getItem("todoList")) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}






/***/ },

/***/ "./src/edit-popup.js"
/*!***************************!*\
  !*** ./src/edit-popup.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editPopup: () => (/* binding */ editPopup)
/* harmony export */ });
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-todo */ "./src/edit-todo.js");
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");
// code adapted from https://github.com/Lost-Stardust/Todo-list





const editPopup = () => {
  // const edit = document.querySelector(".edit");
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "edit-popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  // Create variable to access the properties of the todo object being edited
  const selectedTodo = _add_todo__WEBPACK_IMPORTED_MODULE_1__.todoList[_todo_ui__WEBPACK_IMPORTED_MODULE_2__.index];

  const editName = document.createElement("input");
  editName.setAttribute("type", "text");
  editName.setAttribute("id", "edit-title");
  editName.setAttribute("name", "edit-title");
  editName.setAttribute("placeholder", "Task name");
  editName.setAttribute("value", `${selectedTodo.title}`);
  form.appendChild(editName);

  const editDesc = document.createElement("input");
  editDesc.setAttribute("type", "text");
  editDesc.setAttribute("id", "edit-desc");
  editDesc.setAttribute("name", "edit-desc");
  editDesc.setAttribute("placeholder", "Description");
  editDesc.setAttribute("value", `${selectedTodo.desc}`);
  form.appendChild(editDesc);

  const overlay = document.querySelector(".overlay");

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const leftBtns = document.createElement("div");
  leftBtns.className = "leftBtns";
  buttons.appendChild(leftBtns);

  const rightBtns = document.createElement("div");
  rightBtns.className = "rightBtns";
  buttons.appendChild(rightBtns);

  const editDate = document.createElement("input");
  editDate.setAttribute("type", "date");
  editDate.setAttribute("id", "edit-date");
  editDate.setAttribute("name", "edit-date");
  editDate.setAttribute("value", `${selectedTodo.date}`);
  leftBtns.appendChild(editDate);

  const editPriority = document.createElement("select");
  editPriority.textContent = "editPriority";
  const high = document.createElement("option");
  const medium = document.createElement("option");
  const low = document.createElement("option");
  high.textContent = "high";
  medium.textContent = "medium";
  low.textContent = "low";
  editPriority.className = "edit-priority";
  editPriority.appendChild(high);
  editPriority.appendChild(medium);
  editPriority.appendChild(low);
  leftBtns.appendChild(editPriority);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "edit-cancel";
  rightBtns.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "edit";
  confirm.className = "edit-confirm";
  rightBtns.appendChild(confirm);

  const dropdowns = document.createElement("div");
  dropdowns.className = "edit-dropdowns";
  buttons.insertAdjacentElement("afterend", dropdowns);

  const projectSelect = document.createElement("select");
  dropdowns.appendChild(projectSelect);
  projectSelect.setAttribute("name", "projectSelect");
  projectSelect.setAttribute("value", `${selectedTodo.project}`);
  projectSelect.id = "edit-projectSelect";

  // Activate popup

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

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
    projectSelect.replaceChildren();
    body.removeChild(popup);
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");

    (0,_edit_todo__WEBPACK_IMPORTED_MODULE_0__.editTodo)();
    body.removeChild(popup);
  });

  editPriority.addEventListener("click", () => {
    event.preventDefault();
  });

  body.appendChild(popup);
};



/***/ },

/***/ "./src/edit-todo.js"
/*!**************************!*\
  !*** ./src/edit-todo.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodo: () => (/* binding */ editTodo)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");
// code adapted from https://github.com/Lost-Stardust/Todo-list



const editTodo = () => {
  console.log(_add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index]);
  const title = document.querySelector("#edit-title").value;
  const desc = document.querySelector("#edit-desc").value;
  const date = document.querySelector("#edit-date").value;
  const priority = document.querySelector(".edit-priority").value;
  const project = document.querySelector("#edit-projectSelect").value;
  // console.log({ title, desc, date, priority, project });

  const selectedTodo = _add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index];
  selectedTodo.title = title;
  selectedTodo.desc = desc;
  selectedTodo.date = date;
  selectedTodo.priority = priority;
  console.log(selectedTodo);

  const todo = document.querySelector(`.todo[data-index="${_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index}"]`);
  console.log(todo);

  if (selectedTodo.project !== project) {
    selectedTodo.project = project;
    const projectDisplay = document.querySelector(
      `.${project}`.replace(/\s/g, ""),
    );
    projectDisplay.appendChild(todo);
  }

  const editTitle = todo.querySelector(".todo-title");
  const editDesc = todo.querySelector(".desc");
  const editDate = todo.querySelector(".todo-date");
  const editPriority = todo.querySelector(".todo-priority");
  console.log(editTitle, editDesc, editDate, editPriority);

  editTitle.textContent = title;
  editDesc.textContent = desc;
  editDate.textContent = date;
  editPriority.textContent = priority;

  const storedList = JSON.parse(localStorage.getItem("todoList"));
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].title = title;
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].desc = desc;
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].date = date;
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].priority = priority;
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].project = project;
  localStorage.setItem("todoList", JSON.stringify(storedList));
};



/***/ },

/***/ "./src/project-popup.js"
/*!******************************!*\
  !*** ./src/project-popup.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectPopup: () => (/* binding */ projectPopup)
/* harmony export */ });
/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ "./src/add-project.js");
// code adapted from https://github.com/Lost-Stardust/Todo-list



const projectPopup = () => {
  const add = document.querySelector(".add-project");
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  const label = document.createElement("label");
  label.setAttribute("for", "project-title");
  label.textContent = "Name";
  form.appendChild(label);

  const projectName = document.createElement("input");
  projectName.setAttribute("type", "text");
  projectName.setAttribute("id", "project-title");
  projectName.setAttribute("name", "project-title");
  projectName.setAttribute("maxlength", "30");
  form.appendChild(projectName);

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const title = document.createElement("h3");
  title.textContent = "Add project";
  popup.insertBefore(title, form);

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "cancel";
  buttons.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "Add";
  confirm.className = "add";
  buttons.appendChild(confirm);
  body.appendChild(popup);
  body.appendChild(overlay);

  add.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.add("active");
  });

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    if (projectName.value == "") {
      alert("Please enter a name for your project");
    } else {
      popup.classList.remove("active");
      overlay.classList.remove("active");
      (0,_add_project__WEBPACK_IMPORTED_MODULE_0__.addProject)();
    }
  });

  projectName.addEventListener("keydown", (e) => {
    if (!/^[A-Za-z]*$/.test(e.key)) e.preventDefault();
  });
};



/***/ },

/***/ "./src/project-ui.js"
/*!***************************!*\
  !*** ./src/project-ui.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeProject: () => (/* binding */ makeProject)
/* harmony export */ });
/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ "./src/add-project.js");
/* harmony import */ var _add_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo.js */ "./src/add-todo.js");
// code adapted from https://github.com/Lost-Stardust/Todo-list



const makeProject = (project) => {
  let projectdiv = document.createElement("div");
  projectdiv.className = "project";
  projectdiv.dataset.index = _add_project__WEBPACK_IMPORTED_MODULE_0__.projectList.indexOf(project);

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
  pDisplay.dataset.index = _add_project__WEBPACK_IMPORTED_MODULE_0__.projectList.indexOf(project);

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
      _add_todo_js__WEBPACK_IMPORTED_MODULE_1__.todoList[index].project = "Default";
      console.log(_add_todo_js__WEBPACK_IMPORTED_MODULE_1__.todoList[index]);
      localStorage.setItem("todoList", JSON.stringify(_add_todo_js__WEBPACK_IMPORTED_MODULE_1__.todoList));
      let defaultp = document.querySelector(".Default");
      defaultp.appendChild(childrenArr[i]);
      console.log(childrenArr);
    }

    display.remove();
    e.target.parentNode.parentNode.remove();
    e.stopPropagation();

    let index = e.target.parentNode.parentNode.dataset.index;
    console.log(index);
    _add_project__WEBPACK_IMPORTED_MODULE_0__.projectList.splice(index, 1);
    console.log(_add_project__WEBPACK_IMPORTED_MODULE_0__.projectList);

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

  console.log(_add_project__WEBPACK_IMPORTED_MODULE_0__.projectList);
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




/***/ },

/***/ "./src/todo-popup.js"
/*!***************************!*\
  !*** ./src/todo-popup.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoPopup: () => (/* binding */ todoPopup)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");
// code adapted from https://github.com/Lost-Stardust/Todo-list



const todoPopup = () => {
  console.log("todopopup working");

  const add = document.querySelector(".add-todo");
  console.log(add);

  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "todo-popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  const todoName = document.createElement("input");
  todoName.setAttribute("type", "text");
  todoName.setAttribute("id", "todo-title");
  todoName.setAttribute("name", "todo-title");
  todoName.setAttribute("placeholder", "Task name");
  form.appendChild(todoName);

  const todoDesc = document.createElement("input");
  todoDesc.setAttribute("type", "text");
  todoDesc.setAttribute("id", "desc");
  todoDesc.setAttribute("name", "desc");
  todoDesc.setAttribute("placeholder", "Description");
  form.appendChild(todoDesc);

  const overlay = document.querySelector(".overlay");

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const leftBtns = document.createElement("div");
  leftBtns.className = "leftBtns";
  buttons.appendChild(leftBtns);

  const rightBtns = document.createElement("div");
  rightBtns.className = "rightBtns";
  buttons.appendChild(rightBtns);

  const date = document.createElement("input");
  date.setAttribute("type", "date");
  date.setAttribute("id", "date");
  date.setAttribute("name", "date");
  leftBtns.appendChild(date);

  const priority = document.createElement("select");
  priority.textContent = "Priority";
  const high = document.createElement("option");
  const medium = document.createElement("option");
  const low = document.createElement("option");
  high.textContent = "high";
  medium.textContent = "medium";
  low.textContent = "low";
  priority.className = "priority";
  priority.appendChild(high);
  priority.appendChild(medium);
  priority.appendChild(low);
  leftBtns.appendChild(priority);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "cancel";
  rightBtns.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "Add";
  confirm.className = "add";
  rightBtns.appendChild(confirm);

  const dropdowns = document.createElement("div");
  dropdowns.className = "dropdowns";
  buttons.insertAdjacentElement("afterend", dropdowns);

  const projectSelect = document.createElement("select");
  dropdowns.appendChild(projectSelect);
  projectSelect.setAttribute("name", "projectSelect");
  projectSelect.id = "projectSelect";

  add.addEventListener("click", () => {
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

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
    projectSelect.replaceChildren();
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");

    (0,_add_todo__WEBPACK_IMPORTED_MODULE_0__.addTodo)();
    // makeTodo();
  });

  priority.addEventListener("click", () => {
    event.preventDefault();
  });

  body.appendChild(popup);
};



/***/ },

/***/ "./src/todo-ui.js"
/*!************************!*\
  !*** ./src/todo-ui.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   makeTodo: () => (/* binding */ makeTodo)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _edit_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-popup */ "./src/edit-popup.js");
/* harmony import */ var _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pencil.svg */ "./src/assets/pencil.svg");
/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/trash.svg */ "./src/assets/trash.svg");
// code adapted from https://github.com/Lost-Stardust/Todo-list





let index;
const makeTodo = (todoInfo) => {
  console.log({ todoInfo });

  const todo = document.createElement("div");
  todo.className = "todo";
  console.log(todoInfo.project);

  // const projectDisplay = document.querySelector(
  //   `.${todoInfo.project}`.replace(/\s/g, ""),
  // );
  const projectDisplay = document.querySelector(`.${todoInfo.project}`);
  console.log(projectDisplay);
  projectDisplay.appendChild(todo);
  todo.dataset.index = _add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList.indexOf(todoInfo);

  const otherInfo = document.createElement("div");
  todo.appendChild(otherInfo);
  otherInfo.className = "other-info";

  const titleBox = document.createElement("div");
  todo.appendChild(titleBox);
  titleBox.className = "title-box";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  titleBox.appendChild(checkbox);

  const titleWrapper = document.createElement("div");
  titleWrapper.className = "title-wrapper";
  titleBox.appendChild(titleWrapper);

  const todoTitle = document.createElement("p");
  todoTitle.className = "todo-title";
  todoTitle.textContent = todoInfo.title;
  titleWrapper.appendChild(todoTitle);

  const todoDesc = document.createElement("p");
  todoDesc.className = "desc";
  todoDesc.textContent = todoInfo.desc;
  titleWrapper.appendChild(todoDesc);

  const todoDate = document.createElement("p");
  todoDate.className = "todo-date";
  todoDate.textContent = todoInfo.date;
  otherInfo.appendChild(todoDate);

  const todoPriority = document.createElement("p");
  todoPriority.className = "todo-priority";
  todoPriority.textContent = todoInfo.priority;
  otherInfo.appendChild(todoPriority);

  const edit = document.createElement("img");
  edit.className = "edit";
  edit.src = _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_2__;
  otherInfo.appendChild(edit);

  const trash = document.createElement("img");
  trash.className = "trash";
  trash.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_3__;
  otherInfo.appendChild(trash);

  trash.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode,
    );
    let index = e.target.parentNode.parentNode.dataset.index;
    _add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList.splice(index, 1);
    console.log(_add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList);

    // Update data-index of todos
    let todos = document.querySelectorAll(".todo");
    console.log(todos);
    let n = 0;
    todos.forEach((todo) => {
      todo.dataset.index = n;
      n++;
    });

    const list = JSON.parse(localStorage.getItem("todoList"));
    list.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(list));
  });

  edit.addEventListener("click", (e) => {
    let indexValue = e.target.parentNode.parentNode.dataset.index;
    index = indexValue;
    console.log(index);
    console.log("edit listener triggered");
    (0,_edit_popup__WEBPACK_IMPORTED_MODULE_1__.editPopup)();
  });

  checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
      todoTitle.style.textDecoration = "line-through";
      todoDesc.style.textDecoration = "line-through";

      todoTitle.style.color = "grey";
      todoDesc.style.color = "grey";

      todoTitle.style.textDecorationThickness = "3px";
      todoDesc.style.textDecorationThickness = "3px";

      todoTitle.style.textDecorationColor = "#7b2cbf";
      todoDesc.style.textDecorationColor = "#7b2cbf";
    } else {
      todoTitle.style.textDecoration = "none";
      todoDesc.style.textDecoration = "none";

      todoTitle.style.color = "black";
      todoDesc.style.color = "black";
    }
  });
};




/***/ },

/***/ "./src/ui.js"
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// logic for switching pages between sign up and main site
const signUp = document.querySelector("#sign-up-page");
const logIn = document.querySelector("#log-in-page");
const forgotPass = document.querySelector("#forgot-pass-page");
const wrapper = document.querySelector("#wrapper");

const goToLogIn = document.querySelector("#go-to-log-in");
const goToLogIn2 = document.querySelector("#go-to-log-in2");
const goToSignUp = document.querySelector("#go-to-sign-up");
const goToForgotPass = document.querySelector("#go-to-forgot-pass");

const createAccBtn = document.querySelector(".create-acc");
const logInBtn = document.querySelector(".log-in");
const resetLink = document.querySelector(".reset-link");

// Show sign up page first
signUp.classList.add("active");

// switch between sign up pages
goToLogIn.addEventListener("click", () => {
  signUp.classList.remove("active");
  logIn.classList.add("active");
});
goToLogIn2.addEventListener("click", () => {
  forgotPass.classList.remove("active");
  logIn.classList.add("active");
});

goToSignUp.addEventListener("click", () => {
  logIn.classList.remove("active");
  signUp.classList.add("active");
});
goToForgotPass.addEventListener("click", () => {
  logIn.classList.remove("active");
  forgotPass.classList.add("active");
});

// go to main site
createAccBtn.addEventListener("click", () => {
  console.log("going to main page");

  signUp.classList.remove("active");
  wrapper.classList.add("active");
});
logInBtn.addEventListener("click", () => {
  event.preventDefault();
  console.log("going to main page");

  logIn.classList.remove("active");
  wrapper.classList.add("active");
});
resetLink.addEventListener("click", () => {
  console.log("going to main page");

  forgotPass.classList.remove("active");
  wrapper.classList.add("active");
});

// Style logic for current tab in the sidebar and view switching
const options = document.querySelectorAll(".options div");
const views = [
  ...document.querySelectorAll("#Dashboard, #Projects, #Settings"),
];

options.forEach((option) => {
  option.addEventListener("click", () => {
    // remove active class from all options and views
    options.forEach((option) => {
      option.classList.remove("active");
    });
    views.forEach((view) => {
      view.classList.remove("active");
    });
    // add active class to the clicked option and corresponding view
    option.classList.add("active");
    // get the corresponding view by matching the option text content with the view id
    const view = document.querySelector(
      `#${option.textContent.replace(/\s/g, "")}`,
    );
    console.log(view);

    view.classList.add("active");
  });
});




/***/ },

/***/ "./src/assets/add.svg"
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "10521dbcbb63cf207be3.svg";

/***/ },

/***/ "./src/assets/caret-left.svg"
/*!***********************************!*\
  !*** ./src/assets/caret-left.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8e058ae6be20b43c0ae9.svg";

/***/ },

/***/ "./src/assets/pencil.svg"
/*!*******************************!*\
  !*** ./src/assets/pencil.svg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "269ec8820dc6346ba9d2.svg";

/***/ },

/***/ "./src/assets/trash.svg"
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96d86c9500072000cc87.svg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _project_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-popup.js */ "./src/project-popup.js");
/* harmony import */ var _project_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-ui */ "./src/project-ui.js");
/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-project */ "./src/add-project.js");
/* harmony import */ var _todo_popup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-popup.js */ "./src/todo-popup.js");
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");


// js module imports








(0,_project_popup_js__WEBPACK_IMPORTED_MODULE_2__.projectPopup)();
(0,_todo_popup_js__WEBPACK_IMPORTED_MODULE_5__.todoPopup)();

// project local storage
const storedProjs = JSON.parse(localStorage.getItem("projList"));
if (storedProjs.length !== 0) {
  storedProjs.forEach((proj) => {
    _add_project__WEBPACK_IMPORTED_MODULE_4__.projectList.push(proj);
    console.log(_add_project__WEBPACK_IMPORTED_MODULE_4__.projectList);
    (0,_project_ui__WEBPACK_IMPORTED_MODULE_3__.makeProject)(proj);
  });
}

// Retrieve stored todos and create them
const storedList = JSON.parse(localStorage.getItem("todoList"));
console.log(storedList);
if (storedList.length !== 0) {
  storedList.forEach((todo) => {
    _add_todo__WEBPACK_IMPORTED_MODULE_7__.todoList.push(todo);
    (0,_todo_ui__WEBPACK_IMPORTED_MODULE_6__.makeTodo)(todo);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map