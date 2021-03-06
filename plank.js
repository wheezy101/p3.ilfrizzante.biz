/*Initialize the datepicker*/
$(function() {
    $( "#userDate" ).datepicker();
  });
  
/*Delete the old calendar with the old start date*/
$('#calendar').fullCalendar('destroy');	

/*button loads the full calendar when the user changes the start date*/
$('#plankCalendar').click(function() {
        $('#userDate').datepicker();
        var chosenDate = $('#userDate').datepicker('getDate');
        var currentDate = new Date;
        /*alert the user if they choose a date in the past*/
        /*allow them to choose a date in the past...maybe they did the challenge before and want a record of it*/
        if (currentDate>chosenDate & chosenDate!=null)
        {
                window.alert("That date is before or on today's date!");
        }
        var chosenDay = chosenDate.getDate();
        var chosenMonth = chosenDate.getMonth();
        var chosenYear = chosenDate.getFullYear();
	
	/*load the new calendar*/
	$('#calendar').fullCalendar({
        header: {
                left: 'prev,next',
                center: 'title'
        },
        editable: true,
        /*here is the plank challenge schedule*/
        events:
        [
                {
                        title: '20 second plank',
                        start: new Date(chosenDate),
                        allDay: true
                },
                {
                        title: '20 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 1),
                        allDay: true
                },
                {
                        title: '30 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 2),
                        allDay: true
                },
                {
                        title: '30 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 3),
                        allDay: true
                },
                {
                        title: '40 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 4),
                        allDay: true
                },
                {
                        title: 'Rest Day',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 5),
                        allDay: true
                },
                {
                        title: '45 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 6),
                        allDay: true
                },
                {
                        title: '45 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 7),
                        allDay: true
                },
                {
                        title: '60 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 8),
                        allDay: true
                },
                {
                        title: '60 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 9),
                        allDay: true
                },
                {
                        title: '60 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 10),
                        allDay: true
                },
                {
                        title: '90 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 11),
                        allDay: true
                },
                {
                        title: 'Rest Day',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 12),
                        allDay: true
                },
                {
                        title: '90 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 13),
                        allDay: true
                },
                {
                        title: '90 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 14),
                        allDay: true
                },
                {
                        title: '120 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 15),
                        allDay: true
                },
                {
                        title: '120 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 16),
                        allDay: true
                },
                {
                        title: '150 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 17),
                        allDay: true
                },
                {
                        title: 'Rest Day',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 18),
                        allDay: true
                },
                {
                        title: '150 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 19),
                        allDay: true
                },
                {
                        title: '150 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 20),
                        allDay: true
                },
                {
                        title: '180 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 21),
                        allDay: true
                },
                {
                        title: '180 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 22),
                        allDay: true
                },
                {
                        title: '210 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 23),
                        allDay: true
                },
                {
                        title: '210 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 24),
                        allDay: true
                },
                {
                        title: 'Rest Day',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 25),
                        allDay: true
                },
                {
                        title: '240 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 26),
                        allDay: true
                },
                {
                        title: '240 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 27),
                        allDay: true
                },
                {
                        title: '270 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 28),
                        allDay: true
                },
                {
                        title: '300 second plank',
                        start: new Date(chosenYear, chosenMonth, chosenDay + 29),
                        allDay: true
                }
        ]
	})
});


/*print button*/
$('#pagePrint').click(function() { 
    	window.print();
 
});


