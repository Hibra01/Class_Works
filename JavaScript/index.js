// let a = prompt("Enter number value:");

// if(a % 2 === 0){
//     alert("Cut");
// }else{
//     alert("Tek");
// }

// let grade = prompt("Enter your grade:");

// if(grade <= 100 && grade >=0){
//     if(grade <= 50){
//         alert("Your grade is - F");
//     }else if(grade > 50 && grade <= 60){
//         alert("Your grade is - E");
//     }else if(grade > 60 && grade <= 70){
//         alert("Your grade is - D");
//     }else if(grade > 70 && grade <= 80){
//         alert("Your grade is - C");
//     }else if(grade > 80 && grade <= 90){
//         alert("Your grade is - B");
//     }else if(grade > 90 && grade <= 100){
//         alert("Your grade is - A");
//     }
// }else{
//     alert("Grade is not positive number or grade is more than 100");
// }

// let month = prompt("Enter month name:").toLowerCase();

// switch (month){
//     case "september":
//         case "october":
//         case "november":
//             alert("Seaseon is Autumn");
//             break;

//     case "december":
//         case "january":
//         case "february":
//             alert("Seaseon is Winter");
//             break;

//     case "march":
//         case "april":
//         case "may":
//             alert("Seaseon is Spring");
//             break;

//     case "june":
//         case "july":
//         case "august":
//             alert("Seaseon is Summer");
//             break;

//     default:
//         alert("Please enter correct month name");
// }

// Task 1

// let peopleAge = prompt("Your age:");

// if(peopleAge >= 0 && peopleAge < 125){
//     if(peopleAge > 65){
//         alert("Yessss! pensiya ala bilersiniz!");
//     }else{
//         alert("Yasiniz catmir!");
//     }
// }else{
//     alert("Yasi duzgun daxil edin!");
// }

// Task 2

// let a = prompt("a =");
// let b = prompt("b =");
// let c = prompt("c =");

// if(a > 0 && b > 0 && c > 0){
//     if(a == b && b == c){
//         alert("Beraberterefli ucbucaq");
//     }else if(a == b && a != c || a == c && a != b || b == c && b != a){
//         alert("Beraberyanli ucbucaq");
//     }else{
//         alert("Muxtelifterefli ucbucaq");
//     }
// }else{
//     alert("Eded musbet deyil!");
// }

// Task 5

// let a = prompt("a =");

// if(a % 3 == 0 && a % 5 == 0){
//     alert("Bolunur");
// }else{
//     alert("Bolunmur");
// }

// Task 9

// let a = prompt("a =");
// let b = prompt("b =");
// let c = prompt("c =");

// let maxNum = undefined;

// if(a > b && a > c){
//     maxNum = a;
// }else if(b > a && b > c){
//     maxNum = b;
// }else if(c > a && c > b){
//     maxNum = c;
// }else{
//     maxNum = "Beraberdirler";
// }

// alert(maxNum);

// Task 12

// let x = prompt("x =");
// let y = prompt("y =");

// if(x > 0 && y < 0){
//     alert(4 * x + 2 * y + 4);
// }
// else if(x > 0 && y == 0){
//     alert(2 * x - y + 3);
// }else if(x < 0 && y > 0){
//     alert(3 * x + 4 * y + 3);
// }else{
//     alert("NOT");
// }

// Task Bank

let salary = +prompt("Emek haqqini daxil edin:");
let price = +prompt("Meblegi daxil edin:");
let time = +prompt("Muddeti daxil edin:");

let f = 0;
let moneyForMonth = 0;

let maxPrice = 10 * salary;
let maxMoneyForMonth = salary * 45 / 100;

if (time > 0 && time <= 36 && price <= maxPrice) {
    if (time <= 12) {
        f = 13;
    }
    else if (time > 12 && time <= 24) {
        f = 15;
    }
    else {
        f = 17;
    }

    moneyForMonth = (price + price * f / 100) / time;

    if (moneyForMonth < maxMoneyForMonth) {
        alert(price + " AZN size " + f + " %-le " + time + " ay muddetine ayliq " + moneyForMonth + " AZN olaraq verilecek.");
    } else {
        alert("Sertler qarsilanmir.")
    }
}
else {
    alert("Sertler qarsilanmir.");
}