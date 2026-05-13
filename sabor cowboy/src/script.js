window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')

    if(window.scrollY > 0){
        nav.classList.add('sc')
    }else{
        nav.classList.remove('sc')
    }
})

function navTo(id){
    const section = document.getElementById(id)
    section.scrollIntoView({behavior: 'smooth'})
}