// Task1
const todoAddForm = document.getElementById("todo-add-form") // Idsine gore elementi secirik
const todoNameInput = document.querySelector(".todo-name-input") // Classina gore elementi secirik
const addBtn = document.querySelector(".add-btn") // Classina gore elementi secirik

// console.log(todoAddForm);
// console.log(todoNameInput);

// Task2
const deleteBtn = document.querySelectorAll(".delete-btn") // Eyni classa aid olan elementleri secirik
const divs = document.querySelectorAll("div") // Eyni tag namede olan elementleri secirik

// console.log(deleteBtn)
// console.log(divs)

// Task3

//Onclick metodu ile alert cixardiriq
// addBtn.onclick = function(){
//     alert("alert hi from property")
// }

//AddEventListener ile alert cixardiriq
// addBtn.addEventListener("click", function(event){
//     event.preventDefault()
//     alert("alert hi from listener")
// })

// Task4

// addBtn.addEventListener("click", function(event){ //Click prosesi
//     event.preventDefault() //Sehifenin yenilenmesinin qarsisi alinir
//     const newDiv = document.createElement("div") //Her clickde yeni bir element yaradiriq
//     newDiv.textContent = "newDiv"
//     todoAddForm.appendChild(newDiv) //Her clickde yeni bir element elave edirik
//     console.log("added")

//     newDiv.addEventListener("click", function(){
//         newDiv.remove() //Her clickde element silinir
//     })
// })


// const myImg = document.createElement("img")

// myImg.setAttribute("class", "my-img")
// myImg.setAttribute("src", "https://cdn.dribbble.com/users/890178/screenshots/11422057/media/826ee7fc7c50835a0ec67100f3774dd8.gif")
// document.body.append(myImg)


// const imgWindow = document.querySelector(".img-window")
// const chooses = document.querySelectorAll(".img-choose")

// chooses.forEach(img => img.onclick = () => imgWindow.src = img.src)

