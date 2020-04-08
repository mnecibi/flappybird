import p5 from "p5/lib/p5.min";

import { Bird } from "./bird.js";
import { Pipe } from "./pipe.js";

let bird;
let pipes = [];

let sketch = (p5) => {    
    p5.setup = () =>{
        p5.createCanvas(400,600);
        bird = new Bird(p5);
        pipes.push(new Pipe(p5));
    }

    p5.draw = () =>{
        p5.background(0);

        for(let pipe of pipes) {
            pipe.show(p5);
            pipe.update(p5);

            if(pipe.hits(bird)) {
                console.log("You loose!");
                p5.noLoop();
            }

            if(pipe.x < -pipe.w) {
                console.log("Off Screen");
                pipes = pipes.filter(p => p !== pipe);
            }
        }

        bird.show(p5);
        bird.update(p5);

        if (p5.frameCount % 100 === 0) {
            pipes.push(new Pipe(p5));
        }
    }

    p5.keyPressed = () => {
        if(p5.key = ' ') {
            console.log('SPACE');
            bird.up();
        }
    }
}

new p5(sketch);;