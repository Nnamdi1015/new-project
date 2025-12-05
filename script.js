function displayFN() {
    document.getElementById("fname").innerHTML = "amadi";
    document.getElementById("lname").innerHTML = "samuel";
}

let h1Elem = document.getElementById("h1text");
let h2Elem = document.getElementById("h2text");

h1Elem.innerHTML = "My Blog Title";
h1Elem.style.color = "blue";

h2Elem.innerHTML = "The Kidnapping Pandemic!";

// grab input elements

let InputFN = document.getElementById("Firstname");
let InputLN = document.getElementById("Lastname");
let spanElem = document.getElementById("showFN");

console.log(InputFN);
console.log(InputLN);

spanElem.style.color = "green";
spanElem.style.fontWeight = "900";


//let newFNValue = InputFN.value;
//let newLNValue = InputLN.value;

function displayFullName() {
    let fullName = InputFN.value + " " + InputLN.value;
    spanElem.innerHTML = fullName;
}
// grab input elements

let Number1 = document.getElementById("num1");
let Number2 = document.getElementById("num2");
let sumspan = document.getElementById("displaysum");

sumspan.style.color = "red";
sumspan.style.fontWeight = "900";

function displaysum() {
    let displaysum = Number(num1.value) + Number(num2.value);
    sumspan.innerHTML = displaysum;
}

let x = 16 + "volvo";
console.log(x);

let y = 16 + 4 + "volvo";
console.log(y);

let z = "volvo" + 16 + 4;
console.log(z);


// non-primitive data Types(Compound) -object
// objects

const amadi = {
    firstName: "john",
    lastName: "Doe",
    age: 40,
    eyecolor: "blue",
    residence: "Port Harcourt",
};

// Array object
const cars = ["saab", "volvo", "BMW"]

// Date object
const date = new Date("2025-05-12")

// Arithemitic operators

//addition +
let numb = 45 + 34;

let w = 100 - numb ;

let r = w * 3;

let s = w ** 2;

let a = s/2 ;

let div 

//Modulus (division reminder)

let newR = 7 % 2;
console.log (newR)







// comparison operator
//comparison opeators are used to compare two values
// comparison operators always return TRUE or FALSE


let gh ="5";

gh === 5; // "5"===5
console.log (gh === 5);

gh !=5 ; // "5" !=5
console.log(gh !=5)


let text1 ="A";
let text2 ="B";
let result =text1 < text2;

//condiionals
//if statement




//else if
let gender =prompt ("select your gender");

if (gender =="male"){
    alert("you are a male,go to Hall1");
}
else if (gender =="female"){
    alert(gender =="female")
}



