"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function min(num3, num4) {
    return num3 - num4;
}
add(1, 1);
min(5, 6);
const userInfo = {
    name: "Ivan",
    age: 33,
    sex: "man",
    1: "go",
};
const bookDetails = {
    name: "Ivan Petrov",
    pages: 300,
    date: "1/02/2023",
    rating: 8,
};
function reverse(items) {
    return items.reverse();
}
const numbers = reverse([1, 2, 3, 4, 5]);
console.log(numbers);
const words = reverse(["1", "2", "3", "4", "5"]);
console.log(words);
