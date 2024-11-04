// Task1

// let str = "This is example sentence";

// function indexFinder(str) {
//     let strNew = str.split(" ");
//     let word = "example";
//     console.log(strNew.indexOf(word));
// }

// indexFinder(str);


// Task2

// function sentenceCapitalization(str) {
//     let array = str.split(" ");
//     let maxL = "";

//     for (let i = 0; i < array.length; i++){
//         if(array[i].length > maxL.length){
//             maxL = array[i];
//         }
//     }

//     return maxL;
// }

// console.log(sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores."));


// Task3

// function wordCounter(str){
//     let newStr = str.split(" ");
//     return newStr.length;
// }

// console.log(wordCounter("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores."));


// Task4

// function checkWords(str1, str2){
//     if(str1.length == str2.length){
//         for(let i = 0; i < str2.length; i++){
//             if(str1.includes(str2[i]) == false){
//                 return "Anagram deyil";
//             }
//         }
//         return "Anagramdir";
//     }

//     return "Anagram deyil";
// }

// console.log(checkWords("kelem", "melek"));