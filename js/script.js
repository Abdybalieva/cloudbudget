const button=document.getElementById('burger-menu-button')
const menu=document.getElementById('header-ul')
const link =document.querySelectorAll('.header-nav-link')



button.addEventListener('click', () =>{
    menu.classList.toggle('mobile-menu')
})

// button.addEventListener('click' , () =>{
//
//     }
// // )
// const link = document.getElementsByClassName('mobile-menu')
// menu.classList.toggle('mobile-menu')
link.forEach((elem) =>{
    elem.addEventListener('click', () =>{
        menu.classList.remove('mobile-menu')
    })
    }
)