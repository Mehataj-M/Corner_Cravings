const Hamburger = document.getElementById('hamburger');
const Navmenu = document.getElementById('nav-menu');
const Close=document.getElementById('nav-close');
const Link=document.querySelectorAll('.nav__link ')

Link.forEach(link =>
  link.addEventListener('click',()=>{
    Navmenu.classList.add('hidden')
  }))
Close.addEventListener('click',()=>{
  Navmenu.classList.add('hidden')
})
Hamburger.addEventListener("click",()=> {
  Navmenu.classList.remove('hidden')
})