/*
MERGE TABS USING UI and making it automated task using TRIGGERS

A company have N number of sales people
every each of them enters their daily summary in one tab
we want to merge these to one master tab with some extra data like 'date'
 */




project_link = "https://docs.google.com/spreadsheets/d/1kz3_bHr2wucfnPEebiKmvKAhZSXsSdWKZ2W5GMMSun8/pubhtml"


function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('MERGE').addItem('Merge Now', 'merge_tabs').addToUi();
}

function merge_tabs() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var setting_tab = ss.getSheetByName('settings');
  var sales_rep = setting_tab.getRange("A:A").getValues();
  var master_tab = ss.getSheetByName("master")
  var date = new Date();
  for(var i=1; i<sales_rep.length; i++){
    var this_sales_rep = sales_rep[i][0];
    if(this_sales_rep.toString().trim().length == 0){continue}
    var sheet = ss.getSheetByName(this_sales_rep)
    var data = sheet.getDataRange().getValues();
    data.shift();
    var final_tab = [];
    if(data.length <= 0){continue}
    for (var a=0;a<data.length;a++){
      var this_row = data[a];
      this_row.unshift(this_sales_rep);
      this_row.unshift(date);
      final_tab.push(this_row)
    }
    var next_row = master_tab.getLastRow() + 1;
    master_tab.getRange(next_row, 1, final_tab.length, final_tab[0].length).setValues(final_tab);
    sheet.getRange('A2:C').clearContent();
  }
}
