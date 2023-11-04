// Wrapped all code in handler for .ready ()
$(function () {
  const currentDate = dayjs();
  const formattedCurrentDate = currentDate.format('MM-DD-YYYY HH:mm:ss');
  const currentDayEl = $('#currentDay')

  //appends current date and time to webpage
  $(currentDayEl).append(formattedCurrentDate);

  //function to color time blocks based on time of day
  $('.time-block').each(function () {
    const currentTime = dayjs().hour();
    const currentHour = $(this).data('number')
    if (currentHour == currentTime) {
      $(this).removeClass("future")
      $(this).removeClass("past")
      $(this).addClass("present")
    } else if (currentHour < currentTime) {
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass("past")
    } else if (currentHour > currentTime) {
      $(this).removeClass("present")
      $(this).removeClass("past")
      $(this).addClass("future")
    }
  });

  $.valHooks.textarea = {
    get: function (elem) {
      return elem.value.replace(/\r?\n/g, "\r\n");
    }
  };

  $('.saveBtn').on('click', function (event) {
    const userInput9 = $('#textArea9').val();
    const userInput10 = $('#textArea10').val();
    const userInput11 = $('#textArea11').val();
    const userInput12 = $('#textArea12').val();
    const userInput13 = $('#textArea13').val();
    const userInput14 = $('#textArea14').val();
    const userInput15 = $('#textArea15').val();
    const userInput16 = $('#textArea16').val();
    const userInput17 = $('#textArea17').val();
    localStorage.setItem('user-input-9', userInput9)
    localStorage.setItem('user-input-10', userInput10)
    localStorage.setItem('user-input-11', userInput11)
    localStorage.setItem('user-input-12', userInput12)
    localStorage.setItem('user-input-13', userInput13)
    localStorage.setItem('user-input-14', userInput14)
    localStorage.setItem('user-input-15', userInput15)
    localStorage.setItem('user-input-16', userInput16)
    localStorage.setItem('user-input-17', userInput17);
  });

  $(document).ready(function() {
    const textArea9 = $('#textArea9')
    const textArea10 = $('#textArea10')
    const textArea11 = $('#textArea11')
    const textArea12 = $('#textArea12')
    const textArea13 = $('#textArea13')
    const textArea14 = $('#textArea14')
    const textArea15 = $('#textArea15')
    const textArea16 = $('#textArea16')
    const textArea17 = $('#textArea17')
    textArea9.append(localStorage.getItem('user-input-9'))
    textArea10.append(localStorage.getItem('user-input-10'))
    textArea11.append(localStorage.getItem('user-input-11'))
    textArea12.append(localStorage.getItem('user-input-12'))
    textArea13.append(localStorage.getItem('user-input-13'))
    textArea14.append(localStorage.getItem('user-input-14'))
    textArea15.append(localStorage.getItem('user-input-15'))
    textArea16.append(localStorage.getItem('user-input-16'))
    textArea17.append(localStorage.getItem('user-input-17'))
  })
});
