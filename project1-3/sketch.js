var runner;
var runnerWalk;
var runnerX;
var runnerY;
var runnerSpeed = 15;
var buildings;
var hand;
var handX;
var handY = 200;
var timer = 0;
var interval = 50; // how long to wait between attack
var attackTime = 50; // length of attack
var youLost = false;

function preload() {
    runner = loadImage("F1.png");
    runnerCycle = loadImage("Inception_Piskel.gif");
    hand = loadImage("hand.png");
    runningLeft = loadImage("runningLeft.gif");
    lost = loadImage("onTheFloor.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    runnerX = width / 2;
    runnerY = height / 2;
    imageMode(CENTER)
}

function draw() {
    background(199, 59, 26)

    var runnerIsRunning = false;
    if (!youLost) {
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
    }
    //collision between runner and hand
    if (collision() &&
        timer < interval &&
        frameCount % 60 > 45) {
        fill(247, 203, 1);
        noStroke();
        rect(handX, 0, handX + hand.width, height - handY);
    }
    if (runnerIsRunning && keyIsDown(RIGHT_ARROW)) {
        image(runnerCycle, runnerX, runnerY);
    } else if (runnerIsRunning && keyIsDown(LEFT_ARROW)) {
        image(runningLeft, runnerX, runnerY);
    } else {
        image(runner, runnerX, runnerY);
    }
    //boundaries
    if (runnerX < 0) {
        runnerX = runnerX + 15;
    }
    if (runnerX > width) {
        runnerX = runnerX - 15;
    }
    if (runnerY < 0) {
        runnerY = runnerY + 15;
    }
    if (runnerY > height) {
        runnerY = runnerY - 15;
    }
    timer++; // increase timer each frame
    // when timer goes above interval
    if (timer > interval && !youLost) {
        if (collision()) {
            youLost = true;
        }
        if (timer > interval + attackTime) {
            // reset timer 
            timer = 0;
            handX = random(width); //hand appearance
        }
    }
    if (youLost) {
        background(247, 203, 1);
        image(lost, runnerX, runnerY);
        image(hand, handX, handY);
    }
}
function collision() {
    if (runnerX - runner.width / 2 < handX + hand.width / 2 &&
        runnerX + runner.width / 2 > handX - hand.width / 2 &&
        runnerY - runner.height / 2 < handY + hand.height / 2 &&
        runnerY + runner.height / 2 > handY - hand.height / 2) {
        return true;
    } else {
        return false;
    }
}