// program to print the value of i
// for (let i = 1; i <= 5; i++) {
//     // break condition     
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }


// let sum = 0, number;
// while(true) {
// // take input again if the number is positive
//     var str=require("readline-sync")
//      number = str.questionInt('Enter a number: ')
//     // break condition
//     if(number < 0) {
//         break;
//     }
//     // add all positive numbers
//     sum += number;
// }
// // display the sum
// console.log(`The sum is ${sum}.`);

// / nested for loops

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}