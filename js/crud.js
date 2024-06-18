const crudForm = document.querySelector("#crudForm");

document.addEventListener("DOMContentLoaded", function () {
  crudForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
  });
});
