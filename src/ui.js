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

export {};
