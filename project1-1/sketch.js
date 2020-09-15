var speaker;
var speakerWalk;
var speakerToLeft;
var speakerX;
var speakerY;
var speakerSpeed = 3;
function preload(){
    speaker = loadImage ("speaker500.gif");
    speakerWalk = loadImage ("speakerWalk.gif");
    speakerToLeft = loadImage("speakerWalkLeft.gif")
}

function setup (){
    createCanvas(800,600);
    speakerX = width/2;
    speakerY = height/2;
    imageMode(CENTER)
}

function draw (){
    background(255, 255, 255)

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

    if (speakerIsWalking && keyIsDown(RIGHT_ARROW)) {
        image(speakerWalk, speakerX, speakerY);
    }else if(speakerIsWalking && keyIsDown(LEFT_ARROW)) {
        image(speakerToLeft, speakerX, speakerY);
    }else {
        image(speaker, speakerX, speakerY);
    }
}