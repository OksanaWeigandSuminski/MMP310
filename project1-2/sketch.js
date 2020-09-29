var runner;
var runnerWalk;
var runnerX;
var runnerY;
var runnerSpeed = 9;
var buildings;
var hand;
var handX;
var timer = 0;
var interval = 100; // how long to wait between attack
var attackTime = 50; // length of attack

var bgBuildingsX = [50, 800, 1700];
var bgBuildingsY = [400, 200, 100];
function preload(){
    runner = loadImage("F1.png");
    runnerCycle = loadImage("Inception_Piskel.gif");
    buildings = loadImage("largeBuildings.png");
    hand = loadImage("hand.png");
    runningLeft = loadImage("runningLeft.gif");
}

function setup (){
    createCanvas(windowWidth, windowHeight);
    runnerX = width/2;
    runnerY = height/2;
    imageMode(CENTER)
}

function draw (){
    background(199,59,26)
    
    for (let i = 0; i < bgBuildingsX.length; i ++){
        image(buildings, bgBuildingsX[i], bgBuildingsY[i]);
    }
   
    var runnerIsRunning = false;

    if (keyIsDown(RIGHT_ARROW)) {
        runnerX += runnerSpeed;
        runnerIsRunning = true;
    }
    if (keyIsDown(LEFT_ARROW)) {
        runnerX -= runnerSpeed;
        runnerIsRunning = true;
    }
    if (keyIsDown(UP_ARROW)) {
        runnerY -= runnerSpeed;
        runnerIsRunning = true;
    }
    if (keyIsDown(DOWN_ARROW)) {
        runnerY += runnerSpeed;
        runnerIsRunning = true;
    }

    if (runnerIsRunning && keyIsDown(RIGHT_ARROW)) {
        image(runnerCycle, runnerX, runnerY);
    }else if(runnerIsRunning && keyIsDown(LEFT_ARROW)) {
        image(runningLeft, runnerX, runnerY);
    }else {
        image(runner, runnerX, runnerY);
    }

    timer++; // increase timer each frame
    // when timer goes above interval
    if (timer > interval) {
        image(hand, handX, 200);
        if (timer > interval + attackTime) {
        // reset timer 
        timer = 0;
        handX = random(width); //hand appearance
        }
    }
}