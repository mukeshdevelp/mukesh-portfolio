const menu = document.querySelector('#sideMenu');
const navbar = document.querySelector('nav')
const navLinks = document.querySelector('nav ul')

function openMenu(){
    menu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    menu.style.transform = 'translateX(16rem)';
}

//for backgound
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navbar.classList.add('bg-white' , 'bg-opacity-50' , 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navbar.classList.remove('bg-white' , 'bg-opacity-50' ,  'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-trasparent');

    }else{
        navbar.classList.remove('bg-white' , 'bg-opacity-50' , 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navbar.classList.remove('bg-white' , 'bg-opacity-50' ,  'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-trasparent');

    }
})

//toggle features

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark');
}else{
    document.documentElement.classList.remove('dark');
}


function toogleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme= 'dark'

    }else{
        localStorage.theme = 'light'
    }
}


//for navbar