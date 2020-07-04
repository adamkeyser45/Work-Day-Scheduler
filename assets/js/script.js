// $(".time-block").each(function () {
//     var taskHour = parseInt($(this).attr("id").split("-")[1]);

//     if (taskHour > moment().hour()) {
//         $(this).addClass("past");
//     }
//     else if (taskHour = moment().hour()) {
//         $(this).addClass("present");
//     }
//     else if (taskHour = moment().hour()) {
//         $(this).addClass("future");
//     };
    
// })


// load saved tasks to time slots
var loadTasks = function() {
    $("#task9").html(localStorage.getItem("task9"));


};

// saves text to localStorage and returns textarea to <p>
$(".saveBtn").on("click", function() {
    var time = $(this)[0].previousElementSibling.id;
    var text = $(this)[0].previousElementSibling.text;


    // save to localStorage
    localStorage.setItem(time, text);

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