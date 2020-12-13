var form,game,player;
var database;
var playerCount,gameState = 0;
var allPlayers;
var cars , car1 , car2 , car3 , car4;

function setup(){
    createCanvas(displayWidth , displayHeight);
    database = firebase.database();
    
}

function draw(){
    background("white");
   

    drawSprites();
}
