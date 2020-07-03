// var for array of saved tasks
var dailyTasks = JSON.parse(localStorage.getItem('dailyTasks')) || [];


// function to render the tasks to each section
function renderTasks(dailyTasks) {
    $(".taskarea").empty();

    for (var i = 0; i < dailyTasks.length; i++) {
        $("<p>").text(dailyTasks[i]);
    }
}




// Displays Current Date and Time below the header
var currentDate = function() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(date);
};

// Updates the currentDate() function every second to act as a clock
setInterval(function() {
    currentDate();
}, 1000);

$(".row").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});



currentDate();