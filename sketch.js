var wall, bullet ,speed , weight ;
var damage, thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 50);
  bullet.shapeColour="white";
  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColour=(80,80,80);
  speed=random(223,321);
  thickness=random(22,83);
  bullet.velocityX=speed;
  weight=random(30,52);
  damage=0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityX=0;
  }
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/thickness*thickness*thickness;

  if(damage>10){
    bullet.shapeColour="green";
  }
  if(damage<10){
    bullet.shapeColour="red";
  }
  hasCollided();
  drawSprites();
}
function hasCollided(bullet, wall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
