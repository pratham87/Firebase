var canvas;
var score = 0;
var button;

function setup() {
    canvas = createCanvas(500, 500);
    button = createButton("Press Button");
    button.mousePressed(increment);
    button.position(0, height + 20);
}

function increment() {
    score++;
}



function draw() {
    background(0);
    textAlign(CENTER);
    textSize(35);
    fill(255)
    text(score, width / 2, height / 2)
}
