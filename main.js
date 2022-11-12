 var img="";
var status="";
function preload(){
img = loadImage("dog_cat.jpg");
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector= ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded(){
console.log("cocossd Model Loaded");
status= true;
objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results);
}
}
function draw(){
image(img, 0, 0, 640, 420);
fill("#FF0000");
textSize(20);
text("Dog", 50, 90);
noFill();
stroke("#FF0000");
rect(30, 50, 350, 360);
fill("#FF0000");
textSize(20);
text("Cat", 320, 100);
noFill();
stroke("#FF0000");
rect(300, 70, 300, 330);
}