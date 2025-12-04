

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

function displayFullname(){
    let fullname = InputFN.value + " " + InputLN.value;
    spanElem.innerHTML = fullname;
}
