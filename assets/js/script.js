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

  function updateTimeBlocks() {
    var currentHour = dayjs().hour();
    // retrieves the hour portion from a day.js object that represents the current date and time and stores it in the cariable currentHour
    
    $(".time-block").each(function() {
      var hour = parseInt($(this).data("time"));
      var description = $(this).find(".description");
    // if/else statements to give past/present/future classes to hours relative to the currentHour variable
      if (hour < currentHour) {
        description.removeClass("present future").addClass("past");
      } else if (hour === currentHour) {
        description.removeClass("past future").addClass("present");
      } else {
        description.removeClass("past present").addClass("future");
      }
    });
  }
  updateTimeBlocks(); // Calls the function when the page loads
  setInterval(updateTimeBlocks, 60000); // Runs the function every minute to update the blocks depending on the time
  
});