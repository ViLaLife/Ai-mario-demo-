noseX=""
noseY=""
GameStatus=""

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	
	video.createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_consol");
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses)
}

function modelLoaded(){
	console.log("model is loaded");
}

function gotPoses(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log(results);

	}
}

function draw() {
	game();
	console.log("noseX= "+ noseX +" noseY= "+ noseY);
}

function startgame(){
	GameStatus="start";
	document.getElementById("status").innerHTML="game is loading";
}