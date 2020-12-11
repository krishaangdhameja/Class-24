const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box1, box2, box3, box4, box5, pig1, pig2, log1, log2, log3, log4, bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,590,1200,20);
    box1 = new Box (880,570,50,50);
    box2 = new Box(1040,570,50,50);
    pig1 = new Pig(960,570);
    log1 = new Log(960,540,220,PI/2);
    box3 = new Box(880,500,50,50);
    box4 = new Box(1040,500,50,50);
    pig2 = new Pig(960,500);
    log2 = new Log(960,470,220,PI/2);
    box5 = new Box(960,430,50,50);
    log3 = new Log(920,430,120,60);
    log4 = new Log(1000,430,120,-60);
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    
    
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}