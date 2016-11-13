 
var widget = new TimekitBooking();
 
 widget.init({
        name:' ',
        email:    'marty.mcfly@timekit.io',
        apiToken: 'XT1JO879JF1qUXXzmETD5ucgxaDwsFsd',
        calendar: '22f86f0c-ee80-470c-95e8-dadd9d05edd2',
        fullCalendar: {
            lang:'sk',
            views: {
                agenda: {
                   minTime:'06:00:00',
                   maxTime:'18:00:00'
                }
            }c
            /*businessHours: {
             // days of week. an array of zero-based day of week integers (0=Sunday)
                dow: [ 1, 2, 3, 4 ], // Monday - Thursday

                start: '10:00', // a start time (10am in this example)
                end: '18:00', // an end time (6pm in this example)
            }*/
        },
        timekitFindTime: {
             future:       '4 weeks',      // Default, how long time into the future that timeslots should be returned
             length:       '30 minutes',       // Default, the duration of the bookable timeslots
            // emails:       [config.email] // Inserted dynamically from the "email" setting in the general config
        },
        bookingFields: {
                name: {
                    placeholder: 'Zadajte celé meno',
                    required:true
                },
                email: {
                    placeholder: 'Zadajte email',
                    disabled: true
                },
                comment: {
                    enabled: true,
                    placeholder: 'Napíšte správu',
                    required: false
                },
                phone: {
                    placeholder: 'Zadajte telefónne číslo',
                    enabled: true,
                    required: true
                }
        },
        localization: {
            showTimezoneHelper: false, // Should the timezone difference helper (bottom) be shown?
            timeDateFormat: '24h-dmy-mon', // US-style per default. For EU-style formatting, use '24h-dmy-mon'
            bookingDateFormat: 'D MMMM, YYYY', // Override the default date format on the booking page
            bookingTimeFormat: 'HH:mm', // Override the default time format on the booking page
            strings: { // Customize string used in the widget, defaults are shown below
                 submitText: 'Objednať',
                 successMessageTitle: 'Ďakujeme!',
                 successMessageBody: 'Objednávka bola odoslaná.',
                 timezoneHelperLoading: 'Loading..'
            }
        }, 
       
    
     });
