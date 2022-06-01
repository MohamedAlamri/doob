let menuIcon = document.querySelector(".menu-icon");
let navItem = document.querySelector(".navitem");
let btnContact = document.querySelector(".btn-contact");

menuIcon.addEventListener("click", function(){
    navItem.classList.toggle("active");
    btnContact.classList.toggle("active")
})