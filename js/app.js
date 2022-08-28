// const faqs = document.querySelectorAll('.faq_wrapper')

// faqs.forEach((faq) => {
//     faq.addEventListener('click', () => {
//         faqs.forEach((faq) => {
//             faq.classList.add('faq_active')
//         })
//         faq.classList.toggle('faq_active')
//     })
// })

// const ben_cards = document.querySelectorAll('.demo_details_card')

// ben_cards.forEach((item) => {
//     item.addEventListener('click', () => {
//         ben_cards.forEach((item) => {
//             item.classList.remove('demo_details_card_active')
//         })
//         item.classList.add('demo_details_card_active')
//     })
// })

// Toggle Mobile Menu
const menuBtn = document.querySelector('.menu-bar')
const nav = document.querySelector('.nav')

menuBtn.addEventListener('click', () => {
    // nav.classList.toggle(' nav_active')
    
    if(menuBtn.classList.contains('fa-xmark')) {
        menuBtn.classList.add('fa-bars')
        menuBtn.classList.remove('fa-xmark')
    }else{
       

        menuBtn.classList.remove('fa-bars')
        menuBtn.classList.add('fa-xmark')
    }
})

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav_active')

   
})