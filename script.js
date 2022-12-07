'use strict'

const header = document.querySelector('.header'),
      border = document.querySelector('.border'),
      theme = document.querySelector('.theme');

let color, sun, night;

sun = 'https://cdn-icons-png.flaticon.com/128/7903/7903629.png';
night = 'https://cdn-icons-png.flaticon.com/512/1229/1229467.png';
theme.addEventListener('click', event => {
    event.preventDefault();
    if (theme.id == "white") {
        header.style.background = 'grey';
        border.style.border = '3px solid grey';
        theme.src = sun;
        theme.id = "night";
    } else {
        header.style.background = 'white';
        border.style.border = '3px solid white';
        theme.src = night;
        theme.id = "white";
    }
})