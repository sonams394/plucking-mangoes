const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var boy;
var m1,m2,m3,m4,m5,m6;
var world;


function setup() {
    createCanvas(800,600);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    m1 = new mango(450,570,10)
    m2 = new mango(420,570,10)
    m3 = new mango(470,570,10)
    m4 = new mango(500,540,10)
    m5 = new mango(410,545,10)
    m6 = new mango(400,545,10)

    Engine.run(engine);

}

function draw(){
    rectMode(CENTER);
    background("white");

    m1.display();
}