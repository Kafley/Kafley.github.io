// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;
var clclass="blue";

var gameBoard = document.getElementById("canvas");
var context = gameBoard.getContext("2d");
drawBlock(context, 0, 0, 98, 98,5,);
drawBlock(context, 2, 2, 30, 30,5,"a");
drawBlock(context, 34, 2, 30, 30,5,"b");
drawBlock(context, 66, 2, 30, 30,5,"c");
drawBlock(context, 2, 34, 30, 30,5,"d");
drawBlock(context, 34, 34, 30, 30,5, "e");
drawBlock(context, 66, 34, 30, 30,5, "f");
drawBlock(context, 2, 66, 30, 30,5, "g");
drawBlock(context, 34, 66, 30, 30,5, "h");



// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
gameBoard.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  
});

gameBoard.addEventListener('mousemove', e => {
    x = e.offsetX;
    y = e.offsetY;
});

window.addEventListener('mouseup', e => {
    x = 0;
    y = 0;
});

document.body.addEventListener("touchstart", e => {
	  if (e.target == gameBoard) {
	    e.preventDefault();
	  }
	  x = e.offsetX;
	  y = e.offsetY;
	}, false);
	document.body.addEventListener("touchend", e => {
	  if (e.target == gameBoard) {
	    e.preventDefault();
	  }
	  x = 0;
	    y = 0;
	}, false);
	document.body.addEventListener("touchmove", e => {
	  if (e.target == gameBoard) {
	    e.preventDefault();
	  }
	  x = e.offsetX;
	  y = e.offsetY;
	}, false);

function drawBlock(context, x1, y1, w, h,radius, letter ) {
		  var r = x1 + w;
		  var b = y1 + h;
		  context.beginPath();
		  context.strokeStyle="green";
		  context.lineWidth="2";
		  context.moveTo(x1+radius, y1);
		  context.lineTo(r-radius, y1);
		  context.quadraticCurveTo(r, y1, r, y1+radius);
		  context.lineTo(r, y1+h-radius);
		  context.quadraticCurveTo(r, b, r-radius, b);
		  context.lineTo(x1+radius, b);
		  context.quadraticCurveTo(x1, b, x1, b-radius);
		  context.lineTo(x1, y1+radius);
		  context.quadraticCurveTo(x1, y1, x1+radius, y1);
		  context.stroke();
		  context.strokeStyle="black";
		  context.lineWidth="0.1";
		  context.font = "15px Arial";
		  if(letter){
		  context.fillText(letter, x1+10, y1+19);
		  	}
//  context.stroke();
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




//var elem = document.getElementById('myCanvas');
//
//function collides(rects, x, y) {
//    var isCollision = false;
//    for (var i = 0, len = rects.length; i < len; i++) {
//        var left = rects[i].x, right = rects[i].x+rects[i].w;
//        var top = rects[i].y, bottom = rects[i].y+rects[i].h;
//        if (right >= x
//            && left <= x
//            && bottom >= y
//            && top <= y) {
//            isCollision = rects[i];
//        }
//    }
//    return isCollision;
//}
//
//// check if context exist
//if (elem && elem.getContext) {
//    // list of rectangles to render
//    var rects = [{x: 0, y: 0, w: 50, h: 50},
//                 {x: 75, y: 0, w: 50, h: 50}];
//  // get context
//  var context = elem.getContext('2d');
//  if (context) {
//
//      for (var i = 0, len = rects.length; i < len; i++) {
//        context.fillRect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
//      }
//
//  }
//
//    // listener, using W3C style for example    
//    elem.addEventListener('click', function(e) {
//        console.log('click: ' + e.offsetX + '/' + e.offsetY);
//        var rect = collides(rects, e.offsetX, e.offsetY);
//        if (rect) {
//            console.log('collision: ' + rect.x + '/' + rect.y);
//        } else {
//            console.log('no collision');
//        }
//    }, false);
//}