const cards = document.querySelectorAll(".card")

let array = []

cards.forEach((a) =>
    a.addEventListener("click", function () {
        if (array.length < 2) {
            a.children[0].classList.toggle("show")
            a.children[1].classList.toggle("hide")
            array.push(a.getAttribute("data-id"))
            if (array.length == 2) {
                // console.log(compareCards(array))
                compareCards(array)
            }
            // console.log(array)
        }
    })
)

function compareCards(array) {
    // console.log(array[0])
    // console.log(array[1])
    if (array[0] == array[1]) {
        cards.forEach((a) => {
            if (a.getAttribute("data-id") == array[0]) {
                console.log(a)
                a.children[0].classList.toggle("hide")
                a.children[1].classList.toggle("hide")
                // a.children[2].classList.toggle("show")
            }
        }
        )
    }
}