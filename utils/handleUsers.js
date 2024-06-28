import { users } from "./users.js";

export function loadUsers() {
  let userList = JSON.parse(localStorage.getItem("users")) || [];

  if (!userList) {
    userList = users;
    localStorage.setItem("users", JSON.stringify(userList));
  }

  const usersContainer = document.querySelector("#usersContainer");

  userList.forEach((user) => {
    const button = document.createElement("button");
    button.classList = "my-2 hover:text-slate-400";
    button.innerText = `${user.username}`;

    button.addEventListener("click", function () {
      //Necesito actualizar la informacion para que no pase datos anteriores
      userList = JSON.parse(localStorage.getItem("users"));
      const currentUser = userList.find((element) => element.id === user.id);

      setUser(currentUser);

      usersContainer.classList.replace("visible", "invisible");
      usersContainer.classList.replace("opacity-100", "opacity-0");
    });

    usersContainer.appendChild(button);
  });
}

export function showUsers() {
  const userButton = document.querySelector("#userButton");
  const usersContainer = document.querySelector("#usersContainer");

  userButton.addEventListener("click", function () {
    const cartModal = document.querySelector("#cartModal");

    if (cartModal.classList.contains("visible")) {
      cartModal.classList.replace("opacity-100", "opacity-0");
      cartModal.classList.replace("visible", "invisible");
    }

    if (usersContainer.classList.contains("invisible")) {
      usersContainer.classList.replace("invisible", "visible");
      usersContainer.classList.replace("opacity-0", "opacity-100");
    } else {
      usersContainer.classList.replace("visible", "invisible");
      usersContainer.classList.replace("opacity-100", "opacity-0");
    }
  });
}

export function setUser(user) {
  const users = JSON.parse(localStorage.getItem("users"));

  const currentUser = users.find((currentUser) => currentUser.id === user.id);

  if (currentUser) users.splice(users.indexOf(currentUser), 1, user); //Esto es para actualizar el carrito de cada uno

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function setDefaultUser() {
  const currentUser = localStorage.getItem("currentUser");

  if (!currentUser) {
    const userList = JSON.parse(localStorage.getItem("users"));

    localStorage.setItem("currentUser", JSON.stringify(userList[0]));
  }
}
