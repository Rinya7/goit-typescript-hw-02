"use strict";
//Завдання 1
let age = 50;
let named = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
    return 100 + a;
};
//Завдання 2
let anything = -20;
anything = "Text";
anything = {};
//Завдання 3
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
//Завдання 4
let person = ["Max", 21];
//Завдання 6
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
//Завдання 7
var Days;
(function (Days) {
    Days["Monday"] = "Monday";
    Days["Tuesday"] = "Tuesday";
    Days["Wednesday"] = "Wednesday";
    Days["Thursday"] = "Thursday";
    Days["Friday"] = "Friday";
    Days["Saturday"] = "Saturday";
    Days["Sunday"] = "Sunday";
})(Days || (Days = {}));
function isWeekend(day) {
    if (day === "Saturday" || day === "Sunday") {
        return true;
    }
    else {
        return false;
    }
}
let myGender;
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//Generic
//Завдання 1
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
