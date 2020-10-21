/*
	
    project 1-6
    objected oriented version
    classes and objects
	
*/
var runner, runnerCycle, runningLeft, runnerJump
var hand, blackWidow, lost, hand2, spider

var spiderPositions = [];
var spiderNumber;
var main;

var player;
var level = 1;
var score = 100;
var display;

function preload() {
    runner = loadImage("F1.png");
    runnerCycle = loadImage("Inception_Piskel.gif");
    handImg = loadImage("hand.png");
    runningLeft = loadImage("runningLeft.gif");
    lost = loadImage("onTheFloor.png");
    blackWidow = loadImage("blackWidow.gif");
    runnerJump = loadImage("F1.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // textSize(100);
    // fill("white");
    // textFont("Comic Sans Ms");
    // textAlign(CENTER, CENTER);
    imageMode(CENTER);
    //blackWidow.delay(1000)

    player = new Player(width / 2, height / 2);
    hand = new Hand(7);
    hand2 = new Hand(8);
    main = new Map();
    display = new Display();
    spider = new Spiders();

}

function draw() {
    background(199, 59, 26);
    /* player keyboard events */
    player.isRunning = false;
    if (keyIsDown(RIGHT_ARROW)) {
        player.x += player.speed;
        player.isRunning = true;
    }
    if (keyIsDown(LEFT_ARROW)) {
        player.x -= player.speed;
        player.isRunning = true;
    }
    if (keyIsDown(UP_ARROW)) {
        player.y -= player.speed;
        player.isRunning = true;
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.y += player.speed;
        player.isRunning = true;
    }
    //boundaries
    if (player.x < 0) {
        player.x = player.x + 15;
    }
    if (player.x > width) {
        player.x = player.x - 15;
    }
    if (player.y < 0) {
        player.y = player.y + 15;
    }
    if (player.y > height) {
        player.y = player.y - 15;
    }

    player.draw();
    hand.draw();
    hand.update();
    display.draw();
    // spider.update();

    score++; // if runner is in a csene

    // hand2.draw();
    // hand2.update();
    if (hand.collide(player)) {

        score -= 10;
        console.log(score);
    }
    if (score < 100) {
        player.lives--;
        console.log(player.lives);
    }
    if (score > 200 && player.lives > 0) {
        //spiders appear
        spider.update();
    }
    if (score > 0) {
        //reset lives
        player.lives ++;
    }

}
