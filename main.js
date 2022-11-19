var object=[];
var status="";
function preload(){
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
video = createCapture(VIDEO);
video.size(640, 420);
video.hide();
}
function start(){
 objectDetector= ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded(){
console.log("cocossd Model Loaded");
status= true;
}
function gotResults(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    object=results;
}
}
function draw(){
    
image(video, 0, 0, 640, 420);
if(status!=""){
objectDetector.detect(video, gotResults);
var r = random(255);
var g = random(255);
var b =  random(255);
    for(var i = 0 ; i < object.length; i++){
        document.getElementById("status").innerHTML="Status : Object Detected";       
        document.getElementById("number_of_objects").innerHTML= object.length;
        fill(r, g, b);
        textSize(20);
        var percent= floor(object[i].confidence*100);
        text(object[i].label+" "+percent+"%", object[i].x+10, object[i].y+15);
        noFill();
        stroke(r, g, b);
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
}
}