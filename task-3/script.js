'use strict'
const ADMIN_PASSWORD = 'jqueryismyjam';
const userInput = prompt('Добро пожаловать!');
let message = '';


if (userInput === null) {
  message = 'Отменено пользователем!';
  alert(message);
  alert('Отменено пользователем!');
} else if (userInput === '') {
  alert('Пароль не был введен!');
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  alert(message);
  alert('Добро пожаловать!');
} else {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
  alert('Доступ запрещен, неверный пароль!');
}

/*
То же самое тернарным оператором
*/

// То же самое тернарным опреатором

// const ADMIN_PASSWORD = 'jqueryismyjam';
//const userInput = prompt('Добро пожаловать!');
//let message = '';

// message = userInput === null ? 'Отменено пользователем!' :
//           userInput === ADMIN_PASSWORD ? 'Добро пожаловать!' :
// message = userInput === null ? 'Отменено пользователем!':
//           userInput === '' ? 'Пароль не был введен!':
//           userInput === ADMIN_PASSWORD ? 'Добро пожаловать!':
//           'Доступ запрещен, неверный пароль!';

// alert(message);
 