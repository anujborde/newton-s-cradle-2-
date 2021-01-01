const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine
var world

function preload(){

}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


bob1=new Pendulum(300,450,30)

bob2=new Pendulum(360,450,30) 

bob3=new Pendulum(420,450,30)

bob4=new Pendulum (480,450,30)

bob5=new Pendulum(540,450,30)
 
roof=new Roof(420,200,300,20)
rope1=new Rope(bob3.body,roof.body,0,0)
rope2=new Rope(bob2.body,roof.body,-50,0)
rope3=new Rope(bob1.body,roof.body,-100,0)
rope4=new Rope(bob4.body,roof.body,50,0)
rope5=new Rope(bob5.body,roof.body,100,0)

}

function draw() {
    background(0);
    Engine.update(engine);

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
rope1.display();
rope2.display()
rope3.display();
rope4.display();
rope5.display();
  

}





function mouseDragged(){
    Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
    }
    
    