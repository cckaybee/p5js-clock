let radius: number;

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    radius = map(sin(millis() / 500), -1, 1, 20, 250);
    circle(0, 0, radius);
}
