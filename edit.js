var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var height = [150,140,130,120], sum = 0
for (var i = 0; i < height.length; i++){
  sum += height[i]
}
average = sum/height.length
console.log (average)

function preload(){
    trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided=loadImage("trex_collided.png");
    groundImage=loadImage("ground2.png")
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex=createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale=0.5; 
}

function draw(){
    trex.velocityY=trex.velocityY + 0.8
    if (ground.x < 0) {
        ground.x=ground.width / 2;
    }
    drawSprites();
}