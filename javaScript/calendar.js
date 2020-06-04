var today = new Date();
var currentDay = today.getDay();
var dateToday = today.getDate();
var currentMonth = today.getMonth();
var currentyear = today.getFullYear();

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
drawCalendar(currentMonth, currentyear);

function goTo(){
	year = parseInt(document.getElementById("jump-year").value);
	month = parseInt(document.getElementById("jump-month").value);
	if(year&&month){
		drawCalendar(month-1, year);
	}
}

function next(){
	currentMonth = currentMonth+1;
	currentyear = currentyear;
	drawCalendar(currentMonth, currentyear);
	
}

function previous(){
	currentMonth = currentMonth-1;
	currentyear = currentyear;
	 drawCalendar(currentMonth, currentyear);
}

function addEvent(date, event){
	var addevent = document.getElementById(date).innerHTML = event;
}

//draw calendar
function drawCalendar(month, year){
	currentMonth = month;
	currentyear = year;
	var lastDate=new Date(year, month+1, 0).getDate();
	var firstDay=new Date(year, month, 1).getDay();
	var tableBdy = document.getElementById("tbody");
	var jumpMonth = document.getElementById("jump-month").value = month+1;
	var jumpYear = document.getElementById("jump-year").value = year;
	//clear the table body
	tableBdy.innerHTML = "";
	var dates = 1;
	var textNode;
	
	//parseInt
	document.getElementById("month-year").innerHTML=months[month] +" " + year;
//	var row = document.createElement("tr");
	for(let i=0;i<6;i++){
		//First clear the table body
		
		var row = document.createElement("tr");
		for(let j=0;j<7;j++){
			col = document.createElement("td");
			eventNode = document.createElement("p");	
			if(j===0 || j===6){
				col.setAttribute("style", "background-color: #b2dfdb;");
			}
			if(i===0 && j<firstDay){
				textNode = document.createTextNode("");	
			}
			else if(dates>lastDate){
				break;
			}
			else{
				if(month===today.getMonth() && year===today.getFullYear() && dates===dateToday){
					col.setAttribute("style", "background-color: #1de9b6;");
				}
				eventNode.setAttribute("style", "background-color: #90caf9;");
				if(month<10 && dates<10){
				eventNode.setAttribute("id",year + "-0" + (month+1) + "-0"+ dates);
				}
				else if(month<10){
					eventNode.setAttribute("id",year + "-0" + (month+1) +"-" + dates);
				}
				else if(dates<10){
					eventNode.setAttribute("id",year + "-" + (month+1) + "-0" + dates);
				}
				
				textNode=document.createTextNode(dates);
				dates ++;
			}
			col.appendChild(textNode);
			col.appendChild(eventNode);
			row.appendChild(col);
		}
		tableBdy.appendChild(row);
	}
}

//add event in calendar
$(document).ready(function(){
	$("#eventsubmit").click(function(){
	        var edate = document.getElementById("event-date").value;
	        var edateEvent = document.getElementById("event").value;
	       // eventDate.setAttribute("style", "border:double red;");
			
	        addEvent(edate, edateEvent)
	    });
	    });