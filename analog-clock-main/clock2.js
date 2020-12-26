let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d');
console.log(ctx)

let radius = canvas.height / 2


ctx.translate(radius,radius)
radius = radius * 0.90;


function  drawFace(ctx , radius) {
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle = "White";
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    //define gradient as stroke style
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke(); 
    //draw the center of the clock
    ctx.beginPath();
    ctx.arc(0,0, radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

drawFace(ctx , radius)