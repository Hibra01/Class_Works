
const cars = document.querySelectorAll(".car")

let intervalId;



intervalId = function raceFunc(){
    
}

let car1X = 0
let car2X = 0
let car3X = 0

intervalId = setInterval(function() {
    car1X += 10
    car2X += 8
    car3X += 9
    cars[0].style.transform = `translateX(${car1X}px)`
    cars[1].style.transform = `translateX(${car2X}px)`
    cars[2].style.transform = `translateX(${car3X}px)`
    console.log(car1X)
}, 10);