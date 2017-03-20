//Stanford start for project 2

// DEFINE variables here
var player;
var player2;

function setup() {
//Create canvas
 createCanvas(800,600);
//INSTANTIATE variables here
player=createSprite(500,300,67,67);
player2=createSprite(300,300,67,67);

//Set friction which improves feel of the control
player.friction=.98
player2.friction=.98
}

function draw() {
    //add a nice background color
background(200,200,215);
//UPDATE variables here
drawSprites();

player.bounce(player2);
    if(keyDown(37)){
//Put what you want to happen when left is pressed in here
player.addSpeed(.2,180);
}

if(keyDown(39)){
//Put what you want to happen when right is pressed in here
player.addSpeed(.2,0);
}
if (keyDown(38)) {
player.addSpeed(.2,270);
}
if (keyDown(40)){
  player.addSpeed(.2,90);
}
    if(keyDown(65)){
player2.addSpeed(.2,180);
}
if(keyDown(68)){
  player2.addSpeed(.2,0);
}
if(keyDown(87)){
  player2.addSpeed(.2,270);
  }
  if(keyDown(83)){
    player2.addSpeed(.2,90);
  }
}
