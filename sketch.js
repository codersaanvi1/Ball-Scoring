
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var options = {
		restitution : 1.0

	}


	ball = Bodies.circle(200,30,20,options);
	World.add(world, ball);





	Engine.run(engine);

	ground=new Ground(width/2,690,width,20)
	leftside= new Ground(1160,620,20,120)
	rightside= new Ground(1350,620,20,120)
	



  
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipse(ball.position.x, ball.position.y, 20)

  ground.display();
  leftside.display();
  rightside.display();
 
  
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.06,y:-0.06})
	}
}









