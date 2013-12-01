$(document).ready(function() {

        $( "#begindate" ).datepicker();
        var currentDate = $( "#begindate" ).datepicker("getDate");
        var myday = currentDate.getDate();
        var mymonth=currentDate.getMonth();
        var myyear = currentDate.getFullYear();
        
$('#calendar').fullCalendar({
        header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
        },
        editable: true,
        eventSources: [
        {
                events: [
                {
                        title: '20 second plank',
                        start: new Date(currentDate),
                        allDay: true
                },
                {
                        title: '20 second plank',
                        start: new Date(myyear, mymonth, myday + 1),
                        allDay: true
                },
                {
                        title: '30 second plank',
                        start: new Date(myyear, mymonth, myday + 2),
                        allDay: true
                },
                {
                        title: '30 second plank',
                        start: new Date(myyear, mymonth, myday + 3),
                        allDay: true
                },
                {
                        title: '40 second plank',
                        start: new Date(myyear, mymonth, myday + 4),
                        allDay: true
                },
                {
                        title: 'Rest Day',
                        start: new Date(myyear, mymonth, myday + 5),
                        allDay: true
                },
                {
                        title: '45 second plank',
                        start: new Date(myyear, mymonth, myday + 6),
                        allDay: true
                },
                {
                        title: '45 second plank',
                        start: new Date(myyear, mymonth, myday + 7),
                        allDay: true
                },
                {
                        title: '60 second plank',
                        start: new Date(myyear, mymonth, myday + 8),
                        allDay: true
                },
                {
                        title: '60 second plank',
                        start: new Date(myyear, mymonth, myday + 9),
                        allDay: true
                },
                {
                        title: '60 second plank',
                        start: new Date(myyear, mymonth, myday + 10),
                        allDay: true
                },
                {
                        title: '90 second plank',
                        start: new Date(myyear, mymonth, myday + 11),
                        allDay: true
                },
                {
                        title: 'Rest Day',
                        start: new Date(myyear, mymonth, myday + 12),
                        allDay: true
                },
                {
                        title: '90 second plank',
                        start: new Date(myyear, mymonth, myday + 13),
                        allDay: true
                },
                {
                        title: '90 second plank',
                        start: new Date(myyear, mymonth, myday + 14),
                        allDay: true
                },
                {
                        title: '120 second plank',
                        start: new Date(myyear, mymonth, myday + 15),
                        allDay: true
                },
                {
                        title: '120 second plank',
                        start: new Date(myyear, mymonth, myday + 16),
                        allDay: true
                },
                {
                        title: '150 second plank',
                        start: new Date(myyear, mymonth, myday + 17),
                        allDay: true
                },
                {
                        title: 'Rest Day',
                        start: new Date(myyear, mymonth, myday + 18),
                        allDay: true
                },
                {
                        title: '150 second plank',
                        start: new Date(myyear, mymonth, myday + 19),
                        allDay: true
                },
                {
                        title: '150 second plank',
                        start: new Date(myyear, mymonth, myday + 20),
                        allDay: true
                },
                {
                        title: '180 second plank',
                        start: new Date(myyear, mymonth, myday + 21),
                        allDay: true
                },
                {
                        title: '180 second plank',
                        start: new Date(myyear, mymonth, myday + 22),
                        allDay: true
                },
                {
                        title: '210 second plank',
                        start: new Date(myyear, mymonth, myday + 23),
                        allDay: true
                },
                {
                        title: '210 second plank',
                        start: new Date(myyear, mymonth, myday + 24),
                        allDay: true
                },
                {
                        title: 'Rest Day',
                        start: new Date(myyear, mymonth, myday + 25),
                        allDay: true
                },
                {
                        title: '240 second plank',
                        start: new Date(myyear, mymonth, myday + 26),
                        allDay: true
                },
                {
                        title: '240 second plank',
                        start: new Date(myyear, mymonth, myday + 27),
                        allDay: true
                },
                {
                        title: '270 second plank',
                        start: new Date(myyear, mymonth, myday + 28),
                        allDay: true
                },
                {
                        title: '300 second plank',
                        start: new Date(myyear, mymonth, myday + 29),
                        allDay: true
                },
                ]
        }
        ]
/*        },
        {
                events: [
                {
                        title: 'Integer rutrum ante eu lacus',
                        start: new Date(y, m, 4, 16, 00),
                        allDay: false
                },
                {
                        title: 'Aliquam erat volpat. Duis ac turpis',
                        start: new Date(y, m, 9, 16, 00),
                        allDay: false
                },
                {
                        title: 'Donec in velit vel ipsum',
                        start: new Date(y, m, 10, 16, 00),
                        allDay: false
                },
                {
                        title: 'Praent vestibulum',
                        start: new Date(y, m, 13, 9, 00),
                        allDay: false
                }
            ]
}
*/


        });

  
        
//        $('.refresh-btn').click(function() {
//                location.reload();
//       });

//        $('#refresh-btn').click(function() {
//                $('#calendar').fullCalendar( "rerenderEvents" );
//        });




});

	$('#PageRefresh').click(function() {
 
    	      location.reload();
 
	});
        
//        $('#refresh-btn').click(function() {
//                 $('#calendar').fullCalendar('rerenderEvents');
 //        });


 
//        $('.refresh-btn').click(function()
//                {
//                document.location.reload(true);
//                });

        