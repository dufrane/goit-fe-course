'use strict';

const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  } else {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      alert('Логин успешно добавлен!');
    } else {
      alert('Такой логин уже используется!');
    }
  }
};

addLogin(allLogins, 'Ajax');
addLogin(allLogins, 'robotGoogles');
addLogin(allLogins, 'Zod');
addLogin(allLogins, 'jqueryisextremelyfast');
