class Spiders extends GameObject {
	constructor(x, y) {
		super(blackWidow, x, y);
		//this.speed = 20;
		this.blackWidow = blackWidow;
		this.spiderPositions = []; // reset all spider positions
		this.spiderNumber = spiderNumber;
		this.runner = runner;
		this.run = runnerCycle;
	}
	drawText() {
		textSize(100);
		fill("white");
		textFont("Comic Sans Ms");
		textAlign(CENTER, CENTER);
		text("You WIN!", width / 2, height / 2);
	}
	// spider() {
	// 	collision with spiders
	// 	if (this.runner.x - this.run.width / 4 < x + this.blackWidow.width / 4 &&
	// 		this.runner.x + this.run.width / 4 > x - this.blackWidow.width / 4 &&
	// 		this.runner.x - this.run.height / 4 < y + this.blackWidow.height / 4 &&
	// 		this.runner.x + this.run.height / 4 > y - this.blackWidow.height / 4) {

	// 		text("You LOST!",  width / 2, height / 2);

	// 	}
	// }	

	update() {
		this.x -= this.speed;

		this.spiderNumber = random(8, 12);
		for (let i = 0; i < this.spiderNumber; i++) {
			// add an x position for a new spider half a canvas away from one another + random value
			this.spiderPositions.push(random(width / 2, width) + i * width / 2);
		}
		for (let i = 0; i < this.spiderPositions.length; i++) {
			let x = this.spiderPositions[i];
			// spider(); // draw spider and detect player collision
			if (this.runner.x - this.run.width / 4 < x + this.blackWidow.width / 4 &&
				this.runner.x + this.run.width / 4 > x - this.blackWidow.width / 4 &&
				this.runner.x - this.run.height / 4 < y + this.blackWidow.height / 4 &&
				this.runner.x + this.run.height / 4 > y - this.blackWidow.height / 4) {
				text("You LOST!", width / 2, height / 2);
			}
			this.spiderPositions[i] -= 10;
			//if runner gets past last spider
			if (i == this.spiderPositions.length - 1 && this.run.x > x) {
				drawText();
			}
		}
	}

}
