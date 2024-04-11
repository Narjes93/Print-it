const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];	

let numero = 0;

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener("click", function () {
    changeSlide(-1);
    console.log("Clic sur la flèche gauche");
});

arrowRight.addEventListener("click", function () {
    changeSlide(1);
    console.log("Clic sur la flèche droite");
});

function changeSlide(sens) {
    numero = numero + sens;
    if (numero > slides.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slides.length - 1;
    console.log(numero + sens);

    document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numero]['image'];
    document.querySelector(".tagline").innerHTML = slides[numero]['tagLine'];

const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, position) => {
        if (position === numero) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

const dotsContainer = document.querySelector(".dots");
slides.forEach(() => {
const bullet = document.createElement('span');
bullet.classList.add("dot");
dotsContainer.appendChild(bullet);
});