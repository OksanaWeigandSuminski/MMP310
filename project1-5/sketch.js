var runner;
var runnerX;
var runnerY;
var runnerMainX;
var runnerMainY;
var runnerSpeed = 15;
var hand;
var handX;
var handY = 200;
var timer = 0;
var interval = 150; // how long to wait between attack
var attackTime = 50; // length of attack
var youLost = false;
var blackWidow;
var runnerJump;
//game physics
var runnerIsJumping = false;
var groundY = 200;
var GRAVITY = 2; // acceleration 2 pix per frame
var runnerYSpeed = 2;

var spiderPositions = []; // add spider x values here
var scene = "main"; // game, win, lose

function preload() {
    runner = loadImage("F1.png");
    runnerCycle = loadImage("Inception_Piskel.gif");
    hand = loadImage("hand.png");
    runningLeft = loadImage("runningLeft.gif");
    lost = loadImage("onTheFloor.png");
    blackWidow = loadImage("blackWidow.gif");
    runnerJump = loadImage ("F1.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    runnerX = width / 2;
    runnerY = height / 2;
    imageMode(CENTER)
    blackWidow.delay(1000)
    // scene = 'game';
    // setupGame();
}
function draw(){
    //scene manager
    if (scene == "main"){
        main();
    }
    else if (scene == "game"){
        game();
    }
    else if (scene == "win"){
        win();
    }
    else if (scene == "lose"){
        lose();
    }
}
//scene functions
function setupMain(){
    runnerX = runnerMainX;
    runnerY = runnerMainY; 
    scene = "main";
}

function main() {
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
    if (runnerX - runner.width / 2 < handX + hand.width / 2 &&
        runnerX + runner.width / 2 > handX - hand.width / 2 &&
        runnerY - runner.height / 2 < handY + hand.height / 2 &&
        runnerY + runner.height / 2 > handY - hand.height / 2 &&
        timer < interval &&
        frameCount % 60 > 30) {
        // fill(247, 203, 1);
        // rect(handX, 0, handX + hand.width, height);
        image(hand, handX, handY)
        //put image of the hand instead
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
        if (
            runnerX - runner.width / 2 < handX + hand.width / 2 &&
            runnerX + runner.width / 2 > handX - hand.width / 2 &&
            runnerY - runner.height / 2 < handY + hand.height / 2 &&
            runnerY + runner.height / 2 > handY - hand.height / 2) {
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
        textSize(100);
        fill("white")
        textFont("Comic Sans Ms")
        textAlign(CENTER, CENTER)
        text("Hit Enter to Play", width/2, height/2)
        // enter event
        if (keyIsDown(ENTER)){
            setupGame();
        }
    }
}
function setupGame(){
    // save runner's map position
    runnerMainX = runnerX;
    runnerMainY = runnerY;
    // move runer to game ground
    runnerX = 250;
    runnerY = height - 400;
    // add spiders
    spiderPositions = []; // reset all spider positions
    var spiderNumber = random(8,12);
    for (let i = 0; i < spiderNumber; i++){
        // add an x position for a new spider half a canvas away from one another + random value
        spiderPositions.push(random(width/2, width) + i * width/2);
    }
    scene = "game";
}
function game(){
    background ("darkblue");
    noStroke();
    fill('darkgreen');
    rect(0, height - groundY, width, groundY);
    //jumping and falling
    
    // apply gravity
    if (runnerY < height - 400){
        runnerYSpeed += GRAVITY;
    } else {
        runnerYSpeed = 0;
        runnerIsJumping = false;
    }
    // 32 is a space key
    if (!runnerIsJumping && keyIsDown(32)){
        runnerYSpeed = -40;
        runnerIsJumping = true;
    } 
    runnerY += runnerYSpeed;
    if (runnerIsJumping){
        image(runnerJump, runnerX, runnerY);
    } else {
        image(runnerCycle,runnerX, runnerY);
    }

    for (let i = 0; i < spiderPositions.length; i++){
        let x = spiderPositions[i];
        spider(x); // draw spider and detect player collision
        spiderPositions[i] -= 15;
        //if runner gets past last spider
        if (i == spiderPositions.length - 1 && runnerX > x){
            scene = 'win';
        }
    }
}
function win(){
    textSize(150);
    fill("white");
    text("You win!", width/2, height/2);
    textSize(80);
    text("Hit M to Return to Map", width/2, height/2+100);
    // m key
    if (keyIsDown(77)){
        setupMain();
    }
}
function lose(){
    textSize(150);
    fill("white");
    text("You lost!", width/2, height/2);
    textSize(80);
    text("Hit R to Try Again", width/2, height/2+100);
    // m key
    if (keyIsDown(82)){
        setupGame();
    }
}
function spider(x){
    let y = height - groundY;
    image(blackWidow, x, y);
    //collision
    if (runnerX - runnerCycle.width / 3 < x + blackWidow.width / 3 &&
        runnerX + runnerCycle.width / 3 > x - blackWidow.width / 3 &&
        runnerY - runnerCycle.height / 3 < y + blackWidow.height / 3 &&
        runnerY + runnerCycle.height / 3 > y - blackWidow.height / 3){
        // change the scene
        scene = 'lose';

        }
}