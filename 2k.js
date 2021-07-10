var marker = document.querySelector('.marker')
var navlinks = document.querySelectorAll('nav a')

function indicator(e){
  marker.style.left = e.offsetLeft+"px"
  marker.style.width = e.offsetWidth+"px"
}

navlinks.forEach(link =>{
  link.addEventListener('mouseover', (e)=>{
    indicator(e.target)
  })
})

// Responsive Header
let menu = document.querySelector('.menubar')
let nav = document.querySelector('nav')
let hamburger = document.querySelector('.hamburger')
let menulinks = document.querySelectorAll('header nav a')

menu.addEventListener('click', ()=>{
  nav.classList.toggle('active')
  hamburger.classList.toggle('active')
  menu.classList.toggle('active')
})

menulinks.forEach((item)=>{
  item.addEventListener('click', ()=>{
    menu.classList.toggle('active') 
    nav.classList.toggle('active') 
    hamburger.classList.toggle('active')
  })
})

// Scroll Header
document.addEventListener('scroll', ()=>{
  var scroll_position = window.scrollY
  if(scroll_position > 250){
    // header.style.backgroundColor = "#29323c" 
    header.style.backgroundColor = "#036161" 
  }else{
    header.style.backgroundColor = "#00000050"
  }
})
// Scroll Header Ends
// End of Responsive Header

// Sliding Hero
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
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
// End of  Script for Autoplay Navigation

// End of Testimonial JS
