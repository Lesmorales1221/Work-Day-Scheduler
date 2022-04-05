//current day is displayed at the top of the calendar
$('#currentDay').text(moment().format("MMM Do YY"))


//each time block is color-coded 
//to indicate whether it is in the past, present, or future
function colortimeblock() {
    var hour = moment().hour();
}

$('time-block').each(function() {
    var currenthour =parseInt($(this).attr('id'));
})

//this should be a function that runs and checks a conditioal (if statement)
if (currenthour > hour) {
        $(this).addclass('future');
}


//WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist