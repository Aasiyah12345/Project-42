var iss,spacecraft,hasdocked=false

function preload(){
  issImage=loadImage("iss.png")
  spacecraft1=loadImage("spacecraft1.png")
  spacecraft2=loadImage("spacecraft2.png")
  spacecraft3=loadImage("spacecraft3.png")
  spacecraft4=loadImage("spacecraft4.png")
  spacebg=loadImage("spacebg.jpg")

}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400,100,40,60)
  iss.addImage(issImage)
  iss.scale=0.5
  spacecraft=createSprite(160,300,40,50)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale=0.3

}

function draw() {
  background(spacebg);  
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(!hasdocked){

  
  if(keyDown("up")){
spacecraft.y=spacecraft.y-2
  }
  if(keyDown("down")){
    spacecraft.addImage(spacecraft2)
  }
  if(keyDown("right")){
    spacecraft.addImage(spacecraft4)
    spacecraft.x=spacecraft.x+3
  }
  if(keyDown("left")){
    spacecraft.addImage(spacecraft3)
    spacecraft.x=spacecraft.x-3 
  }
}
if(spacecraft.x<=370&&spacecraft.y<=240){
  hasdocked=true
  textSize(20)
   fill("white")
   text("dockingSuccesful",200,300)
   console.log("dockingSuccesful")
}

  drawSprites();
}
