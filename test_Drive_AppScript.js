// All files in drive
function get_all_files() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Files');


  var files = DriveApp.getFiles();
  var final = [];

  while (files.hasNext())
  {
    var one_file = files.next();
    var name = one_file.getName();
    var url = one_file.getUrl();
    var id = one_file.getId();
    var owner = one_file.getOwner();
    var size = one_file.getSize();
    var file_type = one_file.getMimeType();
    var temp = [name, url, id, owner, size, file_type];
    sheet.appendRow(temp);
  }
}

// all files in the root
function get_all_files_from_root() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Files');

  var root = DriveApp.getRootFolder();

  var files = root.getFiles(); //only those files that are present in my root

  var final = [];

  while (files.hasNext())
  {
    var one_file = files.next();
    var name = one_file.getName();
    var url = one_file.getUrl();
    var id = one_file.getId();
    var owner = one_file.getOwner();
    var size = one_file.getSize();
    var file_type = one_file.getMimeType();
    var temp = [name, url, id, owner, size, file_type];
    sheet.appendRow(temp);
  }
}

// move files in drive
function transfer_files(){
  var source_folder_id = "1t_-2v3QmS9NkszWNiTt5BrrNeY5LShS1";
  var target_folder_id = "1pBiGjnsTifMEVfIvD4IBUZUwX4QmC8jO";


  var source_folder = DriveApp.getFolderById(source_folder_id);
  var target_folder = DriveApp.getFolderById(target_folder_id);

  var source_files = source_folder.getFiles()

  while (source_files.hasNext()){
    var this_file = source_files.next();
    this_file.moveTo(target_folder);

  }

}

// rename folder/files
function rename_folders(){
  var source_folder_id = "1t_-2v3QmS9NkszWNiTt5BrrNeY5LShS1";
  var target_folder_id = "1pBiGjnsTifMEVfIvD4IBUZUwX4QmC8jO";


  var source_folder = DriveApp.getFolderById(source_folder_id);
  var target_folder = DriveApp.getFolderById(target_folder_id);

  source_folder.setName('Source Folder');
  target_folder.setName('Traget Folder');

}






