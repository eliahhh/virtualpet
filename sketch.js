var dog, happydog, database, foods, foodstock;

function preload()
{
  dog = loadImage("images/dogImg.png");
  hdog = loadImage("images/dogImg1.png");
}

function setup() {

  database = firebase.database();
  createCanvas(500, 500);
  
  dog1 = createSprite(350,305,10,10);
  dog1.addImage(dog);
  dog1.scale = 0.15;

  foodstock = database.ref('food');
  foodstock.on("value", readStock);
  
}


function draw() {  

  background("white");
if(keyWentDown(UP_ARROW)){

  writeStock(foods);
  dog1.addImage(hdog);
}
  drawSprites();
  stroke("black");
  text("Food Remaining: "+foods,170,200);
  //add styles here

}

function readStock(data){

  foods = data.val();

}

function writeStock(x){

  if(x<=0){

    x = 0;
    
  }
  else{

    x = x-1;
  }

  database.ref('/').update({
    food:x
  })
}
