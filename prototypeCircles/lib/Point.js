class Point {

  constructor(x,y,radius,color,draggable,label){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draggable = draggable || false;
    this.label = label|| ""

    if(draggable){
      this.drag();
      }
    }

    get position(){
      let ans = new Vector2d(this.x,this.y);
      return ans
    }

    get vPos(){
      return new Vector2d(this.x,this.y);
    }

    set vPos(vector){
      this.x = vector.dx;
      this.y = vector.dy;
    }

    drag(){

      let mouse = {};
      let distance;
      let dragging = false;

      addEventListener('mousedown',(evt) => {
        mouse.x = evt.clientX;
        mouse.y = evt.clientY;

        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < this.radius){
          dragging = true;
        } else {
          dragging = false;
        }

      })

      addEventListener('mousemove',(evt)=>{
        if(dragging){
          this.x = evt.clientX;
          this.y = evt.clientY;
        }
      })

      addEventListener('mouseup',() =>{
        dragging = false;
      })
    }

  draw(){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.radius,0,Math.PI*2);
    context.stroke();
    context.fill();
    context.fillStyle = "black";
    context.font = "15px Courier new";
    context.fillText(this.label, this.x, this.y - 1.2* this.radius );
  }

  printText(){
    context.font = this.font;
    context.fillText(this.text, this.x, this.y - 1.2*this.radius );
  }

}