var element=document.getElementById("demo");
element.addEventListener('touchmove', function(e) {
   // Iterate through the list of touch points that changed
   // since the last event and print each touch point's identifier.
   for (var i=0; i < e.changedTouches.length; i++) {
     console.log("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier);
   }   
}, false);



//$("document").ready (function() {
//$("#demo").onSwipe(function(results){
//02
// 
//03
//  if(results.up ==true)
//04
//    alert("Up")
//05
// 
//06
//  if(results.right ==true)
//07
//    alert("Right")
//08
// 
//09
//  if(results.down ==true)
//10
//    alert("Down")
//11
// 
//12
//  if(results.left ==true)
//13
//    alert("Left")
//14
// 
//15
//});
//});