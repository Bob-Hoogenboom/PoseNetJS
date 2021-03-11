const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let t = 0;

let points = [];

function getRandomNumber(max){
	return Math.floor(Math.random()*max);
}

function getRandomNumber1or2(){
	let output = Math.floor((Math.random() * 2) + 1);
	if(output == 1){
		return '#FF0000';
	}else if(output == 2){
		return '#0000FF';
	}
}

function RedOrBlue(widthCheck){
	if(widthCheck <= width/2){
		return '#FF0000'; //red?
	}else if(widthCheck >= width/2){
		return '#0000FF'; //blue?
	}
}

function anime()
{
	if( Math.random()<0.05 && points.length < 1){
		let widthVar = getRandomNumber(width)
		let point = new Point(widthVar, getRandomNumber(height), 200, RedOrBlue(widthVar)); //RedLeftBlueRight 
		//let point = new Point(getRandomNumber(width), getRandomNumber(height), 100, getRandomNumber1or2()); //RandomColor
		points.push(point);
	}
	context.clearRect(0,0,width,height);

	points.map((thisPoint,i)=>{
		thisPoint.radius *= 0.982; //ease in function
		if(thisPoint.radius < 20){
			points.splice(i); //remove points that are smaller then 5 px;
		}
		thisPoint.draw(context);
		console.log(points.length);
	})	
}
setInterval(anime, 10);