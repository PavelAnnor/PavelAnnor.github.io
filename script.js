intro = document.getElementById('intro_page');

function move_up(){
    
    intro.style.animationName = 'fade';
    intro.style.animationDuration = '5s';
    intro.style.animationFillMode = 'forwards';

    setTimeout(() => {
        intro.remove()
    }, 5001);
    

}

intro.addEventListener('click',move_up)

