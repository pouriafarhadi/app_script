/*
Document for Calendar Appscript is available
https://developers.google.com/apps-script/reference/calendar
 */

function write_calendar_in_sheet() {
    var start = new Date();
    var end = new Date();
    end.setDate(end.getDate()+2);

    var events = CalendarApp.getEvents(start, end);
    var final = [];

    for (var e=0;e<events.length;e++){
        var this_event = events[e];
        var id = this_event.getId();
        var title = this_event.getTitle();
        var start = this_event.getStartTime();
        var end = this_event.getEndTime();
        var location = this_event.getLocation();
        var temp = [id, title, start, end, location];
        final.push(temp);

    }
    if (final.length>0){
        var ss = SpreadSheetApp.getActiveSpreadSheet();
        var sheet = ss.getSheetByName('get Calendar');
        sheet.getRange(2,1,final.length, final[0].length).setValues(final);
    }
}