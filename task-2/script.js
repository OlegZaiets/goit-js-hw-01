'use strict'
const total = 100;
const ordered = 50;
const value = 125;

const isInRange = value < 100 && value > 50;

if(isInRange) {
console.log('На складе недостаточно твоаров!');

}

if(!isInRange) {
console.log('Заказ оформлен, с вами свяжется менеджер');
}