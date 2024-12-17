const cube = document.querySelector(".cube")
const countDisplay = document.querySelector(".count-num")
const chooseBtn1 = document.querySelector(".choose-btn1")
const chooseBtn2 = document.querySelector(".choose-btn2")

let count = 0
let num = 1

cube.addEventListener("click", function(){
    count += num
    countDisplay.textContent = count
    let currentSize = cube.offsetWidth
    console.log(currentSize)
    cube.style.width = (currentSize + num) + "px"
    cube.style.height = (currentSize + num) + "px"

    if(count == 10){
        num = 3
        chooseBtn1.textContent = "+3 point"
        chooseBtn2.textContent = "+100 point for one time"
    }
    if(count == 200){
        num = 5
        chooseBtn1.textContent = "+5 point"
    }
})