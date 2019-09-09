'use strict'
let input;
let total = 0;
let userInput = prompt('Введите число');
let quantity = Number(userInput);
let totalPrice = quantity * total;

if(userInput === null) {

  alert ('Было введено не число, попробуйте еще раз');
}