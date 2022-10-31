// Selectores Globales
const iconHam = document.querySelector('#icon-ham')
const iconClose = document.querySelector('#icon-close')
const menuOculto = document.querySelector('#menu-oculto')
const gridCards = document.querySelector('.grid-cards')
const gridBanks = document.querySelector('.grid-bank')

const datosCards = [
    {
        id: 1,
        by: 'By Claire Robinson',
        titulo: 'Receive money in any currency with no fees',
        texto: `The world is getting smaller and we’re becoming more mobile. So why should you be 
                forced to only receive money in a single …`,
        imagen: '../images/image-currency.jpg'
    },
    {
        id: 2,
        by: 'By Wilson Hutton',
        titulo: 'Treat yourself without worrying about money',
        texto: `Our simple budgeting feature allows you to separate out your spending and set 
                realistic limits each month. That means you …`,
        imagen: '../images/image-restaurant.jpg'
    },
    {
        id: 3,
        by: 'By Wilson Hutton',
        titulo: 'Take your Easybank card wherever you go',
        texto: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                while you’re abroad. We’ll even show you …`,
        imagen: '../images/image-plane.jpg'
    },
    {
        id: 4,
        by: 'By Claire Robinson',
        titulo: 'Our invite-only Beta accounts are now live!',
        texto: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                It’s easy to request an invite through the site ...`,
        imagen: '../images/image-confetti.jpg'
    }
]
const datosBank = [
    {
        id: 1,
        imagen: '../images/icon-online.svg',
        titulo: 'Online Banking',
        texto: `Our modern web and mobile applications allow you to keep track of your finances 
                wherever you are in the world.`
    },
    {
        id: 2,
        imagen: '../images/icon-budgeting.svg',
        titulo: 'Simple Budgeting',
        texto: `See exactly where your money goes each month. Receive notifications when you’re 
                close to hitting your limits.`
    },
    {
        id: 3,
        imagen: '../images/icon-onboarding.svg',
        titulo: 'Fast Onboarding',
        texto: `We don’t do branches. Open your account in minutes online and start taking control 
                of your finances right away.`
    },
    {
        id: 4,
        imagen: '../images/icon-api.svg',
        titulo: 'Open API',
        texto: `Manage your savings, investments, pension, and much more from one account. Tracking 
                your money has never been easier.`
    }
]
document.addEventListener('DOMContentLoaded', () => {
    generarBank()
    generarCards()
})

iconHam.addEventListener('click', () => {
    menuOculto.classList.add('mostrar')
    iconHam.classList.add('d-none')
    iconClose.classList.remove('d-none')
    document.body.style.overflow = 'hidden'
})

iconClose.addEventListener('click', () => {
    menuOculto.classList.remove('mostrar')
    iconHam.classList.remove('d-none')
    iconClose.classList.add('d-none')
    document.body.style.overflow = 'scroll'
})

function generarBank(){
    datosBank.forEach(bank => {
        const divBank = document.createElement('DIV')
        const imgBank = document.createElement('IMG')
        imgBank.src = `${bank.imagen}`
        imgBank.alt = `${bank.titulo}`
        const h3Bank = document.createElement('H3')
        h3Bank.classList.add('sub-heading')
        h3Bank.textContent = `${bank.titulo}`
        const textoBank = document.createElement('P')
        textoBank.textContent = `${bank.texto}`
        textoBank.classList.add('text-center')
        divBank.appendChild(imgBank)
        divBank.appendChild(h3Bank)
        divBank.appendChild(textoBank)
        gridBanks.appendChild(divBank)

    })
}

function generarCards(){
    datosCards.forEach(card => {
        const divCard = document.createElement('DIV')
        divCard.classList.add('contenedor','article-card')
        const imgCard = document.createElement('IMG')
        imgCard.src = `${card.imagen}`
        imgCard.alt = `${card.titulo}`
        const divInfoCard = document.createElement('DIV')
        divInfoCard.classList.add('contenedor','info-card')
        const spanCard = document.createElement('SPAN')
        spanCard.textContent = `${card.by}`
        const h4Card = document.createElement('H4')
        h4Card.classList.add('sub-heading-2')
        h4Card.textContent = `${card.titulo}`
        const pCard = document.createElement('P')
        pCard.textContent = `${card.texto}`
        divCard.appendChild(imgCard)
        divCard.appendChild(divInfoCard)
        divInfoCard.appendChild(spanCard)
        divInfoCard.appendChild(h4Card)
        divInfoCard.appendChild(pCard)
        gridCards.appendChild(divCard)
    })
}
