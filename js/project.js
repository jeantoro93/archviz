"use strict"

// header - menu burger simple, transition en css
const burger = document.querySelector(`.header-burger`);
const menu   = document.querySelector(`.header-list`);

burger.addEventListener(`click`, ()=>{
    menu.classList.toggle(`isActive`);
    burger.classList.toggle(`isOn`);
})


// work - carrousel para pasar de imagen con clicks
const carrousel = document.querySelector(`.work-project-carrousel`)
const images = carrousel.querySelectorAll(`img`)
// work - carrousel const agregada con ia, no sabía como mezclar video e imagen en un carrusel
const video = carrousel.querySelectorAll(`img, video`)
const next = carrousel.querySelector(`.work-project-next`)
const prev = carrousel.querySelector(`.work-project-prev`)

let contador = 0

images[contador].classList.add(`isActive`)

next.addEventListener(`click`, () => {
    images[contador].classList.remove(`isActive`)

    contador++
    if (contador === images.length) {
        contador = 0
    }

    images[contador].classList.add(`isActive`)
})

prev.addEventListener(`click`, () => {
    images[contador].classList.remove(`isActive`)

    contador--
    if (contador < 0) {
        contador = images.length - 1
    }

    images[contador].classList.add(`isActive`)
})


// work - carrousel función para pasar de imagen con teclas
window.addEventListener(`keyup`, (e)=>{
    let { key } = e

    key === `ArrowRight` && next.click()
    key === `ArrowLeft`  && prev.click()
})