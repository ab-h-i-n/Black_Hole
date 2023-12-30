var menuBtn = document.querySelector('.menu .menu-btn');
var menu = document.querySelector('.menu');


menuBtn.addEventListener("click",function(){
    menu.classList.add('active');
})

var menuBackdrop = document.querySelector('.menu-backdrop');

menuBackdrop.addEventListener('click',()=>{
    menu.classList.remove('active');
})