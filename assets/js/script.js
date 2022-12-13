// Implement Jquery methods to incorporate date into header
$(document).ready(function () {
let displayDate = $('#currentDay');
displayDate.text(moment().format('dddd MMMM YYYY'));


// Color-code time blocks: To past, present, & future. 
colorTimeBlocks();
setInterval(colorTimeBlocks, 600000);

function colorTimeBlocks() {
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
        var currentHour = parseInt(moment().format("H"));
        $(this).removeClass("past present future");

// Intro logic required for color coding 
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour > currentHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}
// Save user input to local storage
function handleSave(event) {
    var hourId = $(this).parent().attr("id");
    localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
}
// Print input to hour-block
$(".time-block").each(function() {
    var blockId = $(this).attr("id");
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
});
$(".saveBtn").on("click", handleSave);
});