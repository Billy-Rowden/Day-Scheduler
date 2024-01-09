// Fully load html elements and css sheet before js function runs
$(document).ready(function() {
  // Display current date using Day.js
  $("#currentDay").text(dayjs().format("dddd, MMMM D")); 
  // "dddd" represents full name of the day of the week, "MMMM" represents the month, and "D is the day of month without 0s (1 instead of 01)"

  // select all elements with the class time-block for function to iterate through
  $(".time-block").each(function() { 
  // retrieve the value stored in the data-time attribute from the current element, and convert it to an integer.
    var hour = parseInt($(this).data("time"));
  // retrieve previously saved event from local storage if value is truthy
    var savedEvent = localStorage.getItem("event_" + hour);
      if (savedEvent) {
        $(this).find(".description").val(savedEvent); // if savedEvent is not null or undefined, the text area displays the saved event text
      }
  });
});