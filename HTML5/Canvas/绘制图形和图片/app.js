/**
 * Created by Svend on 16-9-11.
 */
var CANVAS_WIDTH = 1000, CANVAS_HEIGHT = 1000;

var canvas, context;

window.onload = function () {
    createCanvas();
    // drawRect();
    drawImage();
};
function createCanvas() {
    document.body.innerHTML = "<canvas id='canvas' width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>";
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
}

function drawRect() {
    context.fillStyle = "rgb(200,0,0)";
    // context.rotate(45);
    // context.translate(400,400);
    // context.scale(2,0.5);
    context.fillRect(200,200,400,400);
}

function drawImage() {
    var img = new Image();
    img.onload = function () {
        context.drawImage(img,0,0);
    };
    img.src = "../../assets/ParticleSmoke.png";
}