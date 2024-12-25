const cordinatForm = document.querySelector("form")
const inputs = document.querySelectorAll("input")

const board = document.querySelector("table")

cordinatForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(inputs[0].value)
    console.log(inputs[1].value)
})

function addShip(col, row){
    
}