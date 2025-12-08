// Use switch to specify many alternative code blocks to be executed

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// Example

let day ="Monday";

switch(day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("it is a regular day");
}



day = prompt("Enter a number between 1-7 ");
let nameofDay ;

switch(day) {
    case "1":
        nameofDay = "Monday";
        break;
    case "2":
        nameofDay = "Tuesday";
        break;
    case "3":
        nameofDay = "Wednesday";
        break;
    case "4":
        nameofDay = "Thursday";
        break;
    case "5":
        nameofDay = "Friday";
        break;
    case "6":
        nameofDay = "Saturday";
        break;
    case "7":
        nameofDay = "Sunday";
        break;    
        default:
        nameofDay = "Invalid day";
}
console.log(nameofDay);

// Ternary Operator
// condition ? expression1 : expression2

let studentScore = prompt("Enter student score from 0-100");
let result = studentScore >= 50 ? "Pass" : "Fail";
console.log(result);