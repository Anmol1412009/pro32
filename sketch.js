const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create gckgroundImg( )etBa her
    getBackgroundImg()
} 

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
  
    // add condition to check if any background image is there to add
    

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response  = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responsejson= await response.json()
    var dati= responsejson.datetime
    var hour= dati.slice(11,13)
  
    if(hour>=04 && hour<=06){
  bg = "sunrise1.png"

    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png"
      
          }else if(hour>=23 && hour<=00){
            bg = "sunrise10.png"
          
              }else if(hour>=00 && hour<=03){
                bg = "sunrise11.png"
              
                  }else{
                    bg = "sunrise11.png"
                  
                      }

                      backgroundImg=loadImage(bg)

}
