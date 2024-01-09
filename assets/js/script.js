// Fully load html elements and css sheet before js function runs
$(document).ready(function() {
  // Display current date using Day.js
  $("#currentDay").text(dayjs().format("dddd, MMMM D")); 
  // "dddd" represents full name of the day of the week, "MMMM" represents the month, and "D is the day of month without 0s (1 instead of 01)"

  // select all elements with the class time-block
  $(".time-block").each(function() { 
  // this iterates through each element with the selector (class time-block) so that the function executes for each of those elements
    var hour = parseInt($(this).data("time"));
    // retrieves the value stored in the data-time attribute from the current element, and converts it to an integer.
  });
});