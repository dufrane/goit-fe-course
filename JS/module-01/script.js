"use strict";

const adminLogin = "admin";
const adminPassword = "m4ng0h4ckz";

let message = prompt("Please enter login:");
if (message === null) {
  console.log("Отменено пользователем!");
} else if (message !== adminLogin) {
  console.log("Доступ запрещен, неверный логин!");
} else if (message === adminLogin) {
  let message = prompt("Please enter password:");
  if (message === null) {
    console.log("Отменено пользователем!");
  } else if (message !== adminPassword) {
    console.log("Доступ запрещен, неверный пароль!");
  } else if (message === adminPassword) {
    console.log("Добро пожаловать!");
  }
}
