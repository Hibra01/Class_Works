import { baseURL } from "./api/constants.js";

import { showProducts } from "./api/services.js";

const searchInput = document.querySelector(".search-input");

getData();

async function getData() {
    const response = await axios.get(`${baseURL}/products`);
    showProducts(response.data);
}


let timeout = null;

searchInput.addEventListener("input", function () {
    clearTimeout(timeout);

    timeout = setTimeout( async () => {
        const response = await axios.get(`${baseURL}/products`);
        showProducts(response.data.filter((p) => p.name.toLowerCase().trim().includes(searchInput.value.toLowerCase().trim()) || p.description.toLowerCase().trim().includes(searchInput.value.toLowerCase().trim())));
    }, 500);
});