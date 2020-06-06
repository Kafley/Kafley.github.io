// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;
var clclass="black";

var myPics = document.getElementById("canvas");
var context = myPics.getContext("2d");

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = clclass;
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
$("td").click(function() {
	   var myClass = $(this).attr("id");
	   if(myClass!="black" && myClass!="pink"&&myClass!="red"&&myClass!="blue"&&myClass!="blue"&&myClass!="orange"&&myClass!="purple"&&myClass!="white")
		   {
		   clclass="black";
		   }
	   else{
	   clclass=myClass;
	   }
	});