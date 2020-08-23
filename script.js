const character = document.querySelector('#character');
const block = document.querySelector('#block');
let score = document.querySelector('#score');
let counter = 0;

function jump() {
   character.classList.add("animate");
   setTimeout(() => {
       character.classList.remove("animate");
       counter++;
        score.innerHTML= "Your Score is : "+(counter-1);
   }
       ,500)
}

function start() {
    window.location.reload();
}

const checkDead = setInterval(function(){
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft< 20 && blockLeft> 0 && characterTop >= 130) {
        block.style.animation = "none";
        counter = 0;
        alert("Sorry! You lost the Game :(");
    }
},10);