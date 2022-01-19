let div5 = document.querySelector('.div5');
window.onscroll = function(){
    let value = scrollY;
    div5.style.top = value + 'px';
}