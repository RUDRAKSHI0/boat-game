var background,backgroundImage;
var boat,boatImage;
var helicopter1,helicopter1Image;
var helicopter2,helicopter2Image;
var helicopter3,helicopter3Image;
var helicopter4,helicopter4Image;
var man1,man1Image;
var man2,man2Image;
var man3,man3Image;
var enemyman,enemymanImage;
var fish1,fish1Image;
var fish2,fish2Image;
var score1;
var PLAY=1;
var gamestate;

function preload(){
  backgroundImage = loadImage("background.png");
  boatImage=loadImage("boat1.png")
  helicopter1Image=loadImage("helicopter.png");
   helicopter2Image=loadImage("helicopter.png");
   helicopter3Image=loadImage("helicopter.png");
  helicopter4Image=loadImage("helicopter.png");
  man1Image=loadImage("man.png");
   man2Image=loadImage("man.png");
   man3Image=loadImage("man.png");
  enemymanImage=loadImage("enemy man.png")
  boomsound=loadSound("boom.mp3")
  chew=loadSound("Chewing (mp3cut.net).mp3")
  fish1Image=loadImage("fish.png")
  fish2Image=loadImage("fish (1).png")
}

function setup(){
  createCanvas(600,600);
  
  background = createSprite(250,200,60,60);
  background.addImage(backgroundImage);
  background.scale = 4;
 
  
  boat = createSprite(300,330,12,12);
  boat.addImage(boatImage);
  boat.scale = 0.1;
  
  man1Group= new Group();
  man2Group= new Group();
  man3Group= new Group();
  enemymanGroup= new Group();
  fish1Group=new Group();
  fish2Group=new Group();
  score1 = 0;
start = createButton("START");
start.size(79,50);
start.position(260,200);
start.style("font-size","20px");
start.style("color:pink")
start.style('background-color','green');

  
}
function draw(){ 
start.mousePressed(play);
  background.velocityX=-2
if(background.x<0){
   background.x = background.width/2; 
}
  if(gamestate==PLAY){
     start.hide();

chopper1();
chopper2();
chopper3();
chopper4();
scaryfish();
fish();
if(man1Group.isTouching(boat)){
     man1Group.destroyEach();
  score1=score1+12;
}
if(man2Group.isTouching(boat)){
     man2Group.destroyEach();
    score1=score1+8;
}
if(man3Group.isTouching(boat)){
     man3Group.destroyEach();
    score1=score1+6;
}
  if(enemymanGroup.isTouching(boat)){
     enemymanGroup.destroyEach();
    boomsound.play();
      score1=score1-1;
}
  if (fish1Group.isTouching(man1Group))
  {
    man1Group.destroyEach();
        chew.play();
       score1=score1-2;
  }
  if(fish1Group.isTouching(man2Group)) {
     man2Group.destroyEach();
       chew.play();
     score1=score1-1;
  }
  if  (fish1Group.isTouching(man3Group)){
      man3Group.destroyEach();
       chew.play();
     score1=score1-6;
  }
  if (fish2Group.isTouching(man1Group))
  {
    man1Group.destroyEach();
       chew.play();
     score1=score1-4;
  }
  if(fish2Group.isTouching(man2Group)) {
     man2Group.destroyEach();
       chew.play();
     score1=score1-5;
  }
  if  (fish2Group.isTouching(man3Group)){
      man3Group.destroyEach();
       chew.play();
     score1=score1-2;
  }
  
  }
boat.x=World.mouseX;
  
  
  
drawSprites();
  textSize(30); 
fill("red");
text("Score: "+score1,470,80);
  } 
function play(){
    gamestate=PLAY;
    score=0;
    start.visible=false;
}  
  
function chopper1(){

     var rand = random([1511,871,631])
     if(frameCount%rand==0){
     helicopter1 = createSprite(600,30,12,12);
     helicopter1.addImage(helicopter1Image);
     helicopter1.scale = 0.6
     helicopter1.velocityX=-5;
     console.log(helicopter1.x);
     parachute1();
}
}
function chopper2(){

    var rand = random([1601,290,67])
    if(frameCount%rand==0){
    helicopter2 = createSprite(600,30,12,12);
    helicopter2.addImage(helicopter2Image);
    helicopter2.scale = 0.6
    helicopter2.velocityX=-5;
    console.log(helicopter2.x);
    parachute2(); 
}
}
function chopper3(){

    var rand = random([3751,475,591])
    if(frameCount%rand==0){
    helicopter3 = createSprite(600,30,12,12);
    helicopter3.addImage(helicopter3Image);
    helicopter3.scale = 0.6
    helicopter3.velocityX=-5;
    console.log(helicopter3.x);
    parachute3();
}
}
function chopper4(){

    var rand = random([576,171,591])
    if(frameCount%rand==0){
    helicopter4 = createSprite(600,30,12,12);
    helicopter4.addImage(helicopter4Image);
    helicopter4.scale = 0.6
    helicopter4.velocityX=-5;
    console.log(helicopter4.x);
    enemy();
}
}
function parachute1 (){
  
      man1 = createSprite(600,30,12,12);
      man1.addImage(man1Image);
      man1.scale = 0.6;
      man1.velocityX=-5;
      man1Group.add(man1);
      setTimeout(drop1,random([2500,3000,3500]));
}
function parachute2 (){
  
    man2 = createSprite(600,30,12,12);
    man2.addImage(man2Image);
    man2.scale = 0.6;
    man2.velocityX=-5;
    man2Group.add(man2);
    setTimeout(drop2,random([2100,3300,3600]));
}
function parachute3(){
      man3 = createSprite(600,30,12,12);
      man3.addImage(man3Image);
      man3.scale = 0.6;
      man3.velocityX=-5;
      man3Group.add(man3);
      setTimeout(drop3,random([2700,3100,3800]));
}

function enemy(){
  enemyman = createSprite(600,30,12,12);
  enemyman.addImage(enemymanImage);
    enemyman.scale = 0.2;
     enemyman.velocityX=-5;
 enemymanGroup.add(enemyman);
  setTimeout(drop4,random([2700,3100,3800]));
  enemyman.lifetime=180;
   
}
function scaryfish(){
  if(frameCount%100==0){
 fish1 = createSprite(300,400,12,12);
  fish1.addImage(fish1Image);
   fish1.scale = 0.2;
   fish1.velocityX=-5;
 fish1Group.add(fish1);
  }
}
function fish(){
  if(frameCount%100==0){
 fish2 = createSprite(300,450,12,12);
  fish2.addImage(fish2Image);
   fish2.scale = 0.2;
   fish2.velocityX=5;
 fish2Group.add(fish2);
  }
}

function drop1(){
   man1.velocityX=0;
   man1.velocityY=4;
}
function drop2(){
   man2.velocityX=0;
    man2.velocityY=4;
}
function drop3(){
   man3.velocityX=0;
    man3.velocityY=4;
}
function drop4(){
  enemyman.velocityX=0;
    enemyman.velocityY=4;
}
