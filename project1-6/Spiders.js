class Spiders extends GameObject {
	constructor(x, y) {
		super(blackWidow, x, y);
		this.speed = 10;
		this.didCollide = false;

	}
		
	update() {
		this.x -= this.speed;
	}

}
