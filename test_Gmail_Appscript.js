/*
Document for Gmail Appscript is available
https://developers.google.com/apps-script/reference/gmail
 */

function fetch_email() {
  var th = GmailApp.getInboxThreads(); // all the threads which can contain many emails
  // getInboxThreads(start_point, email amount) like > (0,20) > first 20 threads / (20,20) > start from 20th thread and go for another 20 threads
  for(var a=0; a<th.length;a++){
    var this_thread = th[a];
    var subject = this_thread.getFirstMessageSubject();
    var all_messages = this_thread.getMessages();
   for (var m=0; m<all_messages.length;m++){
      var this_messsage = all_messages[m];
      var from = this_messsage.getFrom();
      var to = this_messsage.getTo();
      var date = this_messsage.getDate();
      Logger.log('this messsage is from '+ from + ' and sent to '+to+ ' on date '+ date)
   }
  }
}


function get_email_based_on_search(){
  var q = "from:jobinja" // "in:sent" sent messages
  var thr  = GmailApp.search(q);
  for (var a=0;a<thr.length;a++)
  {
    var subject = thr[a].getFirstMessageSubject();
    Logger.log(subject);
  }

}


function text_indexOf(){
  var ar = ['apple','banana', 'mango'];
  var i = ar.indexOf('banana') // returns 1 | if you give it invalid params returns -1

}


function send_mail() {
  var to = 'p@p.com';
  var subject_line = "hey!";
  var body = 'hi. this is test mail';
  GmailApp.sendEmail(to, subject_line, body);
}


