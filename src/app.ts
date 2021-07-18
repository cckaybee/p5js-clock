/**
 * This is only a simple test how to use typescript with P5.JS
 * Most of the code should probably be refactored for better
 * readability and reuseability, but meh..
 */

let radius: number;
const scaling = 6;

function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    const a = p5.Vector.fromAngle(radians(second() * 6 - 90)).setMag(
        50 * scaling
    );
    const b = p5.Vector.fromAngle(radians(minute() * 6 - 90)).setMag(
        50 * scaling
    );
    const c = p5.Vector.fromAngle(
        radians((hour() % 12) * 30 - 90 + minute() * 0.5)
    ).setMag(25 * scaling);
    strokeWeight(2);
    stroke(255);
    line(0, 0, a.x, a.y);
    strokeWeight(4);
    line(0, 0, b.x, b.y);
    strokeWeight(6);
    line(0, 0, c.x, c.y);

    for (let i = 0; i < 360; i += 30) {
        if (i % 90 === 0) {
            strokeWeight(3);
        } else {
            strokeWeight(1);
        }
        const a = p5.Vector.fromAngle(radians(i)).setMag(52 * scaling);
        const b = p5.Vector.fromAngle(radians(i)).setMag(40 * scaling);
        line(a.x, a.y, b.x, b.y);
    }

    for (let i = 0; i < 360; i += 6) {
        strokeWeight(1);
        const a = p5.Vector.fromAngle(radians(i)).setMag(52 * scaling);
        const b = p5.Vector.fromAngle(radians(i)).setMag(55 * scaling);
        line(a.x, a.y, b.x, b.y);
    }
}
