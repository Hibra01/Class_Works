const studentForm = document.querySelector(".student-form");
const studentName = document.querySelector(".student-name");
const studentScore = document.querySelector(".student-score");
const calculateBtn = document.querySelector(".calc-btn");
const totalDisplay = document.querySelector(".total");


let students = JSON.parse(localStorage.getItem("students")) || [];

studentForm.addEventListener("submit", function(event){
    event.preventDefault();

    let newStudent;

    newStudent = {
        name: studentName.value,
        score: studentScore.value,
    }

    students.push(newStudent);

    localStorage.setItem("students", JSON.stringify(students));
});

calculateBtn.addEventListener("click", function(){
    let total = 0;
    students.forEach((item) => {
        total += +item.score;
    });

    total = total / students.length;

    totalDisplay.textContent = total;
});