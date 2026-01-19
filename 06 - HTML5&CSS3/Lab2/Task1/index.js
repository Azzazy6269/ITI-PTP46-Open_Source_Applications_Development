let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let pauseBtn = document.getElementById('pause');
let rectangle = document.getElementById('rectangle');
let started = false;
let savedTime = 0;




startBtn.addEventListener('click', () => {
    rectangle.style.animationPlayState = 'running';
    started = true;
});

pauseBtn.addEventListener('click', () => {
    rectangle.style.animationPlayState = 'paused';
});
/*
rectangle.addEventListener('mouseover', () => {
    rectangle.style.animationPlayState = 'paused';
    const currentTransform = window.getComputedStyle(rectangle);
    if (started) {
            rectangle.style.transform = currentTransform ;
           rectangle.style.animation ='move-scaled 4s linear infinite';

    } 
});

rectangle.addEventListener('mouseout', () => {
    if(started){
    rectangle.style.animation = 'move 4s linear infinite';
    rectangle.style.animationPlayState = 'running';
    rectangle.style.transform = '';
    }
    
});
*/

rectangle.addEventListener('mouseover', () => {
    if (started) {
        const currentTransform = window.getComputedStyle(rectangle).transform;
        const currentcolor = window.getComputedStyle(rectangle).backgroundColor;
        const animations = rectangle.getAnimations();
        if (animations.length > 0) {
            savedTime = animations[0].currentTime; 
        }
        rectangle.style.animationPlayState = 'paused';
        if (started) {
            rectangle.style.backgroundColor = currentcolor;
            rectangle.style.transform = currentTransform + ' scale(1.2)';
        }
        rectangle.style.animation = 'none';
    }
});

/*
rectangle.addEventListener('mouseout', () => {
    if (started) {
        rectangle.style.animation = 'move 4s linear infinite';
        rectangle.style.transform = '';
        rectangle.style.animationPlayState = 'running';
    }
});
*/
rectangle.addEventListener('mouseout', () => {
    const currentTransform = window.getComputedStyle(rectangle).transform;
    const currentcolor = window.getComputedStyle(rectangle).backgroundColor;
    const currentx = window.getComputedStyle(rectangle).backgroundColor;
    if (started) {
        rectangle.style.backgroundColor = currentcolor;
        rectangle.style.transform = currentTransform + ' scale(1)';
        rectangle.style.animation = 'move 4s infinite';
        rectangle.style.animationDelay = `-${savedTime / 1000}s`;
        rectangle.style.animationPlayState = 'running';
    }
});

stopBtn.addEventListener('click', () => {
    rectangle.style.animation = 'none';   
    rectangle.offsetHeight;               
    rectangle.style.animation = 'move 4s linear infinite';
    rectangle.style.animationPlayState = 'paused';
    started = false;
});
