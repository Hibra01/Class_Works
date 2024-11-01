// 1. Toplama Funksiyası
// İki ədədin cəmini hesablayan bir funksiya yaradın.

// let a = +prompt("a =");
// let b = +prompt("b =");

// function CalculateNums(num1, num2){
//     return num1 + num2;
// }

// console.log(CalculateNums(a, b));

// 2. İki Ədədin Maksimumu
// İki ədədin maksimumunu qaytaran bir funksiya yaradın. if-else istifadə edin.

// let a = 64;
// let b = 14;

// function FindMax(num1, num2){
//     if(num1 > num2){
//         console.log(num1);
//     }else if(num1 < num2){
//         console.log(num2);
//     }else{
//         console.log(num1 + " equal " + num2);
//     }
// }

// FindMax(a, b);

// 3. 1-dən n-ə Qədər Cəmi
// 1-dən n-ə qədər olan ədədlərin cəmini qaytaran bir funksiya yaradın. for döngüsünü istifadə edin.

// let n = 100;
// let sum = 0;

// function Sum(n){
//     for (let i = 0; i <= n; i++) {
//         sum += i;       
//     }

//     return sum;
// }

// console.log(Sum(n));

// 4. Tək və Cüt ədədlər
// Verilmiş bir ədədin tək və ya cüt olduğunu müəyyən edən bir funksiya yaradın.

// let a = 12;

// function OddEven(a){
//     if(a == 0){
//         return "a = 0 no Odd and no Even";
//     }else if(a % 2 == 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }

// console.log(OddEven(a));

// 5. Faktorial Hesabı
// Verilmiş bir ədədin faktorialını hesablayan bir funksiya yaradın. for döngüsünü istifadə edin.

// let a = 6;

// function Factorial(a){
//     let f = 1;
//     for (let i = 2; i <= a; i++) {
//         f *= i;
//     }
//     return f;
// }

// console.log(Factorial(a));

// 6. Nömrələrin Tersinə
// Bir ədədin tərsini qaytaran bir funksiya yaradın (məsələn, 123 -> 321).7.

// let a = 3489;

// function Swap(a){
//     let b;
//     let aNew = 0;
//     while(a > 0){
//         b = a % 10;
//         aNew = aNew * 10 + b;
//         a = (a - b) / 10;
//     }

//     return aNew;
// }

// console.log(Swap(a));

// 7. N-ə Qədər Cüt ədədlər
// 1-dən n-ə qədər olan cüt ədədləri çap edən bir funksiya yaradın.

// let a = 16;

// function Print(n){
//     for(let i = 1; i <= n; i++){
//         if(i % 2 == 0){
//             console.log(i);
//         }
//     }
// }

// Print(a);

// 8. FizzBuzz
// 1-dən 100-ə qədər olan ədədlər üçün FizzBuzz problemi: 3-ə bölünəndə "Fizz", 5-ə bölünəndə "Buzz", hər ikisinə bölünəndə "FizzBuzz" yazın.

// function FizzBuzz(){
//     for (let i = 1; i <= 100; i++) {
//         if (i % 15 == 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 == 0) {
//             console.log("Fizz");
//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         }
//     }
// }

// FizzBuzz();

// 9. Polindrom Yoxlanması
// Verilmiş bir sözün polindrom olub olmadığını yoxlayan bir funksiya yaradın.

// let string = "uehfnief"

// console.log(string);

// function Polidroms(string) {
//     let bool = true;

//     for (let i = 0; i < string.length / 2; i++) {
//         console.log(string[i] + " == " + string[string.length - 1 - i]);
//         if (string[i] != string[string.length - 1 - i]) {
//             bool = false;
//         }
//     }

//     if (bool) {
//         console.log(string + " polidromdur");
//     } else {
//         console.log(string + " polidrom deyil");
//     }
// }

// Polidroms(string);

// 10. 1-dən n-ə Qədər ədədlərin Kvadratı
// 1-dən n-ə qədər olan ədədlərin kvadratlarını çap edən bir funksiya yaradın.

// let a = 16;

// function CalculateNums(n){
//     for(let i = 1; i <= n; i++){
//         console.log(i * i);
//     }
// }

// CalculateNums(a);

// 11. İki Dəfə Yoxlanma
// Verilmiş bir ədədin 2, 3 və 5-ə bölünüb-bölünmədiyini yoxlayan bir funksiya yaradın.

// let a = 60;

// function Calculate(n){
//     if(n % 30 == 0){
//         console.log(n + " hamisina bolunur");
//     }else{
//         console.log("Hamisina bolunmur");
//     }
// }

// Calculate(a);

// 12. Array-in Cəmi
// Bir array içindəki ədədlərin cəmini hesablayan bir funksiya yaradın.

// let a = [12,32,34,56,342,23];
// let length = a.length;

// function Calculate(a){
//     let sum = 0;

//     for(let i = 0; i < a.length; i++){
//         sum += a[i];
//     }

//     return sum;
// }

// console.log(Calculate(a));

// 13. Tərs Array
// Bir array-i tərsinə çevirən bir funksiya yaradın.

// let array = [12,23,43,56,76,23];

// function Calculate(array){
//     let newArray = [];
//     for(let i = array.length - 1; i >= 0; i--){
//         newArray.push(array[i]);
//     }

//     return newArray;
// }

// console.log(Calculate(array));

// 14. Tələbə Qiymətləri
// Tələbələrin qiymətlərini qəbul edən və 60-dan yuxarı olan tələbələri "keçdi", 60-dan aşağı olanları "qaldı" yazan bir funksiya yaradın.

// const students = [
//     { name: "Ali", score: 90},
//     { name: "Mammal", score: 100},
//     { name: "Camil", score: 59},
//     { name: "Davud", score: 89}
//   ];

// function Students(list){
//     for(let i = 0; i < list.length; i++){
//         if(list[i].score > 60){
//             console.log(list[i].name + " " + list[i].score + " bal ile kecdi");
//         }
//         else{
//             console.log(list[i].name + " " + list[i].score + " bal ile qaldi");
//         }
//     }
// }

// Students(students);

// 15. Kəmiyyət Yoxlanması
// Verilmiş bir ədədin 10-dan kiçik, bərabər və ya böyük olduğunu yoxlayan bir funksiya yaradın.

// let a = 10;

// function Check(a){
//     if(a > 10){
//         return " > ";
//     }else if(a < 10){
//         return " < ";
//     }else{
//         return " = ";
//     }
// }

// console.log(a + Check(a) + 10);

// 16. Array-də Maksimum Dəyər
// Bir array-dəki maksimum dəyəri taparaq qaytaran bir funksiya yaradın.

// let array = [12,23,53,38,43,96];

// function FindMax(array) {
//     let max = array[0];

//     for(let i = 0; i < array.length; i++){
//         if(array[i] > max){
//             max = array[i];
//         }
//     }

//     return max;
// }

// console.log(FindMax(array));

// 17. Cüt ədədlərin Sayı
// Verilmiş bir array-dəki cüt ədədlərin sayını hesablayan bir funksiya yaradın.

// let array = [12,34,21,4,675,87,342];

// function Evens(array){
//     let count = 0;

//     for(let a in array){
//         if(a % 2 == 0){
//             count ++;
//         }
//     }

//     return count;
// }

// console.log(Evens(array));

// 18. Vowel Yoxlanması
// Verilmiş bir xarakterin səsli hərf olub olmadığını yoxlayan bir funksiya yaradın (a, e, i, o, u).

// let a = "S";
// let vowels = ["a", "i", "o", "u", "e", "y"];
// a  = a.toLowerCase();

// function CheckVowel(a, list){
//     for(let i = 0; i < list.length; i++){
//         if(a == list[i]){
//             return a + " saitdir";
//         }
//     }

//     return a + " sait deyil";
// }

// console.log(CheckVowel(a, vowels));

// 19. Müsbət və Mənfi ədədlərin Sayı
// Verilmiş bir array-dəki müsbət və mənfi ədədlərin sayını qaytaran bir funksiya yaradın.

// let array = [12, 32, 0, 54, 21, 32, 19, 0];

// function OddEven(array) {
//     let odds = 0;
//     let evens = 0;

//     for (let a in array) {
//         if (array[a] % 2 == 0 && array[a] != 0) {
//             evens++;
//         } else {
//             odds++;
//         }
//     }

//     console.log("Evens = " + evens);
//     console.log("Odds = " + odds);
// }

// OddEven(array);