const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  ground= new Ground(200,380,400,20)
  ground2= new Ground(200,20,400,20)
  var ok_options = {
    restitution:1
   }
  ball = Bodies.circle(300,35,7,ok_options)  
  
  World.add(world,ball)

  boxok= new Box(200,100,30,30)
  boxnotok= new Box(185,69,30,30)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  ground.display()
  ground2.display()
  boxok.display()
  boxnotok.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,7)
  
}
