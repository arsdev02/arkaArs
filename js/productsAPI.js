$(document).ready(function(){
    $('.prodSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrow: true,
        dots: true,
        pausOnHover: true,
        rows: 2,
        // fade: true,
        responsive: [
            {
              breakpoint: 821,
              settings: {
                slidesToShow: 2,
                dots: false,
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                dots: false,
              }
            },
          ]
    });
  });

const productsAPI = [
    {
        title: 'Custom Carton Boxes',
        image: './images/products/1.png',
        description: 'Create a clean brand presentation with this custom carton box.',
        price: 99,
    },
    {
        title: 'Custom Boxes',
        image: './images/products/2.png',
        description: 'A stylish and strong corrugated cardboard box.',
        price: 99,
    },
    {
        title: 'Custom Poly Mailers',
        image: './images/products/3.png',
        description: 'A fully custom high quality self sealing poly mailer.',
        price: 99,
    },
    {
        title: 'Custom Tape',
        image: './images/products/4.png',
        description: 'High quality custom tape to seal your shipping boxes during delivery.',
        price: 99,
    },
    {
        title: 'Custom Stickers',
        image: './images/products/5.png',
        description: 'Add personality to your packages with custom stickers.',
        price: 99,
    },
    {
        title: 'Custom Tissue Paper',
        image: './images/products/6.png',
        description: 'The perfect addition to branding your package.',
        price: 99,
    },
    {
        title: 'Custom Poly Mailers',
        image: './images/products/3.png',
        description: 'A fully custom high quality self sealing poly mailer.',
        price: 99,
    },
    {
        title: 'Custom Tape',
        image: './images/products/4.png',
        description: 'High quality custom tape to seal your shipping boxes during delivery.',
        price: 99,
    },

]

const prodContainer = document.querySelector('.prod-container')
const prodRow = document.querySelector('.prod-row')

productsAPI.map((el) =>{
    const col3 = document.createElement('div')
    col3.className = 'col-3'

    const prodBox = document.createElement('div')
    prodBox.className = 'prod-box'

    const img = document.createElement('img')
    img.src = el.image

    const prodTitle = document.createElement('p')
    prodTitle.textContent = el.title

    const text = document.createElement('p')
    text.textContent = el.description

    const content = document.createElement('div')
    content.className = 'content'

    const prodPrice = document.createElement('p')
    prodPrice.textContent = `$${el.price}`

    const priceBox = document.createElement('div')
    priceBox.className = 'price-box'

    prodRow.append(col3)
    col3.append(prodBox)
    content.append(img, prodTitle, text)
    priceBox.append(prodPrice)
    prodBox.append(content, priceBox)

})

document.querySelector('.button').addEventListener('mousemove', (e) =>{

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
      
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)

})