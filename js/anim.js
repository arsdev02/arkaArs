const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params) {
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i]
            const animItemHeight = animItem.offsetHeight
            const animItemsOffset = offset(animItem).top
            const animStart = 2

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if((scrollY > animItemsOffset - animItemPoint) &&  scrollY < (animItemsOffset + animItemHeight)){
                animItem.classList.add('_active')
            }else {
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_acrive')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(()=>{
        animOnScroll()
    }, 3000)
}