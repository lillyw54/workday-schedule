// Set the date at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Set the status of each time-block
$(".time-block").each(function() {
  var currentTime = moment().hours();
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);
  if (timeBlock < currentTime) {
    $(this).addClass("past");
  } else if (timeBlock === currentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

// Load any saved data from localStorage
$(".description").each(function() {
  var timeBlock = $(this).parent().attr("id");
  var savedData = localStorage.getItem(timeBlock);
  if (savedData) {
    $(this).val(savedData);
  }
});

// Save the data to localStorage on click
$(".saveBtn").on("click", function() {
  var timeBlock = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(timeBlock, description);
});
