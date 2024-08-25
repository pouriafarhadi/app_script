/*
MERGE TABS

A company have N number of sales people
every each of them enters their daily summary in one tab
we want to merge these to one master tab with some extra data like 'date'

 */

project_link = "https://docs.google.com/spreadsheets/d/1Whk5EVL74vY7NmRZTGthEirMtF0wEIak5kjWykaNQIg/pubhtml"


function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var master_sheet = ss.getSheetByName("master");
  var salesPersons_list = ss.getSheetByName("settings").getDataRange().getValues();

  for (var person=1; person < salesPersons_list.length; person++){
    var sheet_name = salesPersons_list[person][0];
    var this_person_sheet = ss.getSheetByName(sheet_name)
    var this_person_data = this_person_sheet.getRange("A2:C2").getValues();
    this_person_data = this_person_data[0]
    var date = new Date();
    this_person_data.unshift(sheet_name)
    this_person_data.unshift(date)

    /*
    // method number ONE
    // preparing the data for adding it to the master sheet
    var data = []
    data.unshift(this_person_data)

    // inserting to master sheet
    var next_row_in_master = master_sheet.getLastRow() + 1;
    master_sheet.getRange(next_row_in_master, 1, data.length, data[0].length).setValues(data)
    */

    // method number TWO
    master_sheet.appendRow(this_person_data)
  }
}

