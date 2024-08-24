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
  var range = sheet.getRange('A1'); // get the cell
  var value = range.getValue(); // get the cell's value

  Logger.log(value);
}


/*
you can access the range of values by using Spread sheet >>
ss.getValue("<sheet_name>!cell_begin:cell_end")
*/



function read_write_spread_sheet(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // get value >
  var sheet1 = ss.getSheetByName("sheet_num_1");
  var value1 = sheet1.getRange("e6").getValue();
  var value2 = sheet1.getRange("i12").getValue();
  var sum = value1 + value2;
  // set value >
  var sheet2 = ss.getSheetByName("output");
  sheet2.getRange('d5').setValue(sum);

  // change the style of the content
  var s3  = ss.getSheetByName("Sheet3")
  var value1 = s3.getRange("d7")
  value1.setBackground('yellow').setFontSize(14)

  // delete the content and the style
  value1.clearContent().clearFormat()

}



function newTask(){
  var s1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet_num_1"); // get wanted sheet from your spreadsheet
  var s_name = s1.getRange('b5').getValue();
  var sheet_name = s1.getRange("b6").getValue();
  var cell = s1.getRange("b7").getValue();
  var value = s1.getRange("b8").getValue();
  var new_spreadsheet = SpreadsheetApp.create(s_name); // create new spreadsheet
  var new_spreadsheet_url = new_spreadsheet.getUrl(); // get url of created spreadsheet
  var new_sheet =  new_spreadsheet.insertSheet(sheet_name); // new sheet
  new_sheet.getRange(cell).setValue(value);
  s1.getRange("b9").setValue(new_spreadsheet_url);

}

/*
deleting sheet >
sheet.deleteSheet()
rename sheet >
sheet.setName()
 */




function read_range(){
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("2D")
  var r = sheet.getRange(1,1,7,3).getValues(); //start_row, start_column, end_row, end_column
  var r = sheet.getRange('A1:C5').getValues(); //start : end
  var s = sheet.getDataRange().getValues(); // retrieve all the data and returns it range and then values
}


/*
reading and writing 2D array on a sheet
 */
function read_write_data(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet4");
  var data = ss.getDataRange().getValues(); // reading the data from sheet4
  var new_sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("reading_writing_sheet"); // adding new sheet
  // you should tell the sheet where do you want to paste the data
  new_sheet.getRange(10,1,data.length, data[0].length).setValues(data); // write the data into new sheet
  var output_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("reading_writing_sheet")
  var end_of_row = output_sheet.getLastRow(); // last row of the sheet
  var next_row_to_write = end_of_row + 3;
  output_sheet.getRange(next_row_to_write,1,data.length, data[0].length).setValues(data)

}
