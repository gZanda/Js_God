
// Variables, Consts and Data Types ( only 3 )

let name = 'Zanda';     // Number
let age = 21;           // String
let smol = false;       // Boolean
const PI = 3.14;        // Number Constant

// Variable casting

let num1 = '5';
num1 = Number(num1);
console.log(typeof num1);

// Math Object

let num2 = 10;
num2 = Math.floor(num2);
num2 = Math.ceil(num2);
num2 = Math.random();
num2 = Math.sqrt(num2);
num2 = Math.pow(num2,3);
console.log(num2);

// Useful String Methods

let str = 'Hello World';
console.log(str.length);
console.log(str.indexOf('World'));
console.log(str.slice(0,5));
console.log(str.replace('World', 'Zanda'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Get User Input ( With event listener )

function getUserInput() {
    let input = document.getElementById('userInput').value;
    console.log(input);
    alert("Your input: " + input);
    document.getElementById('output').innerText = input;
}

document.getElementById('submitButton').addEventListener('click', getUserInput); 