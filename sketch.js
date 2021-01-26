var garden, gardenImg;
var cat,cat1Img,cat2Img,cat3Img,cat4Img;
var mouse, mouse1Img,mouse2Img,mouse3Img, mouse4Img;


function preload() {
    //load the images here
    cat1Img = loadImage("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat4Img = loadImage("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
    mouse1Img = loadImage("images/mouse1.png")
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4Img = loadImage("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
      
        garden=createSprite(500,400);
        garden.addImage(gardenImg);

        cat=createSprite(800,650);
        cat.addImage(cat1Img);
        cat.scale=.2;
       
        mouse=createSprite(200,650);
        mouse.addImage(mouse1Img);
        mouse.scale=.2;
        cat.addAnimation("catRunning", cat2Img);
        mouse.addAnimation("mouseTeasing", mouse2Img);
        cat.addAnimation("catLastImage", cat4Img);
        mouse.addAnimation("mouseLastImage", mouse4Img);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  
    keyPressed();
    if(cat.x === mouse.x+200){
        cat.velocityX = 0;
        cat.changeAnimation("catLastImage")
        mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
   
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;  
    cat.changeAnimation("catRunning");
    mouse.changeAnimation("mouseTeasing");
  
     
      
  }

}


