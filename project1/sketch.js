var speaker;
var speakerWalk;
var speakerX;
var speakerY;
var speakerSpeed = 3;
//var speakerIsWalking = false;
function preload(){
    speaker = loadImage ("speaker500.gif");
    speakerWalk = loadImage ("speakerW500.gif");
}

function setup (){
    createCanvas(800,600);
    speakerX = width/2;
    speakerY = height/2;
    imageMode(CENTER)
}

function draw (){
    background(220)

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
}