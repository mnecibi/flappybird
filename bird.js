export class Bird {
    constructor(p5) {
        this.gravity = .6;
        this.lift = -20;
        this.velocity = 0;
        this.y = p5.width / 2;
        this.x = 64;
    }

    show(p5) {
        p5.fill(255);
        p5.ellipse(this.x, this.y, 30, 30);
    };
    up() {
        this.velocity += this.lift;
    };
    
    update(p5) {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
        if (this.y > p5.height) {
            this.y = p5.height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.gravity = 0;
        }
    };
}
