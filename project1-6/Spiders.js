class Spiders extends GameObject {
	constructor(x, y) {
		super(blackWidow, x, y);
		this.speed = 20;
		this. spiderPositions = []; // reset all spider positions
		this.spiderNumber = spiderNumber;
	}
	drawText() {
		textSize(100);
		fill("white");
		textFont("Comic Sans Ms");
		textAlign(CENTER, CENTER);
		text("You WIN!",  width / 2, height / 2);
	}

	update() {
		this.x -= this.speed;
		   
		this.spiderNumber = random(8, 12);
		for (let i = 0; i < this.spiderNumber; i++) {
			// add an x position for a new spider half a canvas away from one another + random value
			this.spiderPositions.push(random(width / 2, width) + i * width / 2);
		}
		for (let i = 0; i < this.spiderPositions.length; i++) {
			let x = this.spiderPositions[i];
			spider(x); // draw spider and detect player collision
			this.spiderPositions[i] -= 10;
			//if runner gets past last spider
			if (i == this.spiderPositions.length - 1 && player.x > x) {
				drawText();
			}	
		}
	}
}
