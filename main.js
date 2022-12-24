status = "";
objects-[];
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
if(status==""){
    for(var i = 0; i < objects.length; i++){
        text("Object : "+objects[i].label+" "+"Percentage : "+percent+"%", objects[i].x+12, objects[i].y+12);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        label= objects[i].label;

        if(label==data_input){
            video.stop();
            objectDetector.detect(gotResult);
            document.getElementById("status").innerHTML="Status : object mentioned found";
            speak();
        }
        else{
            document.getElementById("status").innerHTML="Status : object mentioned not found";
        }
    }
    
}}

function speak(){
    var synth=window.speechSynthesis;
    var speak_data= "object mentioned found";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
objectDetection.detect(video, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
function start(){
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Objects Detecting";
    var data_input = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}