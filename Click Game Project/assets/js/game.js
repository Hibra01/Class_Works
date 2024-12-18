const cube = document.querySelector(".cube")
const countDisplay = document.querySelector(".count-num")
const chooseBtn1 = document.querySelector(".choose-btn1")
const chooseBtn2 = document.querySelector(".choose-btn2")
const btns = document.querySelector(".btns")

let count = 0
let num = 1
let width = 10
let height = 10
let bool = true

cube.style.width = width + "px"
cube.style.height = height + "px"

cube.addEventListener("click", function () {
    if (bool) {
        count += num
        countDisplay.textContent = count 
        // let currentSize = cube.offsetWidth
        // console.log(currentSize)
        // cube.style.width = (currentSize + num) + "px"
        // cube.style.height = (currentSize + num) + "px"
        resizeCube()
        if (count == 10) {
            chooseBtn1.textContent = "+3 point"
            chooseBtn2.textContent = "+50 point for one time"
            btns.classList.toggle("show-btns")
            bool = false

            chooseBtn1.addEventListener("click", function () {
                num = 3
                bool = true
                btns.classList.toggle("show-btns")
            })

            chooseBtn2.addEventListener("click", function () {
                count += 50
                bool = true
                width += count
                height += count
                resizeCube()
                btns.classList.toggle("show-btns")
            })
        }
        if (count == 60) {
            chooseBtn1.textContent = "+5 point"
            chooseBtn2.textContent = "+100 point for one time"
            btns.classList.toggle("show-btns")
            bool = false

            chooseBtn1.addEventListener("click", function () {
                num = 5
                bool = true
                btns.classList.toggle("show-btns")
            })

            chooseBtn2.addEventListener("click", function () {
                count += 100
                bool = true
                width += count
                height += count
                resizeCube()
                btns.classList.toggle("show-btns")
            })
        }
    }
})


function resizeCube() {
    width += num
    height += num
    console.log(width)
    console.log(height)
    cube.style.width = width + "px"
    cube.style.height = height + "px"
}