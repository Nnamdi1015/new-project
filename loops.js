// loops is used to execute a block of codes a number of times
// types of loops
// for loop


// for (let index = 0; index < Array.length; index++) {
//     const element = array[index];
// }


//start/iniitial/begin expression --is executed one time before the execution of the code block 
//condition/expression --defines the condition for executing the code block again
//increment/decrement expression --is executed every time after the code block has been executed.

for (let a = 0; a < 3; a++) {
    console.log(a);
}

let a;
for (a = 0; a < 3; a++) {
    console.log(a);
}

let fruits = ["apple", "Mango", "Banana", "Orange", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
    console.log("fruits:", fruits[i]);
}

for (let x = 100; x > 1; x--) {
    console.log(x);
}

// while loop
// do while loop