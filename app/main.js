// RESPONSIVE HEADER
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

// TABS

const Tab = document.querySelectorAll(".tabs ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

Tab.forEach(tab =>{
  tab.addEventListener("click",() =>{
    Tab.forEach(tab =>{
      tab.classList.remove("active")
    })
    tab.classList.add("active")

    const tabval = tab.getAttribute('data-tabs')

    all.forEach(item =>{
      item.style.display = 'none'
    })

    if (tabval == 'food'){
      foods.forEach(item =>{
        item.style.display = 'block'
      })
    }
    else if (tabval == 'snack'){
      snacks.forEach(item =>{
        item.style.display = 'block'
      })
    }
    else if (tabval == 'beverage'){
      beverages.forEach(item =>{
        item.style.display = 'block'
      })
    }
    else{
      all.forEach(item =>{
        item.style.display = 'block'
      })
    }
  })
})