// Navlinks Hover Effect
var marker = document.querySelector('.marker');
var item = document.querySelectorAll('nav a');


function indicator(e){
 marker.style.left = e.offsetLeft+"px";
 marker.style.width = e.offsetWidth+"px";
} 

item.forEach(link => {
 link.addEventListener('mouseover', (e)=>{
   indicator(e.target);
 })
})
// End of Navlinks Hover Effect

// Mobile Menu Burger
const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.navlinks')
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('open')
    navlinks.classList.toggle('open')
})
// End of Mobile Menu Burger


// Sliding Hero
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function currentSlidee(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' actif', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " actif";
}
// End of Sliding Hero

// Testimonial JS

var slides = document.querySelectorAll('.slide')
var buts = document.querySelectorAll('.but')
let currentSlide = 1

// Script for Manual Sliding Navigatiuon
var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('activ')

        buts.forEach((but) => {
            but.classList.remove('activ')
        })
    })

    slides[manual].classList.add('activ')
    buts[manual].classList.add('activ')
}

buts.forEach((but, i) => {
    but.addEventListener('click', ()=>{
        manualNav(i)
        currentSlide = i
        
    })
})
//End of Script for Manual Sliding Navigatiuon

// Script for Autoplay Navigation
var repeat = function(activeClass){
    let active = document.getElementsByClassName('activ')
    let i = 1

    var repeater = ()=> {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('activ')
            })

            slides[i].classList.add('activ')
            buts[i].classList.add('activ')
            i++

            if(slides.length == i){
                i = 0
            }
            if(i >= slides.length){
                return
            }
            repeater()
        }, 10000)
    }
    repeater()
}
repeat()
// // End of  Script for Autoplay Navigation

// End of Testimonial JS
