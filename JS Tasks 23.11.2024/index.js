const request = new Request("https://northwind.vercel.app/api/suppliers");

const myGrid = document.querySelector(".my-grid");

fetch(request)
    .then((response) => response.json())
    .then((data) => {
        addProduct(data);
    })
    .catch(() => {
        console.log("error");
    });

function addProduct(array) {
    myGrid.innerHTML = "";

    console.log(array);

    array.forEach((user) => {
        const card = document.createElement("div");

        card.innerHTML = `
        <div class="col mainCard">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Company name: <span class="text-primary">${user.companyName}</span></h5>
                    <h6 class="card-title">Contact name: <span class="text-primary">${user.contactName}</span></h6>
                    <p class="card-text">Contact title: <span class="text-primary">${user.contactTitle}</span></p>
                    <p class="card-text">Street: <span class="text-primary">${user.address.street}</span></p>
                    <p class="card-text">Region: <span class="text-primary">${user.address.region}</span></p>
                    <p class="card-text">Postal code: <span class="text-primary">${user.address.postalCode}</span></p>
                    <p class="card-text">Country: <span class="text-primary">${user.address.country}</span></p>
                    <p class="card-text">Phone: <span class="text-primary">${user.address.phone}</span></p>
                    <button type="button" class="btn btn-primary infoBtn" data-id="${user.id}">Details</button>
                    <button type="button" class="btn btn-danger deleteBtn" data-id="${user.id}">Delete</button>
                </div>
            </div>
        </div>
    `

        myGrid.append(card);
    });

    // const deleteBtns = document.querySelectorAll(".deleteBtn");
    // deleteBtns.forEach((bnt) => {
    //     bnt.addEventListener("click", function () {
    //         const id = this.getAttribute("data-id");
    //         console.log("btn id: ", id);
    //         // const index = array.findIndex((p) => p.id == id);
    //         // console.log("product index: ", index);

    //         // fetch(request + "/" + id, {
    //         //     method: 'DELETE',
    //         //   })
    //         //   .then((item) => item)
    //         //   .then((item) => getData());
    //     });
    // });
}