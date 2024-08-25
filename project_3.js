/*

This project is same as project 1 and project 2 with a slight differences.

1. Every sale man have their own spreadsheet
> so you should make a spreadsheet and share the project with the specific contributor (sale man email) so they have the accessibility.

2. setting is different
Name of sales rep  |  Spreadsheet URL  |  Sheet Name  |  Commission %
Ali                |   https:// ...    |  e.g. revenue|  e.g. 15 %

*/


function onOpen()
{
  var ui = SpreadsheetApp.getUi();

  ui.createMenu('MERGE SS')
  .addItem('Merge Now','merge_spreadsheets')
  .addToUi();
}


function merge_spreadsheets() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var setting_tab = ss.getSheetByName('Setting');
  var setting_data = setting_tab.getDataRange().getValues();

  var master_sheet = ss.getSheetByName('Master');
  Logger.log(setting_data);

  var date = new Date();

  var final=[];


  for(var a=1; a<setting_data.length; a++)
  {
    var this_sales_rep = setting_data[a];
    var this_sales_rep_name = this_sales_rep[0];
    var this_sales_rep_url = this_sales_rep[1];
    var this_sales_rep_tab = this_sales_rep[2];
    var this_sales_rep_commission = this_sales_rep[3];

    if(this_sales_rep_name.toString().trim().length>0 && this_sales_rep_url.toString().trim().length>20 && this_sales_rep_tab.toString().trim().length>0 && this_sales_rep_commission.toString().trim().length>0)
    {
      var sales_ss = SpreadsheetApp.openByUrl(this_sales_rep_url);
      var sales_rep_sheet = sales_ss.getSheetByName(this_sales_rep_tab);
      var data = sales_rep_sheet.getDataRange().getValues();
      data.shift();

      for(var d=0; d<data.length; d++)
      {
        var temporary_row = data[d];
        var revenue = temporary_row[2];

        temporary_row.unshift(this_sales_rep_name);
        temporary_row.unshift(date);

        var commission = this_sales_rep_commission* revenue;
        temporary_row.push(commission);

        final.push(temporary_row);
      }

      sales_rep_sheet.getRange('A2:C').clearContent();

    }
  }

  if(final.length>0)
  {
    var next_row = master_sheet.getLastRow()+1;
    master_sheet.getRange(next_row,1,final.length, final[0].length)
    .setValues(final);
  }

}
