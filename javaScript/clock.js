
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
 radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawSecNumbers(ctx, radius);
  drawTime(ctx, radius);
  ctx.arc(0, 0, radius*0.015, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.08, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.fillStyle="#fff"
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.75);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.75);
    ctx.rotate(-ang);
  }
}
function drawSecNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.07 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 61; num++){
    ang = num * Math.PI / 30;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.90);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.90);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    // #FCD667
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    drawHand(ctx, hour, -radius*0.1, radius*0.07);
    var grad;
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0.3, '#FCD667');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#FCD667');
    ctx.strokeStyle = grad;
    drawHand(ctx, hour, radius*0.4, radius*0.04);
    drawHand(ctx, hour, -radius*0.03, radius*0.04);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    drawHand(ctx, minute, -radius*0.1, radius*0.07);

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#FCD667');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#FCD667');
    ctx.strokeStyle = grad;
    drawHand(ctx, minute, -radius*0.03, radius*0.04);
    drawHand(ctx, minute, radius*0.7, radius*0.04);
    
    // second
    second=(second*Math.PI/30);
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    drawHand(ctx, second, radius*0.9, radius*0.02);
    drawHand(ctx, second, -radius*0.2, radius*0.02);
    
      //hand decoration
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#FCD667');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#FCD667');
    ctx.strokeStyle = grad;
    drawHand(ctx, second, radius*0.7, radius*0.01);
    drawHand(ctx, second, -radius*0.1, radius*0.01);
    
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

let gradient = ctx1.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'green');
gradient.addColorStop(.7, 'white');
gradient.addColorStop(1, 'pink');
ctx1.fillStyle = gradient;
ctx1.fillRect(10, 10, 200, 100);


