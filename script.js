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
