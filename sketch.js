// module aliases
var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Body = Matter.Body,
    Vector = Matter.Vector,
    Collision = Matter.Collision;

var engine;
var world;
var runner;

// sprites
var ninja;
var ground;
var leftWall;
var rightWall;
var ceiling;

var score = 0;
var blocks = [];


function setup(){
    createCanvas(400, 400);
    
    engine = Engine.create();
    world = engine.world;
    runner = Runner.create();

    ground = new Ground(width/2, height, width, 10, 127);
    ceiling = new Ground(width/2, 0, width, 10, 127);
    leftWall = new Ground(0, height/2, 10, height, 127);
    rightWall = new Ground(width, height/2, 10, height, 127);

    ninja = new Rectangle(width/2, 100, 25, 25, 127);

    Composite.add(world, ground);
    Runner.run(runner, engine);
}

function createBlocks(difficulty){
    var pos = Math.floor(Math.random()*1000);
    var place;
    
    if (Math.random() > difficulty){
        place = true
    }
    if (pos < 390 && pos > 10 && place){
        blocks.push(new Rectangle(pos, 10, 50, 50, 255));
    }

    
}


function draw(){
    background(51);    

    textSize(20);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Score: " + score, 300, 50);
    
    if (keyIsDown(65)){
        Body.setVelocity(ninja.body, {x: -5, y: ninja.body.velocity.y});
    }
    if (keyIsDown(68)){
        Body.setVelocity(ninja.body, {x: 5, y: ninja.body.velocity.y});
    }

    
    if (keyIsDown(87) === true){
        if (ninja.isTouching(ground.body) || ninja.isTouching(leftWall.body) || ninja.isTouching(rightWall.body)){
            Body.setVelocity(ninja.body, {x: ninja.body.velocity.x, y: -10});
        }
    }
    createBlocks(0.95);

    rightWall.show();
    leftWall.show();
    ground.show();
    ceiling.show();
    ninja.show();
    
    for (var i = 0; i < blocks.length; i++){
        block = blocks[i]
        block.show();
        if (ninja.isTouching(block.body)){
            block.remove();
            blocks.splice(i, 1);
            score++;
        } 
    }
}