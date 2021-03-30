var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  bullet= createSprite(50,280,50,50)
  wall = createSprite(1500,200,60,30)

  speed= random(223,321);
  weight = random(30,52);
  
  bullet.velocityx = speed;
}

function draw() {
  background("black");  
  bullet.display();
  wall.display();
  thickness.display();
  ;
  if(wall.x - bullet.x < (bullet.width + wall. width)/2) {
     bullet.velocityX = 0;
     var defoemation = 0.5 * weight * speed * speed/22509;
     if(deformation>180){
    bullet.shapecolour = "red";
     }
     if (deformatioln<180 && deformation> 100){
       bullet.shapecolour = "yellow";
     }
     if (deformation<100){
       bullet.shapecolour = "green"
     }
    }
   
   
  drawSprites();
 
}
  