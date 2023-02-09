/*Создать функцию-конструктор User
у пользователей должны быть свойства:
firstName
lastName
email
age
isLoggedIn

Создать прототип для объектов пользователей
в прототипе реализовать следующий методы:
getFullName - метод, который вернет строчку, содержащую имя и фамилию пользователя
logout - метод, который имитирует логаут пользователя, меняя переменную isLoggedIn
login - метод, который имитирует логин пользователя, меняя переменную isLoggedIn
*/

"use strict";

function User(firstName, lastName, email, age, isLoggedIn) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
};

const userProto = {
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  login: function () {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  },
  logout: function () {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  },
};

User.prototype = userProto;

const user1 = new User("Ivan", "Ivanov", "ivanov@test.test", 24, false);
const user2 = new User("Pavlo", "Pavlov", "pavlov@test.test", 32);

