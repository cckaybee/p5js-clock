/**
 * This is only a simple test how to use typescript with P5.JS
 * Most of the code should probably be refactored for better
 * readability and reuseability, but meh..
 */

let radius: number;
const scaling = 6;

function setup() {
    createCanvas(125 * scaling, 125 * scaling);
    background(0);
}

function draw() {
    background(0);
    // Translate the origin point to the middle of the canvas
    translate(width / 2, height / 2);
    // We have to subtract 90° because 0° from the origin points to the right
    // Get a vector for the second hand which travels 6° per second
    const seconds = p5.Vector.fromAngle(radians(second() * 6 - 90)).setMag(
        50 * scaling
    );
    // Get a vector for the minute hand which travels 6° per minute
    const minutes = p5.Vector.fromAngle(radians(minute() * 6 - 90)).setMag(
        50 * scaling
    );
    // Get a vector for the hour hand which travels 30° per hour
    // Note that for the hand to not jump from hour to hour,
    // we add the minutes * 0.5
    const hours = p5.Vector.fromAngle(
        radians((hour() % 12) * 30 - 90 + minute() * 0.5)
    ).setMag(25 * scaling);
    // Draw the hands of the clock
    strokeWeight(2);
    stroke(255);
    line(0, 0, seconds.x, seconds.y);
    strokeWeight(4);
    line(0, 0, minutes.x, minutes.y);
    strokeWeight(6);
    line(0, 0, hours.x, hours.y);

    // Draw the hour marks on the face of the clock (30° apart)
    // Draw thicker lines at the 12, 3, 6, and 9 hour mark
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

    // Draw the second marks on the face of the clock (6° apart)
    for (let i = 0; i < 360; i += 6) {
        strokeWeight(1);
        const a = p5.Vector.fromAngle(radians(i)).setMag(52 * scaling);
        const b = p5.Vector.fromAngle(radians(i)).setMag(55 * scaling);
        line(a.x, a.y, b.x, b.y);
    }
}
