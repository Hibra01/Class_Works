// const arr = [1, 5, 61, 52, 4, 3];

// console.log(arr.filter((a) => a%2 == 0));

// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
// }


// function filterFunc(array, func) {
//     let newArr = [];
//     for (let i = 0; i <= array.length; i++) {
//         if (func(array[i])) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }

// console.log(filterFunc(arr, a => a % 2 === 0));

// function findFunc(array, func) {
//     for (let i = 0; i <= array.length; i++) {
//         if (func(array[i])) {
//             return array[i]
//         }
//     }
//     return -1
// }

// console.log(findFunc(arr, a=>a>20));


// function mapFunc(array, cb) {
//     let newArray = []
//     for(let i = 0; i<array.length; i++){
//         newArray.push(cb(array[i]));
//     }
//     return newArray
// }

// console.log(mapFunc(arr, a => a * 10));


// function someFunc(array, cb){
//     for(let i = 0; i < array.length; i++){
//         if(cb(array[i])){
//             return true
//         }
//     }
//     return false
// }

// console.log(someFunc(arr, a => a > 10))


// function everyFunc(array, cb){
//     for(let i = 0; i < array.length; i++){
//         if(!cb(array[i])){
//             return false
//         }
//     }
//     return true
// }

// console.log(someFunc(arr, a => a > 10))




const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 26

// array.forEach((a,i) => a%2!=0 && console.log(i))

// 27

// array.forEach((a,i) => a%2==0 && console.log(i))

// 28

// array.forEach((a, i) => i%2!=0 && console.log(a))

// 29

// array.forEach((a, i) => i%2==0 && console.log(a))

// 30

// console.log(array.reduce((max, num) => (num > max ? num : max), array[0]))

// 31

// console.log(array.reduce((min, num) => (num < min ? num : min), array[0]))