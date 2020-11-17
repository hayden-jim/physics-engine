const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,50,ground_options);
  World.add(world, ground);

  
  var ball_options = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,60,20,ball_options);    
  World.add(world,ball);

  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(70,45,67);
Engine.update(engine);

  rectMode(CENTER);
   rect(ground.position.x, ground.position.y,400,20); 

   ellipseMode(RADIUS)
   fill("green")
   ellipse(ball.position.x,ball.position.y,20,20)
}