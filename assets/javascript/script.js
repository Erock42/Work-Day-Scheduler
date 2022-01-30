var tasks = {};

//moment.js day and date
const currentDate = 
moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").textContent=currentDate;

//use $? also array for save function or color change?

//moment.js hour format
let currentHour = parseInt(moment().format('H'));
//check hour is up and current
console.log(currentHour)

//var loadTasks = function() {
    //tasks = JSON.parse(localStorage.getItem("tasks"));

    //if (!tasks) {
        //tasks = {
          //timeBlockEl: [],
        //};
      //}

        // loop over object properties
  //$.each(tasks, function(list, arr) {
    // then loop over sub-array
    //arr.forEach(function(task) {
      //createTask(task.text, task.date, list);
    //});
  //});
//};
  

//save function here

var saveBtn = function() {
    localStorage.setItem("textarea", JSON.stringify(description));
  };



var checkTime = function () {

    var currentHour = moment().format('H');

    var timeBlockEl = $(".textarea");

    for (var i = 0 ; i < timeBlockEl.length ; i++) {

        var elementID = timeBlockEl[i].id;

        //ask about $ vs document.getElementById here
        var tenseID = document.getElementById(timeBlockEl[i].id)

        //remove any old classes from element
        $(timeBlockEl[i].id).removeClass(".present .past .future");

        if (elementID < currentHour) {
            $(tenseID).addClass("past");
        } else if (elementID > currentHour) {
            $(tenseID).addClass("future");
        } else {
            $(tenseID).addClass("present");
        }
    }
}

//run checkTime on interval to update colors
setInterval(checkTime(), (1000 * 60) * 5);

