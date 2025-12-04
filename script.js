

let h1Elem = document.getElementById("h1text");
let h2Elem = document.getElementById("h2text");

h1Elem.innerHTML = "My Blog Title";
h1Elem.style.color = "blue";

h2Elem.innerHTML = "The Kidnapping Pandemic!";

// grab input elements

let InputFN = document.getElementById("firstname");
let InputLN = document.getElementById("lastname");
let spanElem = document.getElementById("showFN");

console.log(InputFN);
console.log(InputLN);

spanElem.style.color = "green";
spanElem.style.fontWeight = "900";



//let newFNValue = InputFN.value;
//let newLNValue = InputLN.value;

function displayFullname() {
    let fullname = InputFN.value + " " + InputLN.value;
    spanElem.innerHTML = fullname;
}
//number inputs
let num1Elem = document.getElementById("num1");
let num2Elem = document.getElementById("num2");
let spanElem = document.getElementById("showresult");

console.log(num1Elem);
console.log(num2Elem);

spanElem.style.color = "red";
spanElem.style.fontWeight = "900";

function displaynumber() {
let num1 = inputnum1.value + " " + inputnum2.value;
spanElem.innerHTML = displaynumber;

}
