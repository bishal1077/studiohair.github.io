// show Navbar 
const nav = document.querySelector('.nav-menu');
const toggle = doucument.querySelector('.nav-toggle');
toggle.onclick = function(){
    nav.classList.toggle('show-nav')
}

// Remove NavBar 

const navLink = doucument.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = doucument.querySelector('nav-menu')
    navMenu.classList.remove('show-nav')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//change active Color 
const linkColor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(link){
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))

//change header background when scroll Down 

function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scroll >= 200){
    scrollHeader.classList.add('scroll-header')
    }
    else{
        scrollHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);



