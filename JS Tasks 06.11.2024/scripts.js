class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Milk extends Product{
    constructor(name, price, FatPercent){
        super(name, price);
        this.FatPercent = FatPercent;
    }
}

const milk1 = new Milk("Azersud", 10, 20);
const milk2 = new Milk("Atena", 15, 30);
const milk3 = new Milk("Palsud", 20, 40);

let array = [];

array.push(milk1, milk2, milk3);

const totalPrice = array.reduce((accumulator ,item) => {
    return accumulator += item.FatPercent;
  }, 0);
console.log(Math.round(totalPrice / array.length));