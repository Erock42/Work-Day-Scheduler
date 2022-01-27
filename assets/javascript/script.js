const currentDate = 
moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").textContent=currentDate;

var hour1 = document.getElementById("hour1");
var hour2 = document.getElementById("hour2");
var hour3 = document.getElementById("hour3");
var hour4 = document.getElementById("hour4");
var hour5 = document.getElementById("hour5");
var hour6 = document.getElementById("hour6");
var hour7 = document.getElementById("hour7");
var hour8 = document.getElementById("hour8");
var hour9 = document.getElementById("hour9");

//use $? also array^?

var description= {};

//let currentHour = [
    //{id="9", id="10", id="11", id="12", id="13", id="14", id="15", id="16", id="17"}
//];

var saveBtn = function() {
    localStorage.setItem("description", JSON.stringify(description));
  };



