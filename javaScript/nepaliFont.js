var byBarna = ["क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","प","फ","ब","भ","म","य","र","ल","व","श","ष","स","ह","क्ष","त्र","ज्ञ"];
var swarBarna=["अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","अं","अः"];
var swar=document.getElementById("randomSwLetter");
var bya=document.getElementById("randomByLetter");
var swar4=document.getElementById("swdiv");
var bya5=document.getElementById("bydiv");
function swrlettClick(){
	var y = Math.floor(Math.random()*13);
	swar.innerHTML=swarBarna[y];
	
}
function byalettClick(){
	var y = Math.floor(Math.random()*36);
	 console.log(byBarna[y] + " this is byanjan barna that is comming from javascript.");
	 console.log(document.getElementById("randomByLetter").innerHTML);
	 console.log(bya.innerHTML);
	 bya.innerHTML = byBarna[y];	
}
function swr4Click(){
	while (swar4.firstChild) {
		swar4.removeChild(swar4.firstChild);
		}
	var y = Math.floor(Math.random()*3)*4;
	 var swr = swarBarna.slice(0, 4);
	if(y==8){
		swr=swarBarna.slice(y, y+6);
		}
	else{swr=swarBarna.slice(y, y+4);}
	var nodeadd = document.createElement("span");
	nodeadd.className="display-4 p-1";
	var node = document.createTextNode(swr.join(" "));
	nodeadd.appendChild(node);
	swar4.appendChild(nodeadd);
//	var y = Math.floor(Math.random()*13);
//	swar4.innerHTML=swarBarna[y];	
}
function bya5Click(){
	while (bya5.firstChild) {
		bya5.removeChild(bya5.firstChild);
		}
	var y = Math.floor(Math.random()*7)*5;
	 var bya = byBarna.slice(0, 5);
	if(y==30){
		bya=byBarna.slice(y, y+7);
		}
	else{bya=byBarna.slice(y, y+5);}
	var nodeadd = document.createElement("span");
	nodeadd.className="display-4 p-1";
	var node = document.createTextNode(bya.join(" "));
	nodeadd.appendChild(node);
	bya5.appendChild(nodeadd);	
}