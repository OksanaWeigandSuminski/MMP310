class Hand extends GameObject{
    constructor(speed){
        super(handImg, random(width), -handImg.height/3);
        this.speed = speed;
        this.isColliding = true;
    }
    update(){
        this.y += this.speed;

        if(this.y > height/3 || this.y < -handImg.height/3){
            this.speed *= -1;
        }
        if(this.y < -handImg.height/3){
            this.x = random(width);
        }
        if (this.y > height/3 && !hand.isColliding){
            score += 10;
          }
    }

}