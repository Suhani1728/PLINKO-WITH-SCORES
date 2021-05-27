const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particle;
var plinkos =[];
var divisions=[];
var divisionsHeight=300;
var line;

var score=0;
var count=0;

var gameState= "PLAY";

function preload(){

}

function setup() {
  
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,600,800,20);


  for(var i = 0; i <= width ; i = i+80){
console.log("division")
    divisions.push(new Division(i, height-divisionsHeight/2,10,divisionsHeight));
   };

  for(var j = 75; j <= width ; j = j+50){

    plinkos.push(new Plinko(j,75));
   };

   for(var j = 50; j <= width-10; j = j+50){

    plinkos.push(new Plinko(j,175));
   };

   for(var j = 75; j <= width ; j = j+50){

    plinkos.push(new Plinko(j,275));
   };

  

Engine.run(engine);

}

function draw() {
  rectMode(CENTER)
  background(0);  

 
  drawSprites();
textSize (35);
text("Score :"+score,20,40)

textSize (20)
text("500",30,320)
text("500",100,320)
text("500",190,320)
text("500",260,320)
text("100",340,320)
text("100",420,320)
text("100",510,320)
text("200",580,320)
text("200",670,320)
text("200",750,320)


  /*if(frameCount % 20 === 0){
    particles.push(new Particle(random(0,width),10,10));
  }

  for (var h =0; h<particles.length;h++){
    particles[h].display();
  }

 /*for(var j=0; j < plinkos.length; j++){
    plinkos[j].display();
  } */

ground.display();
if(gameState=="END"){
  background("black")
  fill ("red")
  textSize(100)
  text ("Game Over",200,400)

}
for(var j=0; j < plinkos.length; j++){
  plinkos[j].display();
}



if(particle!=null){

    particle.display();

         if(particle.body.position.y>700)
         {

          if(particle.body.position.x<300){
            score=score+500;
            particle=null;
            if(count>=5)gameState="END"
          }

          else if(particle.body.position.x<600 && particle.body.position.x>301){
            score=score + 100;
            particle=null;
            if(count>=5)gameState="END";
          }
          
          else if (particle.body.position.x<900 && particle.body.position.x>601){
            score = score+200;
            particle=null;
            if(count>=5)gameState="END";
          }
  
      }

}


for(var n=0; n<=divisions.length-1; n++){
  divisions[n].display();
}

}

function mousePressed(){
  console.log("enter")
  if(gameState!=="END"){
    count++
    particle=new Particle(mouseX,50,10,10)
  }
}