// Wrapped all code in handler for .ready ()
$(function () {
  const currentDate = dayjs();
  const formattedCurrentDate = currentDate.format('MM-DD-YYYY HH:mm:ss');
  const currentDayEl = $('#currentDay')

  //appends current date and time to webpage
  $(currentDayEl).append(formattedCurrentDate);

  //function to color time blocks based on time of day
  function colorTimeBlock() {
    const currentTime = dayjs().hour();
    const hourEl = [
      $("#hour-9"),
      $("#hour-10")
    ]
    console.log(hourEl);
    console.log(currentTime);
  }

  colorTimeBlock();

  const test = document.getElementById('hourBlock')
  console.log(test.dataset.number);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
