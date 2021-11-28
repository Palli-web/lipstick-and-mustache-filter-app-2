noseX = 0;
noseY = 0;
filter = "" ;


function preload() {
mustache_img = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
lipstick_img = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup() {
    canvas = createCanvas(300 , 300);
    canvas.position( 500 , 200);
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-10;
    noseY = results[0].pose.nose.y+10;
       

    }
}
function mustache() {
    filter = "mustache";
    
}

function lipstick(){
    filter = "lipstick"
    
}



function draw() {
    image(video , 0,0 , 300 , 300);
    if(filter == "mustache"){
        image(mustache_img , noseX , noseY, 30,30)
    }
    else if(filter == "lipstick"){
        image(lipstick_img , noseX, noseY, 30 , 30)
    }

    
    
}

function take_snapshot(){
    save('myFilterImage.png')
}