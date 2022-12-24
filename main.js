status = "";

function preload(){

}
function setup(){
canvas = createCanvas(480, 380);
canvas.center();
video= createCapture(VIDEO, 480, 380);
video.hide();
}

function draw(){
image(video, 0, 0, 480, 380);
}
function start(){
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Objects Detecting";
    var data_input = document.getElementById("input").value
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}