const button = document.querySelector('.button')
const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.send-box')
const modalBtn = document.querySelector('.modal_button')
const closeBtn = document.querySelector('.close-btn')

const backdropFunc = () => {
    backdrop.classList.toggle('backdropActiv')
    
    // убрать скролл
    document.body.classList.toggle('hightScroll')
}
// открыть модалку
button.addEventListener('click', backdropFunc)

// закрыть модалку
backdrop.addEventListener('click', backdropFunc)
closeBtn.addEventListener('click', backdropFunc)

// modalBtn.addEventListener('click', backdropFunc)

modal.addEventListener('click', (e)=>{
    e.stopPropagation()
})

modalBtn.addEventListener('mousemove', (e) =>{
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
      
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
})
