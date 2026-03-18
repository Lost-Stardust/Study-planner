// Style logic for current tab in the sidebar and view switching
const options = document.querySelectorAll(".options div");
const views = [...document.querySelectorAll("#Dashboard, #Projects")];

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
