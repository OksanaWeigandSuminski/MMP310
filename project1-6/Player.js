
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
		if (this.isRunning) {
			image(this.run, this.x, this.y);
		} else if (this.isJumping) {
			image(this.jump, this.x, this.y);
		} else {
			image(this.runner, this.x, this.y);
		}
			// apply gravity
			if (this.run.y < height - 300) {
				this.runnerYSpeed += GRAVITY;
			} else {
				this.runnerYSpeed = 0;
				this.isJumping = false;
			}
			// 32 is a space key
			if (!this.isJumping && keyIsDown(32)) {
				this.runnerYSpeed = -40;
				this.isJumping = true;
			}
			this.run.y += this.runnerYSpeed;
			// if (this.isJumping) {
			// 	image(runnerJump, runnerX, runnerY);
			// } else {
			// 	image(runnerCycle, runnerX, runnerY);
			// }
	
	}
}