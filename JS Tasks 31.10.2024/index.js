// Task1

// let array = [];

// let number = prompt("number = ");
// let element = prompt("element");

// for(let i = 0; i < number; i++){
//     array.push(element);
// }

// console.log(array);

// Task2

// let array = [];

// let start = +prompt("start = ");
// let end = +prompt("end = ");

// for(i = start; i <= end; i++){
//     array.push(i);
// }

// console.log(array);

// Task3

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9];

// for(let i = 0; i < array2.length; i++){
//     array1.push(array2[i]);
// }

// console.log(array1);

// let array = [2,2,6,8,80,12];
// let array = [21,19,1,3,9,11];

// let tek = 0;
// let cut = 0;

// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 != 0) {
//         tek++;
//     }else{
//         cut++;
//     }
// }

// if(array.length == tek) console.log(true);
// else if(array.length == cut) console.log(false);

// Task4

// let array = [2,2,6,8,80,12];

// let isOdd = true;

// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 == 0) {
//         isOdd = false;
//         break;
//     }
// }

// console.log(isOdd);

// Task5

// let array = [2,2,6,8,80,12];
// let array = [21,19,1,3,9,11];
// let array = [2,1,6,3,89,12];

// let array1 = [];
// let array2 = [];

// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 != 0) {
//         array1.push(array[i]);
//     }else{
//         array2.push(array[i]);
//     }
// }

// console.log("Tek = " + array1);
// console.log("Cut = " + array2);

// Task6

let array1 = prompt("array = ");
let array2 = array1.split(",");
console.log(array2);

let array3 = [];

let a = prompt("a = ");
let b = prompt("b = ");

function changer(array, a1, b1) {
    return array;
}

array3 = changer(array2);

console.log(array3);