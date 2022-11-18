// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  $('.saveBtn').on('click', function () { //event listener for saveBtn class
    // use the id in the containing time-block as a key to save the user input in
    let timeID = $(this).parent().attr('id')
    let descriptionValue = $(this).siblings('.description').val()
    // local storage.    
    localStorage.setItem(timeID, descriptionValue)
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  function updateTime() {
    //Get the current time / hour to update the calendar
    var timeHr = dayjs().hour()

    //Validate each time block
    $('.time-block').each(function () {
      var savedHour = parseInt($(this).attr('id').split('-')[1])

      //Loop executed each interval to double check if still current
      if (savedHour < timeHr) { //If the saved block time is outdated
        $(this).addClass('past') //Assign the 'past' styling to the calender element
      } else if (savedHour === timeHr) { //If the saved block time is current
        $(this).removeClass('past')
        $(this).addClass('present') //Remove the 'past' styling and apply the 'present' styling
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future') //If it's neither present nor past, it must be future
      }
    })
  }
  updateTime()

  setInterval(updateTime, 60000);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
