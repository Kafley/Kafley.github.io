let isDrawing = false;
let x = 0;
let y = 0;
var clclass="black";
var erasorWidth=5
var lwidth=0;

var drawBoard = document.getElementById("canvas");
var context = drawBoard.getContext("2d");
resizeCanvas()
//var dpr = window.devicePixelRatio || 1;

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.


// Add the event listeners for mousedown, mousemove, and mouseup
drawBoard.addEventListener('mousedown', e => {
//	var ratio = drawBoard.width/drawBoard.height;
	 if (e.target == drawBoard) {
		    e.preventDefault();
		  }
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

drawBoard.addEventListener('mousemove', e => {
	  
	
  if (isDrawing === true) {
	  if (e.target == drawBoard) {
		    e.preventDefault();
		  }
	  
    drawLine(context, x, y, e.offsetX, e.offsetY);
//    var ratio = drawBoard.width/drawBoard.height;
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
	  if (e.target == drawBoard) {
		    e.preventDefault();
		  }
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

window.addEventListener("touchstart", function(e) {
//	mousePos = getTouchPos(canvas, e);
	if (e.target == drawBoard) {
	    e.preventDefault();
	  }
	var rect = canvasDom.getBoundingClientRect();
		x: e.clientX - rect.left;
		y: e.clientY - rect.top;
	var mouseEvent = new MouseEvent("mousedown", {
		clientX: e.touches[0].clientX,
		clientY: e.touches[0].clientY
	});
	canvas.dispatchEvent(mouseEvent);
}, false);
window.addEventListener('touchmove', function(e) {
	if (e.target == drawBoard) {
	    e.preventDefault();
	  }
	var mouseEvent = new MouseEvent("mousemove", {
		clientX: e.touches[0].clientX,
		clientY: e.touches[0].clientY
	});
	canvas.dispatchEvent(mouseEvent);
	}, false);
	
window.addEventListener("touchend", function(e) {
	if (e.target == drawBoard) {
	    e.preventDefault();
	  }
	var mouseEvent = new MouseEvent("mouseup", {});
	canvas.dispatchEvent(mouseEvent);
}, false);
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
//        canvas.width = window.innerWidth;
//        canvas.height = window.innerHeight;
	 canvas.style.width ='100%';
	  canvas.style.height='600px';
	  // ...then set the internal size to match
	  canvas.width  = canvas.offsetWidth;
	  canvas.height = canvas.offsetHeight;

}

function drawLine(context, x1, y1, x2, y2) {
	
	var dpr = window.devicePixelRatio || 1;
  context.beginPath();
  context.strokeStyle = clclass;
  context.lineWidth = lwidth;  
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
$("td").click(function() {
	   var myClass = $(this).attr("id");
	   if(myClass!="black" && myClass!="pink"&&myClass!="red"&&myClass!="grey"&&myClass!="blue"&&myClass!="orange"&&myClass!="purple"&&myClass!="white")
		   {
		   if(myClass!=undefined &&myClass!="thick1"&&myClass!="thick2"&&myClass!="thick3"){
		   clclass="black";
		   }
		   }
	   else{
		   clclass=myClass;
		   }
	});

$("span").click(function() {
	   var thicknessId = $(this).attr("id");
	   if(thicknessId=="thick1")
		   {
		   lwidth= 10;
		   }
	   else if(thicknessId=="thick2")
		   {
		   lwidth= 5;
		   }
	   else if(thicknessId=="thick3")
		   {
			   lwidth= 1; 
		   }
	   else{}
		   
	});