const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-desk");

let isMobile = false;

menuBtn.addEventListener("click", function(){
    // menuMobile.classList.closest("show-menu");
    console.log("Hello");
    if(isMobile == false){
        console.log("Yes");
        isMobile = true;
        menuMobile.classList.add("show-menu");
    }
    else if(isMobile == true){
        console.log("Not");
        isMobile = false;
        menuMobile.classList.remove("show-menu");
    }
});