const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3;
var G;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 200, 50, 50);
    box2 = new Box(200, 300, 50, 50);
   G = new Ground(200, 380, 400, 20);   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
 G.display();
}
