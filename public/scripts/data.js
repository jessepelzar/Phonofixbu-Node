var issue_cracked = document.getElementById('cracked_screen');
var issue_battery = document.getElementById('battery_dead');
var issue_other = document.getElementById('other_button');
var issue_sel = ["cracked screen", "battery replacement", "other"];

var iPhone_7p = document.getElementById('model_7+');
var iPhone_7 = document.getElementById('model_7');
var iPhone_6sp = document.getElementById('model_6s+');
var iPhone_6s = document.getElementById('model_6s');
var iPhone_6p = document.getElementById('model_6+');
var iPhone_6 = document.getElementById('model_6');
var iPhone_5se = document.getElementById('model_5se');
var iPhone_5s = document.getElementById('model_5s');
var iPhone_5c = document.getElementById('model_5c');
var iPhone_5 = document.getElementById('model_5');
var model_id = [
      'model_5' , 'model_5c',
      'model_5s', 'model_5se',
      'model_6' , 'model_6+',
      'model_6s', 'model_6s+',
      'model_7' , 'model_7+'
    ];
var model_sel = [
      'iPhone 5' , 'iPhone 5c',
      'iPhone 5s', 'iPhone 5se',
      'iPhone 6' , 'iPhone 6 Plus',
      'iPhone 6s', 'iPhone 6s Plus',
      'iPhone 7' , 'iPhone 7 Plus'
    ];

var screen_black = document.getElementById('black_screen');
var screen_white = document.getElementById('white_screen');
var color_sel = ['Black', 'White'];

function initIssueRes(issue_bttn) {
  if (issue_bttn == "cracked_screen") {
    buildStr(issue_bttn = issue_sel[0],"");
  }
  else if (issue_bttn == "battery_dead") {
    buildStr(issue_bttn = issue_sel[1],"");
  }
  else if (issue_bttn == "other_button") {
    buildStr(issue_bttn = issue_sel[2],"");
  }
  else {
    buildStr(issue_bttn = NULL,"");
  }
}
function modelRes(model_bttn) {
  for (i = 0; i < model_sel.length; i++) {
    if (model_bttn == model_id[i]){
    buildStr("", model_bttn = model_sel[i]);
    }
  }
}
var message = "";
function buildStr(issue, model) {
  message = issue + " " + model;
  updateReq(message);
}
function updateReq(message){
  console.log(message);
}


/*
function initIssueRes(issue_bttn) {
  if (issue_bttn == "cracked_screen") {
    buildStr(issue_bttn = issue_sel[0]);
  }
  else if (issue_bttn == "battery_dead") {
    buildStr(issue_bttn = issue_sel[1]);
  }
  else if (issue_bttn == "other_button") {
    buildStr(issue_bttn = issue_sel[2]);
  }
  else {
    buildStr(issue_bttn = NULL);
  }
}
function modelRes(model_bttn) {
  for (i = 0; i < model_sel.length; i++) {
    if (model_bttn == model_id[i]){
    console.log(i);
    buildStr(issue_bttn, model_bttn = model_sel[i]);
    }
  }
}
*/
/*
issue_cracked.addEventListener('click', function cracked(event) {
var message = issue_cracked.value(event);
}, false);

issue_battery.addEventListener('click', () => {

});

issue_other.addEventListener('click', () => {

});

*/




//console.log(issue_cracked.value);


/*
var issue_battery = "battery replacement";
var issue_other = "";
var color_black = "black";
var color_white = "white";
function (model_5.onclick){
  alert(message + "iPhone 5");
}
var model_5c = "iPhone 5c";
var model_5s = "iPhone 5s";
var model_5se = "iPhone 5se";
var model_6 = "iPhone 6";
var model_6s
*/
