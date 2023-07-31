intro = document.getElementById('intro_page');

mode1 = 'dark';

mode = document.getElementById('mode');



function move_up(){
    intro.style.animationName = 'fade';
    intro.style.animationDuration = '5s';
    intro.style.animationFillMode = 'forwards';


    setTimeout(() => {
        document.body.style.overflow = 'scroll'
    }, 2000);

    setTimeout(() => {
        intro.remove()
    }, 5001);
}


function switch_mode(){

    
    if(mode1=='dark'){
        console.log('switched to light');
        intro.style.background = 'linear-gradient(rgb(58, 58, 239),rgb(159, 165, 221))';
        mode.src = 'icons/white2.png';
        mode1 = 'light';
        document.body.style.background = 'linear-gradient(rgb(17, 67, 167),rgb(255, 255, 255))'
        
    }

    else if(mode1=='light'){
        console.log('switched to dark');
        mode1 = 'dark';
        mode.src = 'icons/moon2.png';
        intro.style.background = 'linear-gradient(rgb(93, 22, 93),rgb(27, 1, 27))';
        document.body.style.background = 'linear-gradient(rgb(193, 8, 193),rgb(64, 7, 70))';
    }
  

}

intro.addEventListener('click',move_up);
mode.addEventListener('click',switch_mode);

