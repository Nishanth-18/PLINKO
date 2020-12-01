const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var ground;
var divisionHeight = 300;
var score=0;
function setup() {
  createCanvas(800,800);
 // createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world

  for (var k =0; k<= width; k = k + 80)
  {
    divisions.push(new Division (k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
}

function draw() {
  background("black"); 
  textSize(20)

  Engine.update(engine);

  if(frameCount%60===0)
  {
    particles.push(new Particle(random(100,300),10,10))
    score++;
  }
  for (var i = 0; i< plinkos.length; i++)
  {
    plinkos[i].display();
  }
  
  

  for (var j = 0; j < particles .length; j++)
  {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }


  
  drawSprites();
}