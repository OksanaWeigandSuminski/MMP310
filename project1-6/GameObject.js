class GameObject{
    constructor(img, x, y) {
		this.img = img;
		this.x = x;
		this.y = y;
		this.width = img.width;
        this.height = img.height;
	}
    draw() {
        rect(this.x - this.width / 3,this.y - this.height / 3,this.width/3*2, this.height/3*2);
		image(this.img, this.x, this.y);
	}
    collide(other) {
        if (this.x - this.width / 3 < other.x + other.width / 3 &&
            this.x + this.width / 3 > other.x - other.width / 3 &&
            this.y - this.height / 3 < other.x + other.height / 3 &&
            this.y + this.height / 3 > other.x - other.height / 3) {
            return true;
        } else {
            return false;
    
        }
    }
}