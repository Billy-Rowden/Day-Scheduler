// Fully load html elements and css sheet before js function runs
$(document).ready(function() {
  // Display current date using Day.js
  $("#currentDay").text(dayjs().format("dddd, MMMM D")); // "dddd" represents full name of the day of the week, "MMMM" represents the month, and "D is the day of month without 0s (1 instead of 01)"
});