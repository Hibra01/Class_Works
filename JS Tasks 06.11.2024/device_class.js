class Device {
    constructor(brand, model, screen_size, battery_level, price, sale_count, sale_price) {
        this.brand = brand;
        this.model = model;
        this.screen_size = screen_size;
        this.battery_level = battery_level;
        this.price = price;
        this.sale_count = sale_count;
        this.sale_price = sale_price;

        if (this.sale_price < this.price) {
            throw new Error("Sale price is less than price");
        }
    }

    CalculateProfit() {
        let endMoney = (this.sale_price - this.price) * this.sale_count;
        if (endMoney > 0) {
            return endMoney;
        } else {
            return "Ziyan" + endMoney;
        }
    }

    DisplayBatteryLevel() {
        return this.battery_level;
    }

    DisplayDetails() {
        return `Bu mehsul ${this.brand} brandine aid ${this.model} model ve ${this.screen_size} ekran olculu bir mehsuldur.`
    }
}

const device1 = new Device("iphone", "X", "1200 x 700", 100, 1000, 10, 1200);

console.log("Total Profit = " + device1.CalculateProfit());
console.log("Device Battery Level = " + device1.DisplayBatteryLevel() + "%");
console.log(device1.DisplayDetails());


class Phone extends Device {
    constructor(brand, model, screen_size, battery_level, price, sale_count, sale_price, isSmart) {
        super(brand, model, screen_size, battery_level, price, sale_count, sale_price);

        this.isSmart = isSmart = false;
    }
}

class Laptop extends Device {
    constructor(brand, model, screen_size, battery_level, price, sale_count, sale_price, isRGBkeyboard) {
        super(brand, model, screen_size, battery_level, price, sale_count, sale_price);

        this.isRGBkeyboard = isRGBkeyboard;
    }
}

const phone1 = new Phone("Samsung", "S24", "1200 x 450", 80, 1200, 100, 2100, true);
const phone2 = new Phone("Redmi", "12", "1100 x 650", 90, 800, 300, 1800, true);
const phone3 = new Phone("Nokia", "6300", "600 x 300", 60, 300, 1000, 600, false);

const laptop1 = new Laptop("Asus", "F15", "1920 x 1080", 30, 1200, 3000, 1400, true);
const laptop2 = new Laptop("HP", "Omen", "1920 x 1080", 60, 800, 1000, 1200, false);
const laptop3 = new Laptop("Acer", "Nitro", "1920 x 1080", 90, 1000, 1200, 1400, true);

let productsArray = [];

productsArray.push(phone1, phone2, phone3, laptop1, laptop2, laptop3);

let objects
function FilterbyPrice(array, price){
    objects = array.filter((obj) =>{
        if(obj.price > price){
            return obj.model;
        }
    });
}

console.log(FilterbyPrice(productsArray, 1000));