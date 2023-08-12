noseX=""
noseY=""

function preload(){
    mustashe= loadImage("https://i.postimg.cc/kgjZnRhp/mustache-moustache-png-image-pngpix-22.png")
}

function setup(){
    canvas = createCanvas(680, 680);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}



function take_snapshot(){
    save('myFilterImage.png');
}

function modelloaded(){
    console.log('PoseNet is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('Nose X = '+ noseX);
        console.log('Nose Y = '+ noseY);

        noseX= noseX - 30;
        noseY= noseY + 95;
    }
}

function draw(){
    image(video, 0 ,0 ,680 ,680);
    image(mustashe, noseX, noseY, 100, 100);
}