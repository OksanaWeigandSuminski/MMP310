var speaker;
var speakerJump;
var speakerX;
var speakerY;
var speakerSpeed = 3;
var speakerIsWalking = false;
function preload(){
    speaker = loadImage ("speaker.gif");
    speakerWalk = loadImage ("speakerWalks.gif");
}

function setup (){
    createCanvas(1500,1000);
    speakerX = width/2;
    speakerY = height/2;
    imageMode(CENTER)
}

function draw (){
    background(220)

    if (keyIsDown(RIGHT_ARROW)) {
        speakerX += speakerSpeed;
        speakerIsWalking = true;
    }
    if (keyIsDown(LEFT_ARROW)) {
        speakerX -= speakerSpeed;
        speakerIsWalking = true;
    }
    if (keyIsDown(UP_ARROW)) {
        speakerX -= speakerSpeed;
        speakerIsWalking = true;
    }
    if (keyIsDown(DOWN_ARROW)) {
        speakerX += speakerSpeed;
        speakerIsWalking = true;
    }

    if (speakerIsWalking) {
        image(speakerWalk, speakerX, speakerY);
    }else {
        image(speaker, speakerX, speakerY);
    }
}