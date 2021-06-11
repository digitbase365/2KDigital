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

menu.addEventListener('click', ()=>{
  nav.classList.toggle('active')
  hamburger.classList.toggle('active')
})

// Scroll Header
// document.addEventListener('scroll', ()=>{
//   var scroll_position = window.scrollY
//   if(scroll_position > 250){
//     header.style.backgroundColor = "#29323c"
//   }else{
//     header.style.backgroundColor = "#00000050"
//   }
// })
// Scroll Header Ends
// End of Responsive Header
