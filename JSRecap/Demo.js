"use strict";
const fullName = "John Doe";
const age = 30;
console.log(`My name is ${fullName} and I am ${age} years old.`);
let newName = fullName;
function getname() {
    return fullName;
}
function setname(name) {
    newName = name || "The King";
}
setname("Alice");
console.log(`My name is ${getname()} and I am ${age} years old.`);
