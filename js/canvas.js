// Variables!
var radius = 15;
var drawing = true;
//You will want to add more

var canvas = document.querySelector("#canvas")

var ctx = canvas.getContext("2d")
ctx.fillStyle = "red";

//Listeners!!
//Add a listener for loading the window
window.addEventListener("load", function (e) {
    // https://stackoverflow.com/questions/1664785/resize-html5-canvas-to-fit-window
    ctx.canvas.width = window.innerWidth * .75
    ctx.canvas.height = window.innerHeight * .75
})
//Add a listener for the mouse movement

canvas.addEventListener("mousemove", function (e) {
    if (drawing == true) {
        draw(e.pageX - radius / 2, e.pageY - radius / 2);
    }
})

//Add a listener for the touch move
//Add a listener for the keydown

window.addEventListener("keydown", function (e) {
    // Blue
    if (e.keyCode == 66) {
        this.console.log("Color Blue")
        ctx.fillStyle = "rgb(0,0,255)";
    }
    // Red
    else if (e.keyCode == 82) {
        this.console.log("Color Red")
        ctx.fillStyle = "rgb(255,0,0)";
    }
    // Green
    else if (e.keyCode == 71) {
        this.console.log("Color Green")
        ctx.fillStyle = "rgb(0,128,0)";
    }
    // Yellow
    else if (e.keyCode == 89) {
        this.console.log("Color Yellow")
        ctx.fillStyle = "rgb(255,255,0)";
    }
    // Clear Canvas on Space
    else if (e.keyCode == 32) {
        this.console.log("CLEAR CANVAS")
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    // Down
    else if (e.keyCode == 40) {
        this.console.log("START DRAWING");
        drawing = true;
    }
    // Up 
    else if (e.keyCode == 38) {
        this.console.log("STOP DRAWING");
        drawing = false;
    }
})

document.querySelector("#clr").addEventListener("input", function(e) {
    ctx.fillStyle = e.target.value;  
})


// Functions!
// I would add a function for draw
function draw(x, y) {
    console.log("Drawing");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}