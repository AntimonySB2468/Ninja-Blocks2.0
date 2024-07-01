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



function setup(){
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    runner = Runner.create();

    ground = new Ground(width/2, height, width, 10, 127);
    ceiling = new Ground(width/2, 0, width, 10, 127);
    leftWall = new Ground(0, height/2, 10, height, 127);
    rightWall = new Ground(width, height/2, 10, height, 127);

    

    ninja = new Rectangle(width/2, 100, 50, 50, 127);

    

    Composite.add(world, ground);
    Runner.run(runner, engine);
}

function draw(){
    background(51);    
    
    if (keyIsDown(65)){
        Body.setVelocity(ninja.body, {x: -5, y: ninja.body.velocity.y});
    }
    if (keyIsDown(68)){
        Body.setVelocity(ninja.body, {x: 5, y: ninja.body.velocity.y});
    }

    
    if (keyIsDown(87) === true){
        if (Collision.collides(ninja.body, ground.body) != null){

            if (Collision.collides(ninja.body, ground.body).collided){

                Body.setVelocity(ninja.body, {x: ninja.body.velocity.x, y: -10});
                
            }
        }
        
        if (Collision.collides(ninja.body, leftWall.body) != null){

            if (Collision.collides(ninja.body, leftWall.body).collided){

                Body.setVelocity(ninja.body, {x: ninja.body.velocity.x, y: -10});
                
            }
        }

        if (Collision.collides(ninja.body, rightWall.body) != null){

            if (Collision.collides(ninja.body, rightWall.body).collided){

                Body.setVelocity(ninja.body, {x: ninja.body.velocity.x, y: -10});
                
            }
        }
        
        
    }

    rightWall.show();
    leftWall.show();
    ground.show();
    ceiling.show();
    ninja.show();
}