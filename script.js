let previously = document.querySelector('.previously')
let next = document.querySelector('.next')

// Class commun pour tous mes images de caroussel
let images = document.querySelectorAll('.images')
const imageLength = images.length;

let writer = document.querySelectorAll('.writer')


previously.addEventListener('click', previous)
let count = 0;

previously.addEventListener('click', previous)

function previous(){

    if((count < (imageLength)) && (count !=0)){
        images[count].classList.remove('visible')
        writer[count].classList.remove('see')
        count--;
    }else{
        images[count].classList.remove('visible')
        writer[count].classList.remove('see')
        count = imageLength - 1;
    }

    images[count].classList.add('visible');
    images[count].style.transition = '10s ease-in-out';
    writer[count].classList.add('see');
    writer[count].style.transition = '10s ease-in-out';
}

next.addEventListener('click', suivant)

function suivant(){

    if(count < imageLength-1){
        images[count].classList.remove('visible')
        writer[count].classList.remove('see')
        count++;
    }else{
        count= 0;
        images[imageLength-1].classList.remove('visible')
        writer[imageLength-1].classList.remove('see')
    }

    images[count].classList.add('visible');
    images[count].style.transition = '10s ease-in-out';
    writer[count].classList.add('see');
    writer[count].style.transition = '10s ease-in-out';
}

// For the mobile version
let bars = document.querySelector('.fa-bars')
let navBar = document.querySelector('.navBar')
let times = document.querySelector('.fa-times')
let caroussel = document.querySelector('.caroussel')

bars.addEventListener('click', menuMouv)

function menuMouv(){
    navBar.classList.add('mouv')
    bars.style.display = "none";
    caroussel.style.transform = 'translateY(1em)'
    times.style.display = "inline";
}

times.addEventListener('click', deleteMenu)

function deleteMenu(){
    navBar.classList.remove('mouv')
    bars.style.display = "inline";
    times.style.display = "none";
    caroussel.style.transform = 'translateY(-1em)';
}
