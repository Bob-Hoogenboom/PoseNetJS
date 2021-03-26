const ctx1 = canvas1.getContext('2d');
canvas1.style.zIndex = 2;
// ctx1.translate(screen.width, 0); // flip screen horizontal
// ctx1.scale(-1, 1); // flip screen horizontal

canvas1.width = screen.width;
canvas1.height = screen.height;

let textHere = document.getElementById('textHere')

let t = 0;
let leftrightcolor;
let typeVar;
// wrist position
let LatestLeftWristY, LatestLeftWristX;
let LatestRightWristX, LatestRightWristY;

let leftDistance,rightDistance;
let ldx, ldy, rdx, rdy;
let points = [];
let audio = new Audio("recourses/hit_target.mp3");

function getRandomNumber(max){
	return Math.floor(Math.random()*max);
}

function RedOrBlue(widthCheck){
	if(widthCheck <= canvas1.width/2){
		leftrightcolor = '#FF0000';
		typeVar = "L";
	}else if(widthCheck >= canvas1.width/2){
		leftrightcolor = '#0000FF';
		typeVar = "R";
	}
}

function anime()
{
	if( Math.random()<0.05 && points.length < 1){
		let widthVar = getRandomNumber(canvas1.width);
		RedOrBlue(widthVar);
		let point = new Point(widthVar, getRandomNumber(canvas1.height), 200, leftrightcolor, false, typeVar); //RedLeftBlueRight 
		//let point = new Point(getRandomNumber(width), getRandomNumber(height), 100, getRandomNumber1or2()); //RandomColor
		//let point = new Point(100,300, 100, leftrightcolor, false, typeVar);
		points.push(point);
	}
	
	ctx1.clearRect(0,0,canvas1.width,canvas1.height);

	points.map((thisPoint,i)=>{
	
		//thisPoint.radius *= 0.982; //ease in function
		if(thisPoint.radius < 20){
			points.splice(i); //remove points that are smaller then 5 px;
		}
		thisPoint.draw(ctx1);

		rdx = LatestRightWristX - thisPoint.x;
		rdy = LatestRightWristY - thisPoint.y;
		ldx = LatestLeftWristX - thisPoint.x;
		ldy = LatestLeftWristY - thisPoint.y;

		rightDistance = Math.sqrt(ldx / rdx + rdy * rdy);
		leftDistance = Math.sqrt(rdx / ldx + ldy * ldy);
		console.log(rightDistance);
		console.log(LatestRightWristX, LatestRightWristY);
		if(rightDistance <= thisPoint.radius || leftDistance <= thisPoint.radius){
			console.log("hit");
			points.splice(i,1);
			audio.play();
		}
	})	
}

function GetWristPostion(XYRightWrist,XYLeftWrist) {
  	[LatestRightWristX, LatestRightWristY] = [XYRightWrist.x, XYRightWrist.y];
  	[LatestLeftWristX, LatestLeftWristY] = [XYLeftWrist.x, XYLeftWrist.y];
}

setInterval(anime, 10);