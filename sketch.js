//The global variables
  var backgroundPNG, playerPNG, stonePNG, floorPNG;
  var player, floor;
  var blockGroup
  var gameState = "play";
  var score = 0
   

function preload(){
  //preload the images
    backgroundPNG = loadImage("sprites/background.png");
    stonePNG = loadImage("sprites/stone.png")
}

function setup(){
  //creates a canvas with the same size as the screen
    createCanvas(displayWidth, displayHeight-112);
    
  //the player sprite
    player = new Player()

  //the dispenser that creates blocks
    blockGroup = new Group();

  //the ground sprite
    ground = new Ground()
}

function draw(){
  //the background so that it doesn't look weird
    background(0);
    image(backgroundPNG, 0, 0, displayWidth, displayHeight);

  console.log(displayHeight-112)

    if(gameState === "play"){
      
      //gives the player the x and y coordinates of the mouse
        player.display();

      //creates stone blocks from the sky
        createBlock();
      
      //makes you lose the game (refer js/ground.js)
        ground.isTouching(blockGroup);

      //increases points (refer js/player.js)
        player.isTouching(blockGroup);

    } else if(gameState === "end"){
      //stops the blocks from falling through the ground
        blockGroup.setVelocityYEach(0);
    }
   
    drawSprites();
    
  //creates the score on the top
    textSize(50)
    stroke("white")
    fill("white")
    text("Score: " + score, 50, 50);
}

//block mama
  function createBlock(){
    var interval = 60 - score
    var y = (displayHeight-112)%5
    if (frameCount % interval === 0) {
      var block = createSprite(600,y,40,10);
      block.x = Math.round(random(10,displayWidth - 100));
      block.addImage(stonePNG);
      block.scale = 0.25;
      block.velocityY = 20 + score;
      blockGroup.add(block);
    }
  }
