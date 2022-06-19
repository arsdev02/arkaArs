const burgerFunc = () =>{
    const burgerBtn = document.querySelector('.burger-btn')
    const nav = document.querySelector('.header__list')
    const navUl = document.querySelector('.header-ul')

    burgerBtn.addEventListener('click', ()=> {
        burgerBtn.classList.toggle('show-btn')
        nav.classList.toggle('show-header_list')
        navUl.classList.toggle('show-ul')
    })
}
burgerFunc()

const header = document.querySelector('#header')

window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled !== 0){
        header.classList.add('header_hide')
    }else{
        header.classList.remove('header_hide')
    }
}

header.addEventListener('mouseenter', () => {
    header.classList.add('header_show')
})

header.addEventListener('mouseleave', () => {
    header.classList.remove('header_show')
})

// const headerNav = document.querySelector('.header-ul')

// headerNav.addEventListener('mouseenter', (e)=>{
//     e.stopPropagation()
// })