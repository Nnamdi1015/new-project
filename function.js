// function declearaion

function nameofFunction() {
    // body of code
}

function name(parameter1, parameter2, parameter3) {
    // body
}


showMessage();
function showMessage() {
    alert('Hello everyone')
}


// HOISTING 

function product() {
    let a = 12;
    let b = 20;
    let result = a * b;
    console.log(result);
}

product()

// parameters are variables you use to inject values into your function

function productNumbs(a, b) {
    let result = a * b;
    console.log(result);
    return result;
}

productNumbs(2, 5);
let productValue = productNumbs(4, 30)

// argument is a value assigned to the parameter

function toCelsius(fahrenheit) {
    let result = (5 / 9) * (fahrenheit - 32);
    console.log(result);
    return result;
}

toCelsius(70);
let valueR = toCelsius(110);
let valueDegree = toCelsius
valueDegree(50);

// function expression
let showText = function (){
    console.log("Hello Customer!")
    return "Hello Customer!";
}
showText();

let multiply = function(a, b){
    return a * b;
}

multiply (7, 9);
let newResult = multiply(5, 2)

// Arrow function
const sendText =() => "Hello Customer";

// single parameter
const sayHello =(firstname) => `Hello, ${firstname}`;

const sayHellon =(firstname) => {
    return `Hello, ${firstname}`;
}

// multiple parameter
const sum =(a, b) => a + b;

const sumNum =(a, b) =>{
    return a + b;
}

// multiline function body
const calculateArea =(length, width ) => {
    let area =length * breadth;
    return `This area is ${area}`;
}

