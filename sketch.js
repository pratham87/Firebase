var canvas;
var score = 0;
var button;
var userName;
var submitButton;
var db;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent("game");
    button = createButton("Press Button");
    button.mousePressed(increment);
    button.parent("game");
    // button.position(0, height + 60);
    userName = createInput("name");
    userName.parent("game");
    submitButton = createButton("Submit");
    submitButton.mousePressed(submitScore);
    submitButton.parent("game");

    var config = {
        apiKey: "AIzaSyCf7ger-2WgkWOYXFDUVJnXKPap0kV4o3o",
        authDomain: "basicexample-56009.firebaseapp.com",
        databaseURL: "https://basicexample-56009.firebaseio.com",
        storageBucket: "basicexample-56009.appspot.com",
        messagingSenderId: "94795301951"
    };
    firebase.initializeApp(config);

    // Get Firebase db instance in a variable
    db = firebase.database();

    //Retrieve data
    var ref = db.ref("scores");
    ref.on("value", data_retrieved, errData);
}

function data_retrieved(data) {

    //selectAll creates an array of selected elements
    // var scorelisting = selectAll(".scorelisting");
    // for (var i = 0; i < scorelisting.length; i++) {
    //     scorelisting[i].remove();
    // }

    console.log(data);
    var scores = data.val(); // array of data from firebase
    var keys = Object.keys(scores);
    console.log(keys);

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var name = scores[k].name;
        var score = scores[k].score;
    }

    console.log(name, score);

    //Create score list on html
    var li = createElement("li", name + ":" + score);
    // li.class("scorelisting");
    li.parent("scorelist");
}

function errData(err) {
    console.log("Error");
    console.log(err);
}

function increment() {
    score++;
}

function submitScore() {
    var data = {
        name: userName.value(),
        score: score
    }
    console.log(data);

    // Create reference to score
    var ref = db.ref("scores");

    // //Creating sampe data to push to firebase
    // var data = {
    //     name: "John",
    //     score: 51
    // }

    //Pushing data to firebase
    ref.push(data);
}

function draw() {
    background(0);
    textAlign(CENTER);
    textSize(35);
    fill(255)
    text(score, width / 2, height / 2)
}
