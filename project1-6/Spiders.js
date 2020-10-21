class Spiders extends GameObject {
	constructor(x, y) {
		super(blackWidow, x, y);
		this.speed = 20;
		this. spiderPositions = []; // reset all spider positions
		this.spiderNumber = spiderNumber;
	}

	update() {
		this.x -= this.speed;
		   
		this.spiderNumber = random(8, 12);
		for (let i = 0; i < this.spiderNumber; i++) {
			// add an x position for a new spider half a canvas away from one another + random value
			this.spiderPositions.push(random(width / 2, width) + i * width / 2);
		}
	}
}
