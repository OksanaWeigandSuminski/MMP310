
class Player extends GameObject {
	constructor(x, y) {
		super(runner, x, y);
		
		this.runner = runner;
		this.run = runnerCycle;
		this.jump = runnerJump;

		this.isRunning = false;
		this.isJumping = false;

		this.speed = 10;
		this.lives = 3;
		this.runnerYSpeed = 2;
	}

	draw() {
		rect(this.x - this.width / 3,this.y - this.height / 3,this.width/3*2, this.height/3*2);
		if (this.isJumping) {
			image(this.jump, this.x, this.y);
		} else if (this.isRunning) {
			image(this.run, this.x, this.y);
		} else {
			image(this.runner, this.x, this.y);
		}
	
	}
}