
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let my_engine;
let my_world;
var ball,ground;
function setup()
{
  createCanvas(400,400);
  my_engine= Engine.create();
  my_world = my_engine.world;

  var ball_options = {
    isStatic:true
  };

  ball = Bodies.circle(30,90,40,ball_options)
  World.add(my_world,ball);

  var ball2_options = {
   restitution : 0.9,
   frictionAir:0.01
  };

  ball2 = Bodies.circle(250,90,40,ball2_options)
  World.add(my_world,ball2);

  var ground_options = {
    isStatic : true
  };

  ground = Bodies.rectangle(100,380,400,20,ground_options);
  World.add(my_world,ground);

}

function draw() 
{
  background(51);
  Engine.update(my_engine);
  ellipse(ball.position.x,ball.position.y,40);
  ellipse(ball2.position.x,ball2.position.y,40);
  rect(ground.position.x,ground.position.y, 400,20);

}

