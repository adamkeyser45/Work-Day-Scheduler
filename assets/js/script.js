// checks the time of each task and applies the correct class
$(".time-block").each(function () {
    var taskHour = parseInt($(this).attr("id").split("-")[1]);

    if (taskHour < moment().hour()) {
        $(this).addClass("past");
    }
    else if (taskHour === moment().hour()) {
        $(this).addClass("present");
    }
    else if (taskHour > moment().hour()) {
        $(this).addClass("future");
    };
})

// load saved tasks to time slots
var loadTasks = function() {
    $("#task9").val(localStorage.getItem("task-9"));
    $("#task10").val(localStorage.getItem("task-10"));
    $("#task11").val(localStorage.getItem("task-11"));
    $("#task12").val(localStorage.getItem("task-12"));
    $("#task13").val(localStorage.getItem("task-13"));
    $("#task14").val(localStorage.getItem("task-14"));
    $("#task15").val(localStorage.getItem("task-15"));
    $("#task16").val(localStorage.getItem("task-16"));
    $("#task17").val(localStorage.getItem("task-17"));
};

// saves text to localStorage and returns textarea to <p>
$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    //set items in local storage
    localStorage.setItem(time,text);
    console.log(text,time);
});

// Displays Current Date and Time below the header
var currentDate = function() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(date);
};

// Updates the currentDate() function every second to act as a clock
setInterval(function() {
    currentDate();
}, 1000);

currentDate();
loadTasks();