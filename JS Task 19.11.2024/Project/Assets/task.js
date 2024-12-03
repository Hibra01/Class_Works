const productForm = document.querySelector(".product-form");
const priceForm = document.querySelector(".price-form");

const titleValue = document.querySelector("#title");
const priceValue = document.querySelector("#price");
const descriptionValue = document.querySelector("#description");
const imageLink = document.querySelector("#image");

const sortOption = document.querySelector(".sort-option");
const sortOrder = document.querySelector(".sort-order");

const priceRange = document.querySelectorAll(".price-range");

const supNum = document.querySelector(".sup");


priceForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(priceRange[0].value, priceRange[1].value);
    addProduct(productsData.filter((item) => item.price > priceRange[0].value && item.price < priceRange[1].value));
});

sortOrder.addEventListener("change", function () {
    if (sortOrder.value == "a-z") {
        if (sortOption.value == "id") {
            addProduct(productsData.sort((a, b) => a.id - b.id));
            console.log(productsData);
        } else if (sortOption.value == "price") {
            addProduct(productsData.sort((a, b) => a.price - b.price));
            console.log(productsData);
        }
    }
    else if (sortOrder.value == "z-a") {
        if (sortOption.value == "id") {
            addProduct(productsData.sort((a, b) => b.id - a.id));
            console.log(productsData);
        } else if (sortOption.value == "price") {
            addProduct(productsData.sort((a, b) => b.price - a.price));
            console.log(productsData);
        }
    }
});

const my_grid = document.querySelector(".my-grid");

import { productsData } from "./data.js";

localStorage.setItem("products", JSON.stringify(productsData));
// productsData = JSON.parse(localStorage.getItem("products")) || [];

let basket = JSON.parse(localStorage.getItem("basket")) || [];

supNum.textContent = basket.length;


productForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let newProduct;

    newProduct = {
        id: Date.now(),
        title: titleValue.value,
        price: priceValue.value,
        description: descriptionValue.value,
        image: imageLink.value,
    };

    productsData.push(newProduct);
    localStorage.setItem("products", productsData);
    addProduct(productsData);
    reset();
});

// console.log(productsData.findIndex((p) => p.id == 4));

function addProduct(arr) {
    my_grid.innerHTML = "";

    arr.forEach((product) => {
        const card = document.createElement("div");
        // card.setAttribute("id", `"${product.id}"`);

        card.innerHTML =
            `
        <div class="col mainCard">
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="..." style="height: 300px">
                <div class="card-body">
                    <h5 class="card-title">${product.title.slice(0, 20)}...</h5>
                    <p class="card-text">${product.price}$</p>
                    <p class="card-text">${product.description.slice(0, 60)}...</p>
                    <button type="button" class="btn btn-primary infoBtn" data-id="${product.id}">Details</button>
                    <button type="button" class="btn btn-danger deleteBtn" data-id="${product.id}">Delete</button>
                    <button type="button" class="btn btn-outline-secondary basketBtn" data-id="${product.id}"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </div>
        `;

        my_grid.appendChild(card);
    });

    const deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((bnt) => {
        bnt.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            console.log("btn id: ", id);
            const index = productsData.findIndex((p) => p.id == id);
            console.log("product index: ", index);

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteProduct(index, bnt);

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        });
    });

    const infobtns = document.querySelectorAll(".infoBtn");
    infobtns.forEach((infoBtn) => {
        infoBtn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            window.location.href = `./details.html?id=${id}`;
        });
    });

    const basketBtns = document.querySelectorAll(".basketBtn");
    basketBtns.forEach((btn) => {
        btn.addEventListener("click", function(){
            const id = this.getAttribute("data-id");
            const index = productsData.findIndex((p) => p.id == id);
            addToBasket(index);
            // console.log(id);
        });
    });
}

addProduct(productsData);

function addToBasket(index){
    productsData[index].count++;
    console.log(index);
    console.log(productsData[index].count);
    basket.push(productsData[index]);
    supNum.textContent = basket.length;
    localStorage.setItem("products", JSON.stringify(productsData));

    localStorage.setItem("basket", JSON.stringify(basket));
}

function deleteProduct(productIndex, deleteBtn) {
    productsData.splice(productIndex, 1);
    addProduct(productsData);
}

function reset() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = "";
    });
}