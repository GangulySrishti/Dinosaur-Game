var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");
var bird1 = document.getElementById("bird1");
var bird2 = document.getElementById("bird2");

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(function (){
            dino.classList.remove("jump");
        }, 300);
    }   
}

document.addEventListener("keypress", jump);

let isALive = setInterval(function (){
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let birdleft1 = parseInt(window.getComputedStyle(bird1).getPropertyValue("left"));
    let birdleft2 = parseInt(window.getComputedStyle(bird2).getPropertyValue("left"));
    if((cactusleft<50 && cactusleft>0 && dinotop>=140) || (birdleft1<50 && birdleft1>0 && dinotop>=140) || (birdleft2<50 && birdleft2>0 && dinotop>=110 && dinotop<150)){
        alert("Game Over!");
    }
},10);
