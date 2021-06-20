// scroll to top 
const scrolltp = document.querySelector("#scrolltp");
scrolltp.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
})
window.addEventListener('scroll',()=>{
    if(window.scrollY >=700){
        scrolltp.getElementsByClassName.opacity =1;
    }else{
        scrolltp.getElementsByClassName.opacity =0;
    }
})

// theme

const themeToggle = document.querySelector('.checkbox');
const body =document.querySelector('body');
const darkmode= localStorage.getItem('dark');

if(darkmode){
    body.classList.add('dark');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change',()=>{
     body.classList.toggle('dark')

     if(body.classList.contains('dark')){
         localStorage.setItem('dark','active');
     }else{
         localStorage.removeItem('dark');
     }
})