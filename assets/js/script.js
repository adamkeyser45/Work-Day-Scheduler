

// load saved tasks to time slots
function loadTasks() {
    $(".task9").text() = localStorage.getItem("task9");
};

// saves text to localStorage and returns textarea to <p>
$(".saveBtn").on("click", function() {

    // replace the textarea with a p element
    var text = $(".form-control").val().trim();
    var taskP = $("<p>")
        .text(text);
    $(".form-control").replaceWith(taskP);

    // save to localStorage
    localStorage.setItem('task9', text);
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

$(".row").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});



currentDate();
loadTasks();