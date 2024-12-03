const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-desk");
const a = document.querySelectorAll(".a");

let isMobile = false;
menuBtn.addEventListener("click", function(){
    menuMobile.classList.toggle("show-menu");
    a.forEach((tag) => tag.classList.toggle("hide-a"));

    // if(isMobile == false){
    //     isMobile = true;
    //     menuMobile.classList.add("show-menu");
    // }
    // else if(isMobile == true){
    //     isMobile = false;
    //     menuMobile.classList.remove("show-menu");
    // }
});