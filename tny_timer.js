"use strict"

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Dominic Torres
   Date: 1/9/20   

*/

//step 5
function showClock() {
   var thisDay = new Date("May 19, 2018 09:31:27");
   var localDate = thisDay.toLocalDateString();
   var localTime = thisDay.toLocalTimeString();
   document.getElementById("currentTime").innerHTML="<span>" + localDate + "</span><span>" + localTime + "</span>";
   var j4Date = 
}

function nextJuly4(thisDay) {
   var cYear = thisDay.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}