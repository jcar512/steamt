import { users } from "./users.js";

export function createUserList() {
  const btn = document.querySelector("#userButton");

  btn.addEventListener("click", function () {
    users.forEach((user) => console.log(user.username));
  });
}
