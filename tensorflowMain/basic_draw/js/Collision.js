let textHere = document.getElementById('textHere');// display data

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

canvas1.style.zIndex = 2;
canvas1.width = screen.width;
canvas1.height = screen.height;
canvas1.style.zIndex = 2;
ctx1.translate(screen.width, 0); // flip screen horizontal
ctx1.scale(-1, 1); // flip screen horizontal


let LatestLeftWristY, LatestLeftWristX;
let LatestRightWristX, LatestRightWristY;

const clearDrawing =() => {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
}

function GetWristPostion(XYRightWrist,XYLeftWrist) {
  [LatestRightWristX, LatestRightWristY] = [XYRightWrist.x, XYRightWrist.y];
  [LatestLeftWristX, LatestLeftWristY] = [XYLeftWrist.x, XYLeftWrist.y];
  //textHere.innerHTML= Math.floor(XY.x) + " " + Math.floor(XY.y);
  console.log(LatestRightWristX,LatestRightWristY);
}

function GetCirclePosition(CircleX, CircleY){
  console.log(CircleX);
}

