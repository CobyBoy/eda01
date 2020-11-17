document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        events: [

            {
                title: 'Vacuna de Noviembre 1',
                start: '2020-11-08',
                end: '2020-11-08'
            },
            {
                title: 'Vacuna de Noviembre 2',
                start: '2020-11-27',
                end: '2020-11-27'
            },
            {
                title: 'Vacuna de Diciembre',
                start: '2020-12-15',
                end: '2020-12-15',

            },
            {
                title: 'Vacuna de Enero 1',
                start: '2021-01-08',
                end: '2021-01-08',

            },
            {
                title: 'Vacuna de Enero 2',
                start: '2021-01-21',
                end: '2021-01-21',

            },
            {
                title: 'Vacuna de Febrero ',
                start: '2021-02-07',
                end: '2021-02-07',

            },
            {
                title: 'Vacuna de Marzo 1',
                start: '2021-03-01',
                end: '2021-03-01',

            },
            {
                title: 'Vacuna de Marzo 2',
                start: '2021-03-25',
                end: '2021-03-25',

            },

            {
                title: 'Vacuna de Abril 1',
                start: '2021-04-08',
                end: '2021-04-08',

            },

            {
                title: 'Vacuna de Abril 2',
                start: '2021-04-20',
                end: '2021-04-20',

            }

        ]
    });

    calendar.render();
});