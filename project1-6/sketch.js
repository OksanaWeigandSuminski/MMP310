/*
	
    project 1-6
    objected oriented version
    classes and objects
	
*/
var runner, runnerCycle, runningLeft, runnerJump
var hand, blackWidow, lost, hand2, spider

var spiders = [];
var spiderNumber;

var player;
var level = 1;
var score = 100;
var display;

var groundY = 200;
var GRAVITY = 2; // acceleration 2 pix per frame
var runnerYSpeed = 2;

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
    imageMode(CENTER);
    blackWidow.delay(2000)
    var spiderNumber = random(8, 12);
    for (let i = 0; i < spiderNumber; i++) {
        let x = width / 2 + i * width + random(width / 2);
        let y = height - groundY;
        let spider = new Spiders(x, y);
        console.log(spider);
        spiders.push(spider);
    }

    player = new Player(width / 2, height / 2);
    hand = new Hand(7);
    hand2 = new Hand(8);
    display = new Display();
}

function draw() {
    //game outcome
    if (player.lives >= 0) {
        game();
    }
    else if (player.lives < 0) {
        lose();
    }
    else if (score >= 200 && player.lives >= 0 ) {
        win();
    }
}

function game() {
    background(199, 59, 26);
    /* player keyboard events */
    player.isRunning = false;
    if (keyIsDown(RIGHT_ARROW) && player.x < width) {
        player.x += player.speed;
        player.isRunning = true;
    }
    if (keyIsDown(LEFT_ARROW) && player.x > 0) {
        player.x -= player.speed;
        player.isRunning = true;
    }
    // if (keyIsDown(UP_ARROW) && player.y > 0) {
    //     player.y -= player.speed;
    //     player.isRunning = true;
    //     console.log(player.y)
    // }
    // if (keyIsDown(DOWN_ARROW) && player.y < height) {
    //     player.y += player.speed;
    //     player.isRunning = true;
    // }

    for (let i = 0; i < spiders.length; i++) {
        let spider = spiders[i];

        if (level == 2) {
            spider.draw();
            spider.update();
        }


        if (spider.collide(player)) {
            lose();
            // spider collision here
            //if runner gets past last spider
            if (i == spiders.length - 1 && player.x > spider.x) {
               win();
            } 

        }
    }
    // apply gravity
    if (player.y < height - 300) {
        runnerYSpeed += GRAVITY;
    } else {
        runnerYSpeed = 0;
        player.isJumping = false;
    }
    // 32 is a space key
    if (!player.isJumping && keyIsDown(32)) {
        runnerYSpeed = -40;
        player.isJumping = true;
    }
    player.y += runnerYSpeed;


    player.draw();
    hand.draw();
    hand.update();
    display.draw();

    // hand2.draw();
    // hand2.update();
    if (hand.collide(player) && !hand.isColliding) {
        hand.isColliding = true;
        score -= 10;
        if (score < 100) {
            player.lives--;
        }
    } else if (!hand.collide(player) && hand.isColliding) {
        hand.isColliding = false;

    }
    if (score > 150 && player.lives > 0) {
        level = 2;
    }
}
function win() {
    textSize(100);
    fill("white");
    textFont("Comic Sans Ms");
    textAlign(CENTER, CENTER);
    text("You win!", width / 2, height / 2);
    text("Hit M to Play Again", width / 2, height / 2 + 100);
    // m key
    if (keyIsDown(77)) {
        location.reload();
    }
}
function lose() {
    textSize(100);
    fill("white");
    textFont("Comic Sans Ms");
    textAlign(CENTER, CENTER);
    text("You lost!", width / 2, height / 2);
    text("Hit R to Try Again", width / 2, height / 2 + 100);
    // m key
    if (keyIsDown(82)) {
        location.reload();
    }
}
