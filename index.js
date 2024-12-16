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




const array = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
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

// 32

// console.log(array.filter((a) => a%2 == 0 && a != 0).reduce((max, num) => (num > max ? num : max), array.filter((a) => a%2 == 0 && a != 0)[0]))

// 33

// console.log(array.filter((a) => a%2 == 0 && a != 0).reduce((min, num) => (num < min ? num : min), array.filter((a) => a%2 == 0 && a != 0)[0]))

// 34

// console.log(array.filter((a) => a%2 != 0 && a != 0).reduce((max, num) => (num > max ? num : max), array.filter((a) => a%2 == 0 && a != 0)[0]))

// 35

// console.log(array.filter((a) => a%2 != 0 && a != 0).reduce((min, num) => (num < min ? num : min), array.filter((a) => a%2 == 0 && a != 0)[0]))

// 36

// console.log(array.findIndex((a) => a == array.reduce((max, num) => (num > max ? num : max), array[0])))

// 37

// console.log(array.findIndex((a) => a == array.reduce((min, num) => (num < min ? num : min), array[0])))

// 38

// console.log(array.reduce((count, num) => num == array.reduce((max, num) => (num > max ? num : max), array[0]) && ++count, 0))

// 39

// console.log(array.reduce((count, num) => num == array.reduce((min, num) => (num < min ? num : min), array[0]) && ++count, 0))