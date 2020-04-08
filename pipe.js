export class Pipe {

    constructor(p5) {
        this.top = p5.random(p5.height / 2);
        this.spacing = 100;
        this.x = p5.width;
        this.w = 20;
        this.speed = 2;
    }

    show(p5) {
        p5.fill(255);
        p5.rect(this.x, 0, this.w, this.top);
        p5.rect(this.x, this.top + this.spacing, this.w, p5.height);
    };
    update() {
        this.x -= this.speed;
    };

    hits(bird) {
        return bird.x >= this.x  && bird.x <= this.x + this.w
            && bird.y > this.top && bird.y > this.top + this.spacing;
    }
}
