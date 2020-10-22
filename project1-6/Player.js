
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
		if (this.isJumping) {
			image(this.jump, this.x, this.y);
		} else if (this.isRunning) {
			image(this.run, this.x, this.y);
		} else {
			image(this.runner, this.x, this.y);
		}
	
	}
}