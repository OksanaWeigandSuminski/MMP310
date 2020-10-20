class Spiders extends GameObject {
	constructor(x, y) {
		super(blackWidow, x, y);
		this.speed = 20;
	}

	update() {
		this.x -= this.speed;
	}
}
