// assign some values to some variables
function my_demo() {
 var a = 5;
 var b = 10;
 var c = a + b ;
    console.log(c)
}


// read data from spreadsheet
function read_from_spread_sheet(){
  var ss = SpreadsheetApp.getActiveSpreadsheet(); // get the spreadsheet
  var sheet = ss.getSheetByName('sheet_num_1'); // get the sheet
  var range = sheet.getRange('A1');
  var value = range.getValue();

  Logger.log(value);
}