import "../src/styles.css";

// Style logic for current tab in the sidebar
const options = document.querySelectorAll(".options div");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});
