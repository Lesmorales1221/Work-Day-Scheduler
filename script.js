//current day is displayed at the top of the calendar
$('#currentDay').text(moment().format("MMM Do YY"));


//each time block is color-coded 
//to indicate whether it is in the past, present, or future
function colortimeblock() {
    var hour = moment().hour();


$('time-block').each(function() {
    var currenthour =parseInt($(this).attr('id'));

//this should be a function that runs and checks a conditioal (if statement)

     if (currenthour > hour) {
        $(this).addclass('future');
        } else if (currenthour === hour) {
        $(this).addclass('present');
         } else {
        $(this).addclass('past');
        }
    })  
};

//WHEN I click into a time block
// WHEN I click the save button for that time block
saveBtn.on('click', function() {

//adding console.log(this) //save button
var time = $(this).siblings('.hour').text();
var plan = $(this).siblings('.plan').val();

// THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});

// WHEN I refresh the page
// THEN the saved events persist
function usePlanner() {

    $('hour').each(function() {
        var currenthour = $(this).text();
        var currentplanner = localStorage.getItem(currenthour);

        //console.log(this)//console.log(currenthour)
        if(currentplanner !== null){
            $(this).siblings('.plan').val(currentplanner);
        }
    });
}

//calling funtions
colortimeblock();
usePlanner();