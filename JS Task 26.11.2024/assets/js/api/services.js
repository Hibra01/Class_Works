const cardsArea = document.querySelector(".cards-area");

const tableBody = document.querySelector(".table-body");

function showProducts(products) {
    cardsArea.innerHTML = "";

    products.forEach((product) => {

        cardsArea.innerHTML += `
                        <div class="col">
                            <div class="card" style="width: 24rem;">
                                <img src=${product.image} class="card-img-top" alt="${product.name} image" style="height: 200px;">
                                <div class="card-body">
                                    <p class="card-text">${product.name}</p>
                                    <p class="card-text">${product.description}</p>
                                    <p class="card-text"><span class="price-span">${product.price}</span>$</p>
                                </div>
                            </div>
                        </div>
        `
    });
}

function showTable(products) {
    tableBody.innerHTML = "";

    products.forEach((product) => {

        tableBody.innerHTML += `
                        <tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.description}</td>
                            <td><img src="${product.image}" alt="${product.name} image" style="width: 100px;"></td>
                            <td><button type="button" class="btn btn-info">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                        </tr>
        `
    });
}

export { showProducts };

export { showTable };