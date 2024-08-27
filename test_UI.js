function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('TEST MENU')
  .addItem('Delete This Row', 'delete_row')
  .addSeparator()
  .addItem('Delete with confirmation', 'delete_row_with_confirmation')
  .addSeparator()
  .addItem('New Sheet', 'create_new_sheet')
  .addToUi();
}


function delete_row(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var active_cell = sheet.getActiveCell();
  var active_row = active_cell.getRow();
  sheet.deleteRow(active_row);
  var ui = SpreadsheetApp.getUi();
  ui.alert('successfully deleted !');
}


function delete_row_with_confirmation(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var active_cell = sheet.getActiveCell();
  var active_row = active_cell.getRow();
  var ui = SpreadsheetApp.getUi();
  var res = ui.alert("Do you want to delete this row?", ui.ButtonSet.YES_NO);
  if (res == ui.Button.YES){
   sheet.deleteRow(active_row);
  ui.alert('successfully deleted !');

  }else{
  ui.alert('operation canceled');

  }

}




function create_new_sheet(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();
  var res = ui.prompt("name of sheet?", ui.ButtonSet.OK_CANCEL);
  if (res.getSelectedButton() == ui.Button.OK){
    var new_sheet_name = res.getResponseText();
    if (new_sheet_name.toString().trim().length > 0){
      ss.insertSheet(new_sheet_name);

    }else{
      ui.alert('there must be at least one character to create a sheet')
    }
  }
}