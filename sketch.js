const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);
    if(backgroundImg){
       background(backgroundImg)

    }
    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
    var jasondata = await response.json()
    var date = jasondata.datetime;
    var hour = date.slice(11,13);
    if(hour>=06&&hour<=08){
    bg = 'sunrise1.png'
    }else if(hour>08&&hour<=10){
        bg = 'sunrise2.png'
    }else if(hour>10&&hour<=12){
        bg = 'sunrise3.png'
    }else if(hour>12&&hour<=14){
        bg = 'sunrise4.png'
    }else if(hour>14&&hour<=16){
        bg = 'sunrise5.png'
    }else if(hour>16&&hour<=18){
        bg = 'sunrise9.png'
    }else if(hour>18&&hour<=20){
        bg = 'sunrise10.png'
    }else if(hour>20&&hour<=22){
        bg = 'sunrise11.png'
    }else if(hour>22&&hour<=24){
        bg = 'sunrise12.png'
    }
    backgroundImg = loadImage(bg);
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
