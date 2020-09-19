var speaker;
var speakerWalk;
var speakerX;
var speakerY;
var speakerSpeed = 3;
var buildings;
//let timer = 0;
var hand;

var bgBuildingsX = [50, 800, 1700];
var bgBuildingsY = [400, 200, 100];
function preload(){
    speaker = loadImage("F1.png");
    speakerWalk = loadImage("Inception_Piskel.gif");
    buildings = loadImage("largeBuildings.png");
    hand = loadImage("hand.png");
}

function setup (){
    createCanvas(1920, 1080);
    speakerX = width/2;
    speakerY = height/2;
    imageMode(CENTER)
    img = image(hand, 300, 400)
    setInterval(attack, 2000);
}

function draw (){
    background(199,59,26)
    
    for (let i = 0; i < bgBuildingsX.length; i ++){
        image(buildings, bgBuildingsX[i], bgBuildingsY[i]);
    }
   
    var speakerIsWalking = false;

    if (keyIsDown(RIGHT_ARROW)) {
        speakerX += speakerSpeed;
        speakerIsWalking = true;
    }
    if (keyIsDown(LEFT_ARROW)) {
        speakerX -= speakerSpeed;
        speakerIsWalking = true;
    }
    if (keyIsDown(UP_ARROW)) {
        speakerY -= speakerSpeed;
        speakerIsWalking = true;
    }
    if (keyIsDown(DOWN_ARROW)) {
        speakerY += speakerSpeed;
        speakerIsWalking = true;
    }

    if (speakerIsWalking) {
        image(speakerWalk, speakerX, speakerY);
    }else {
        image(speaker, speakerX, speakerY);
    }
    // var x = random(width);
    // // var y = random(height);
    // var y = 500;
    // if (millis() >=2000+timer){
    //     image(hand, x, y);
    //     timer = millis();
    // }
    act(attack);
       
}

function attack(){
    img = image(hand, random(width), 500);
}
