const cards = document.querySelectorAll(".card")

let array = []

cards.forEach((a) =>
    a.addEventListener("click", function () {
        if (array.length >= 2) {
            return
        }
        a.children[0].classList.replace("hide", "show")
        a.children[1].classList.replace("show", "hide")
        array.push(a.getAttribute("data-id"))
        if (array.length == 2) {
            // console.log(compareCards(array))
            compareCards(array)
        }
        // console.log(array)
    })
)

function compareCards(array) {
    // console.log(array[0])
    // console.log(array[1])
    if (array[0] == array[1]) {
        cards.forEach((a) => {
            console.log(a)
            if (a.getAttribute("data-id") == array[0]) {
                console.log(array)
                a.children[0].classList.replace("show", "hide")
                a.children[1].classList.replace("show", "hide")
                a.children[2].classList.replace("hide", "show")
            }
        }
        )
    }
    else {
        cards.forEach((a) => {
            console.log(a)
            if (a.getAttribute("data-id") == array[0]) {
                console.log("Not")
                a.children[0].classList.replace("show", "hide")
                a.children[1].classList.replace("hide", "show")
                a.children[2].classList.replace("show", "hide")
            }
        }
        )
    }
}