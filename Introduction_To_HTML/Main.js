// window.alert("Good Afternoon!");
// document.write("Oh and incasee I don't see ya");
// console.log("Guten Abend");

function greeting() {
    document.getElementById("greeting-label").innerHTML = "Wagwan G";
}

function hoverAction(elementId) {
    let colourArr = ["color: red;", "color: green;", "color: blue;", "color: yellow;"];

    document.getElementById(elementId).style = colourArr[Math.floor(Math.random() * 4)];
}

// Variables
let title = "Spongebob Sqaurepants";
const G = 6.67430;

// Arrays
let characters = [];
characters.push("Spongebob Squarepants");
characters.push("Patrick Star");
characters.push("Squidward Tentacles");

console.log(characters[0]);

// Objects
let person = {}
person.firstName = "Syed";
person.lastName = "Ahmed";
person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
console.log(person.getFullName());

let otherPerson = {
    firstName: "🅱yed",
    lastName: "🅱ahmed",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(otherPerson.getFullName());