var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,fairyAni,fairyVoice

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairy.png");
	fairyAni = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play; 
	//create fairy sprite and add animation for fairy
	fairy = createSprite(400,400);
	fairy.addAnimation(fairyImg);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if(keyCode === RIGHT_ARROW){
		fairy.addAnimation(fairyAni);
		fairy.changeAnimation(fairyAni);
		fairy.x = fairy.x + 2;
	}
	if(keyCode === LEFT_ARROW){
		fairy.addAnimation(fairyAni);
		fairy.changeAnimation(fairyAni);
		fairy.x = fairy.x - 2;
	}
}
