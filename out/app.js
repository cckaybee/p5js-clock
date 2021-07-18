"use strict";
let radius;
const scaling = 6;
function setup() {
    createCanvas(125 * scaling, 125 * scaling);
    background(0);
}
function draw() {
    background(0);
    translate(width / 2, height / 2);
    const seconds = p5.Vector.fromAngle(radians(second() * 6 - 90)).setMag(50 * scaling);
    const minutes = p5.Vector.fromAngle(radians(minute() * 6 - 90)).setMag(50 * scaling);
    const hours = p5.Vector.fromAngle(radians((hour() % 12) * 30 - 90 + minute() * 0.5)).setMag(25 * scaling);
    strokeWeight(2);
    stroke(255);
    line(0, 0, seconds.x, seconds.y);
    strokeWeight(4);
    line(0, 0, minutes.x, minutes.y);
    strokeWeight(6);
    line(0, 0, hours.x, hours.y);
    for (let i = 0; i < 360; i += 30) {
        if (i % 90 === 0) {
            strokeWeight(3);
        }
        else {
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
//# sourceMappingURL=app.js.map