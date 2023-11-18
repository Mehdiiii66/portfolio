const un = document.querySelector(".un")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = un.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.85) {
        un.classList.add('active')
    }
})

const deux = document.querySelector(".deux")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = deux.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.85) {
        deux.classList.add('active')
    }
})

const trois = document.querySelector(".trois")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = trois.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.85) {
        trois.classList.add('active')
    }
})

const python = document.querySelector(".python")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = python.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.80) {
        python.classList.add('active')
    }
})

const html = document.querySelector(".html")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = html.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.80) {
        html.classList.add('active')
    }
})

const c = document.querySelector(".c")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = c.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.80) {
        c.classList.add('active')
    }
})


const naimUn = document.querySelector(".naim-un")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = naimUn.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.85) {
        naimUn.classList.add('active')
    }
})

const naimDeux = document.querySelector(".naim-deux")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = naimDeux.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.85) {
        naimDeux.classList.add('active')
    }
})

const naimTrois = document.querySelector(".naim-trois")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = naimTrois.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.85) {
        naimTrois.classList.add('active')
    }
})

const naimPython = document.querySelector(".naim-python")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = naimPython.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.80) {
        naimPython.classList.add('active')
    }
})

const naimHtml = document.querySelector(".naim-html")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = naimHtml.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.80) {
        naimHtml.classList.add('active')
    }
})

const naimC = document.querySelector(".naim-c")

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewPort = naimC.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewPort).toFixed() - clientHeight * 0.80) {
        naimC.classList.add('active')
    }
})
