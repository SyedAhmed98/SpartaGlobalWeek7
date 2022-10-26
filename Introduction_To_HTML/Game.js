class Ballon {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = random(25, 40);
        this.vx = 0;
        this.vy = 0;

        this.col = color(random(255), random(255), random(255));
        this.popped = false;
    }

    blowAway() {
        //calculate the blow away force
        let d = dist(this.x, this.y, mouseX, mouseY);
        let force = d < height / 2 ? -10 / (d * d) : 0;

        //apply the force to the existing velocity
        this.vx += force * (mouseX - this.x);
        this.vy += force * (mouseY - this.y);

        //also add some friction to take energy out of the system
        this.vx *= 0.95;
        this.vy *= 0.95;

        //update the position
        this.x += this.vx;
        this.y += this.vy;
    }

    checkBounds() {
        //make balloon wrap to the other side of the canvas
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    checkToPop() {
        if (!this.popped && dist(this.x, this.y, mouseX, mouseY) < this.r) {
            this.popped = true;
            let currScore = Number(document.getElementById("score").innerHTML);
            currScore++;
            document.getElementById("score").innerHTML = currScore;

            // popSfx.play();
        }
    }
}

let ballonArr = [];
const _numBalloons = 10;
// let popSfx;

// function preload() {
//     soundFormats("wav");
//     popSfx = loadSound("./Resources/pop");
// }

function setup() {
    let canvas = createCanvas(1280, 720);
    canvas.parent("gameContainer");

    for (i = 0; i < _numBalloons; i++) {
        ballonArr[i] = new Ballon();
    }
}

function draw() {
    //a nice sky blue background
    background(135, 206, 235);

    for (i = 0; i < _numBalloons; i++) {
        fill(ballonArr[i].col);
        circle(ballonArr[i].x, ballonArr[i].y, ballonArr[i].r);

        ballonArr[i].checkBounds();
        ballonArr[i].blowAway();
        ballonArr[i].checkToPop();

        if (ballonArr[i].popped) {
            ballonArr[i] = new Ballon();
        }
    }
}