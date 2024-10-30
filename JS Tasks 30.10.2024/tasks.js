// Task1

// for (let i = 0; i < 5; i++) {
//     console.log("Huseyn");
// }

// Task2

// for (let i = 20; i > 0; i--) {
//     console.log(i);
// }

// Task3

// let array = ["Bakı", "Gəncə", "Sumqayıt"];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (let a of array) {
//     console.log(a);
// }

// Task4

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] + " index = " + i);
// }

// for (let a in array) {
//     console.log(a);
// }

// let array = [1, 4, 5, 6, 7, 8, 34, 56, 98];

// Task5

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log("Sum = " + sum);

// Task6

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// Task7

// for (let i = 1; i <= 50; i += 3) {
//     console.log(i);
// }

// Task8

// for (let i = 2; i <= 50; i += 2) {
//     console.log(i);
// }

// Task9

// for (let i = 1; i <= 50; i++) {
//     if (i % 8 == 0) console.log(i);
// }

// Task10

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log("Sum = " + sum);

// Task11

// let a = prompt("a = ");

// let f = 1;

// for (let i = 1; i <= a; i++) {
//     f *= i;
// }

// console.log("Factorial = " + f);

// Task12

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     }
// }

// Task13

// for (let i = 100; i <= 999; i++) {
//     let b = i;
//     let a = 0;
//     let sum = 0;
//     while (b > 0) {
//         a = b % 10;
//         sum += a * a * a;
//         b = (b - a) / 10;
//     }

//     if(sum == i){
//         console.log(i);
//     }
// }

// Task14

// let a = prompt("a = ");

// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i < a.length; i++) {
//     if (i % 2 == 0) {
//         sum1 += Number(a[i]);
//     } else {
//         sum2 += Number(a[i]);
//     }
// }

// console.log("Multi = " + sum1 * sum2);

// Task15

// let array = [3, 4, 3, 7];

// let m = 1;

// for(let i = 0; i < array.length; i++){
//     m *= array[i];
// }
// if(m % 2 == 0){
//     console.log(m);
// }else{
//     console.log(0);
// }

// Task16

// let array = [2, 1, 2, 16];

// let bool = true;

// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 != 0){
//         bool = false;
//         break;
//     }
// }

// console.log(bool);

// Task17

// let array = [2, 4, 6, 6];

// let sum = 0;

// for(let i = 0; i < array.length; i++){
//     sum += array[i];
// }

// console.log(sum / array.length - sum % array.length);