const character = document.querySelector('#character');
const block = document.querySelector('#block');
let score = document.querySelector('#score');
let counter = 0;
let startFlag = false;
block.style.animation = "none";

function jump() {
   if(startFlag) {
    character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate");
        counter++;
         score.innerHTML= "Your Score is : "+(counter-1);
    }
        ,500)
   }
}

function start() {
    startFlag = true;
    block.style.animation = "block 1s infinite";
}

const checkDead = setInterval(function(){
    if(startFlag) {
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        if(blockLeft< 20 && blockLeft> 0 && characterTop >= 130) {
            block.style.animation = "none";
            counter = 0;
            alert("Sorry! You lost the Game :(");
            startFlag = false;
        }
    }
},10);
