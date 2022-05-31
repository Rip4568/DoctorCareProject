window.addEventListener('scroll',onScroll)

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScoll()
}

function showNavOnScroll() {
    if(Math.round(scrollY) > 0){
        navigation.classList.add("scroll")
        //console.log(`rolando dados: ${Math.round(scrollY)}`) 
    } else {
        navigation.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScoll() {
    /* console.log(scrollY) */
    if(Math.round(scrollY) > 550){
        /* definir em que ponto do eixo y será acionado o botão de rolagem pro topo */
        backToTopButton.navigation.classList.add("scroll")
        //console.log(`rolando dados: ${Math.round(scrollY)}`) 
    } else {
        backToTopButton.navigation.classList.remove("scroll")
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

function TESTE() {
    alert("Função chamada com sucesso!")
}

ScrollReveal({
    origin: 'top',
    disctance: '30px',
    duration: 700,
}).reveal(
    `#home',
    '#home img, 
    #home .stats, 
    #services,
    #services header, 
    #services .card,
    #about,
    #about header,
    #about .content`)
