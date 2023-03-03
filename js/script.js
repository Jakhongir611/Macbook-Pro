let doc = document
let body = document.body

let btn_1 = doc.querySelectorAll('.btn_clr')[0]
let btn_2 = doc.querySelectorAll('.btn_clr')[1]

let price = doc.querySelector('.macbook_price')

let img = doc.querySelector('img')

let span = doc.querySelector('.macbook_color')

let cat_prc = doc.querySelector('.catalog_price')


let img1 = "./img/mac2.jpg"
let img2 = "./img/mac1.jpg"



let change_img1 = () => {
    img.src = img2
    span.textContent = 'White'
    btn_1.classList.add('clr_btn')
    btn_2.classList.remove('clr_btn')
}

let change_img2 = () => {
    img.src = img1
    span.textContent = 'Space Grey'
    btn_2.classList.add('clr_btn')
    btn_1.classList.remove('clr_btn')
}

btn_2.addEventListener('click', change_img2)

btn_1.addEventListener('click', change_img1)

let prc1 = doc.querySelectorAll('.price')[0]
let prc2 = doc.querySelectorAll('.price')[1]
let prc3 = doc.querySelectorAll('.price')[2]
let prc4 = doc.querySelectorAll('.price')[3]

let butn1 = () => {
    price.textContent = '$1,999'
    prc1.classList.add('price_hv')
    prc2.classList.remove('price_hv')
    prc3.classList.remove('price_hv')
    prc4.classList.remove('price_hv')
}
let butn2 = () => {
    price.textContent = '$2,199'
    prc2.classList.add('price_hv')
    prc1.classList.remove('price_hv')
    prc3.classList.remove('price_hv')
    prc4.classList.remove('price_hv')
}
let butn3 = () => {
    price.textContent = '$2,599'
    prc3.classList.add('price_hv')
    prc1.classList.remove('price_hv')
    prc2.classList.remove('price_hv')
    prc4.classList.remove('price_hv')
}
let butn4 = () => {
    price.textContent = '$3,199'
    prc4.classList.add('price_hv')
    prc1.classList.remove('price_hv')
    prc2.classList.remove('price_hv')
    prc3.classList.remove('price_hv')
}

prc1.addEventListener('click', butn1)
prc2.addEventListener('click', butn2)
prc3.addEventListener('click', butn3)
prc4.addEventListener('click', butn4)


let mod_prc = doc.querySelector('.macbook_price')
let modal = doc.querySelector('.modal')
let cros = doc.querySelector('.x')

let func1 = ()=>{
    modal.classList.toggle('not_active')
    body.style.overflow = 'hidden'
}

let func2 = ()=>{
    modal.classList.toggle('not_active')
    body.style.overflow = 'auto'
}

mod_prc.addEventListener("click", func1)
cros.addEventListener("click", func2)

let burger = doc.querySelector('.burger')
let menu = doc.querySelector('.menu')
let burger_x = doc.querySelector('.burger_x')

burger.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    body.style.overflow = 'hidden'
    burger.classList.add('brg')
})

burger_x.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    body.style.overflow = 'auto'
    burger.classList.remove('brg')
})
