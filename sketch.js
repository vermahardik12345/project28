
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var tree1;
var mango1,mango2,mango3,mango4,mango5;
var ground1;
var stone1;
var boy1;
var tree2;
function preload()
{
boy1=loadImage("boy.png");
tree2=loadImage("tree.png");	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;
	
	mango1=new mango(1100,250,55);	
    mango2=new mango(850,250,55);	
	mango3=new mango(900,200,55);	
    mango4=new mango(800,150,55);	
    mango5=new mango(1030,250,55);	
	mango6=new mango(780,250,55);	
	mango7=new mango(1000,150,55);	
	mango8=new mango(810,300,55);	
	mango9=new mango(980,250,55);	
	mango10=new mango(910,250,55);	
	mango11=new mango(900,200,55);	
	mango12=new mango(920,140,55);	
	mango13=new mango(850,200,55);	



    ground1=new ground(600,580,1200,10);
	stone1=new stone(75,425,40);
	launcher1 = new launcher(stone1.body,{x:80,y:415});

	
  
}



function draw(){
	background("white")
	push();
	fill("CYAN");
	textSize(15);
	text("PRESS SPACE TO AGAIN THROW",200,100)
	pop();
	Engine.update(engine);
	image(tree2,650,85,500,500);
	
	
	image(boy1,50,345,180,300);
	stone1.display();
	mango1.display();  
    mango2.display();  
    mango3.display();  
    mango4.display();  
    mango5.display();  
	mango6.display();  
	mango7.display();  
	mango8.display();  
	mango9.display();
	mango10.display();
    mango11.display();
    mango12.display();
    mango13.display();

	launcher1.display();

	ground1.display(); 
	
	
	detectollision(stone1,mango1);
	detectollision(stone1,mango2);
	detectollision(stone1,mango3);
	detectollision(stone1,mango4);
	detectollision(stone1,mango5);
	detectollision(stone1,mango6);
	detectollision(stone1,mango7);
	detectollision(stone1,mango8);
	detectollision(stone1,mango9);
	detectollision(stone1,mango10);
	detectollision(stone1,mango11);
	detectollision(stone1,mango12);
	detectollision(stone1,mango13);
	
  
	
	


  
	
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher1.fly();
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
  
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r)
   {
	 Matter.Body.setStatic(lmango.body , false);
   } 
  }
  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:75, y:245}) 
	  launcher1.attach(stone1.body);
	  launcher1.display();
	}
}
