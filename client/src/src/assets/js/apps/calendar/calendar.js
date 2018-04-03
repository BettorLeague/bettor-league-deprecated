(function ()
{
    var calendarView,
        calendar,
        currentMonthShort;


    // Data
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var events = [
        {
            id   : 1,
            title: 'All Day Event',
            start: new Date(y, m, 1),
            end  : null
        },
        {
            id   : 2,
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end  : new Date(y, m, d - 2)
        },
        {
            id   : 3,
            title: 'Some Event',
            start: new Date(y, m, d - 3, 16, 0),
            end  : null
        },
        {
            id   : 4,
            title: 'Repeating Event',
            start: new Date(y, m, d + 4, 16, 0),
            end  : null
        },
        {
            id   : 5,
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end  : new Date(y, m, d + 1, 22, 30)
        },
        {
            id   : 6,
            title: 'All Day Event',
            start: new Date(y, m, d + 8, 16, 0),
            end  : null
        },
        {
            id   : 7,
            title: 'Long Event',
            start: new Date(y, m, d + 12, 16, 0),
            end  : null
        },
        {
            id   : 8,
            title: 'Repeating Event',
            start: new Date(y, m, d + 14, 2, 0),
            end  : null
        },
        {
            id   : 9,
            title: 'Repeating Event',
            start: new Date(y, m, d + 14, 4, 0),
            end  : null
        },
        {
            id   : 10,
            title: 'Repeating Event',
            start: new Date(y, m, d + 14, 2, 0),
            end  : null
        },
        {
            id   : 11,
            title: 'Repeating Event',
            start: new Date(y, m, d + 14, 4, 0),
            end  : null
        },
        {
            id   : 12,
            title: 'Repeating Event',
            start: new Date(y, m, d + 14, 2, 0),
            end  : null
        },
        {
            id   : 13,
            title: 'Repeating Event',
            start: new Date(y, m, d + 14, 4, 0),
            end  : null
        },
        {
            id   : 14,
            title: 'Conference',
            start: new Date(y, m, d + 17, 4, 0),
            end  : null
        },
        {
            id   : 15,
            title: 'Meeting',
            start: new Date(y, m, d + 22, 4, 0),
            end  : new Date(y, m, d + 24, 4, 0)
        }
    ];

    $('#calendar-view').fullCalendar({
        events            : events,
        dayNames          : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort     : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        editable          : true,
        eventLimit        : true,
        header            : '',
        handleWindowResize: false,
        aspectRatio       : 1,
        viewRender        : function (view)
        {
            console.log(view);
            calendarView = view;
            calendar = view.calendar;

            $('#calendar-view-title').text(view.title);

            $('#calendar > .page-header').removeClass(currentMonthShort);
            currentMonthShort = calendar.getDate().format('MMM');
            $('#calendar > .page-header').addClass(currentMonthShort);

        },
        // columnFormat      : {
        //     month: 'ddd',
        //     week : 'ddd D',
        //     day  : 'ddd M'
        // },
        eventClick        : eventClick,
        selectable        : true,
        selectHelper      : true,
        dayClick          : dayClick
    });

    /**
     * Show event detail
     */
    function eventClick(calEvent, jsEvent, view)
    {

        alert('Event: ' + calEvent.title);
        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        // alert('View: ' + view.name);

        // change the border color just for fun
        // $(this).css('border-color', 'red');
    }

    /**
     * Add new event in between selected dates
     */
    function dayClick(date, jsEvent, view)
    {

        alert('Clicked on: ' + date.format());

        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        // alert('Current view: ' + view.name);

        // change the day's background color just for fun
        // $(this).css('background-color', 'red');
    }

    $('#calendar-next-button').click(function ()
    {
        calendar.next();
    });

    $('#calendar-previous-button').click(function ()
    {
        calendar.prev();
    });


    $('#calendar-today-button').click(function ()
    {
        calendar.today();
    });

    $('#calendar .page-header .change-view').click(function ()
    {
        calendar.changeView($(this).data('view'));
    });

})();