function preload(){

};

function setup() {
    canvas=createCanvas( 300,300 );
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
}

function draw() {

};

function snapshot() {
   save ('background.jpg');
}