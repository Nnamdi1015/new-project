
// Fizz Buzz n javaScript
// The FizzBuzz program is a common coding challenge that involves printing numbers from 1 to a specified limit, with certain replacements: 

// If a number is divisible by 3, print "Fizz".

// If a number is divisible by 5, print "Buzz".

// If a number is divisible by both 3 and 5, print "FizzBuzz".

// Otherwise, print the number itself.


for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}