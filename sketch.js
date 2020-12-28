var bg,bgimg;
var gameState=0;

function preload(){
    bgimg=loadImage("BG1.png");
}
function setup(){
    canvar=createCanvas(1400,650)
    if(gameState === 0){
        bg=createSprite(700,350,1200,650);
        bg.addImage(bgimg);
        bg.scale=2.69;
    }
}
function draw(){
    background("green");
    drawSprites();
}