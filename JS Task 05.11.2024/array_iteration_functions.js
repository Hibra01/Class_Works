let milks=[
    {
        id:1,
        name:"Azersud",
        price:5,
        FatPercent:1.5,
        MadeIn:"Azerbaijan"
    },
      {
        id:2,
        name:"Palsud",
        price:4,
        FatPercent:2,
        MadeIn:"Azerbaijan"
    },
      {
        id:3,
        name:"Atena",
        price:2,
        FatPercent:3,
        MadeIn:"Georgia"
    }
]

// TASK 1.1 : Məhsulların hər birini consoleda göstərin.

// milks.forEach((milk) => console.log(milk));

// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.

// const product = milks.find((milk) => milk.id == 1);
// console.log(product);

// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.

// const totalPrice = milks.reduce((accumulator ,item) => {
//     return accumulator += item.FatPercent;
//   }, 0);
// console.log(Math.round(totalPrice / milks.length));

// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.

// let product = milks.filter((milk) => milk.FatPercent > 2);
// console.log(product.id);

// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.

// let a = 10;
// let newArray = milks.map((milk) => milk.price + a);
// console.log(newArray);

// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.

// let sum = 0;
// milks.map((milk) => sum += milk.price);
// console.log(sum);

// Task 1.7 : Məhsullardan id-si 2-ə bərabər olan məhsulu qaytaran funksiya yazın.

// console.log(milks.find((milk) => milk.id == 2));

// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin