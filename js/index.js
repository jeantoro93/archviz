"use strict"

// header - menu burger
const burger = document.querySelector(`.header-burger`);
const menu   = document.querySelector(`.header-list`);

burger.addEventListener(`click`, ()=>{
    menu.classList.toggle(`isActive`);
    burger.classList.toggle(`isOn`);
})