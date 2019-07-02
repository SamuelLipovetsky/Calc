
        
function expand(){
    
   

document.getElementsByClassName('heads-mobile')[0].classList.toggle('active');

   
}
function exp_aux(){
    if(document.getElementsByClassName('heads-mobile')[0].classList.contains('active')==true){

document.getElementsByClassName('heads-mobile')[0].classList.toggle('active');
}
else{
    
}
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
    document.getElementsByClassName("heads-dois")[0].style.height='20px'
    document.getElementsByClassName("heads-dois")[0].style.opacity='0'
    document.getElementsByClassName('logo')[0].style.opacity='0'
    document.getElementsByClassName('icon-mobile')[0].style.opacity='0'

} else {
   
    document.getElementsByClassName("heads-dois")[0].style.height='100px'
    document.getElementsByClassName("heads-dois")[0].style.opacity='1'
    document.getElementsByClassName('logo')[0].style.opacity='1'
    document.getElementsByClassName('icon-mobile')[0].style.opacity='1'

}
}

