var canvas;
var score = 0;
var button;

function setup() {
    canvas = createCanvas(500, 500);
    button = createButton("Press Button");
    button.mousePressed(increment);
    button.position(0, height + 20);

    var config = {
        apiKey: "AIzaSyCf7ger-2WgkWOYXFDUVJnXKPap0kV4o3o",
        authDomain: "basicexample-56009.firebaseapp.com",
        databaseURL: "https://basicexample-56009.firebaseio.com",
        storageBucket: "basicexample-56009.appspot.com",
        messagingSenderId: "94795301951"
    };
    firebase.initializeApp(config);
    console.log("Firebase"); //Printing data to console to make sure the code above is executing
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
