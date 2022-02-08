noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function preload(){
    
}
function draw(){
    background("Cyan");
    fill("Blue");
    stroke("Cadetblue");
    textSize(difference);
    text("Karthik Shivakumar", noseX, noseY);
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);
    canvas=createCanvas(850, 550);
    canvas.position(560, 100);
    PoseNet=ml5.poseNet(video, modelloaded);
    PoseNet.on('pose', gotPoses);
}
function modelloaded(){
    console.log("Your model is successfully loaded");
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("Nose X="+noseX);
    console.log("Nose Y="+noseY);
    console.log("Left Wrist X="+leftWristX);
    console.log("Right Wrist X="+rightWristX);
    console.log("Length="+difference);
    document.getElementById("name_size").innerHTML="Size="+difference;
    }
}