import { baseURL } from "./api/constants.js";

import { showTable } from "./api/services.js";

const productForm = document.querySelector(".product-form");

const electronicsOption = document.querySelector(".electronics-option");
const smartphonesOption = document.querySelector(".smartphones-option");
const gamingOption = document.querySelector(".gaming-option");
const accessoriesOption = document.querySelector(".accessories-option");



const nameInput = document.querySelector(".name-input");
const descInput = document.querySelector(".desc-input");
const priceInput = document.querySelector(".price-input");
const stockInput = document.querySelector(".stock-input");
const discInput = document.querySelector(".disc-input");
const categoryInput = document.querySelector(".category-input");

productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const desc = descInput.value.trim();
    const price = priceInput.value.trim();
    const stock = stockInput.value.trim();
    const disc = discInput.value.trim();
    const category = categoryInput.value;


    const newProduct = {
        name: name,
        description: desc,
        price: price,
        stock: stock,
        disc: disc,
        categoryId: category,
    }

    addObject(newProduct);

    console.log(newProduct);
});


async function addObject(obj) {
    await axios
        .post(`${baseURL}/products`, obj)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
}


// getData();

async function getData() {
    const response = await axios.get(`${baseURL}/products`);
    showTable(response.data);
}

getCategoryId();

async function getCategoryId() {
    const response = await axios.get(`${baseURL}/categories`);

    electronicsOption.value = response.data.find((category) => category.name == "Electronics").id;
    smartphonesOption.value = response.data.find((category) => category.name == "Smartphones").id;
    gamingOption.value = response.data.find((category) => category.name == "Gaming").id;
    accessoriesOption.value = response.data.find((category) => category.name == "Accessories").id;
}