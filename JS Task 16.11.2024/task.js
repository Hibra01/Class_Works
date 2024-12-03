const result = document.getElementById("result");
const inputNum = document.getElementById("inputNum");
const button = document.getElementById("submit");
let youNum = document.querySelector("#your-num");
let computerNum = document.querySelector("#comp-num");




button.addEventListener("click", function (event) {
    event.preventDefault();
    result.textContent = "";

    if (inputNum.valueAsNumber > 100 || inputNum.valueAsNumber < 0) {
        result.style.display = "flex";
        result.textContent = "Your number is wrong. Please enter number again (0-100)";
        result.style.backgroundColor = "red";
    }
    else {
        let compNum = Math.floor(Math.random() * 100);
        console.log(compNum);

        if (inputNum.valueAsNumber > compNum) {
            result.textContent = "Your number more than computer number";
        } else if (inputNum.valueAsNumber < compNum) {
            result.textContent = "Your number less than computer number";
        } else {
            result.textContent = "Your number = computer number";
        }

        youNum.textContent = inputNum.valueAsNumber;
        computerNum.textContent = compNum;
    }
    setTimeout(() => {
        result.style.display = "none";
    }, 3000);
});