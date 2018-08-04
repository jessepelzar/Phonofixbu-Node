// generate prices
var other = document.getElementById('other');
var iPhone_7p = document.getElementById('model_7+');
var iPhone_7 = document.getElementById('model_7');
var iPhone_6sp = document.getElementById('model_6s+');
var iPhone_6s = document.getElementById('model_6s');
var iPhone_6p = document.getElementById('model_6+');
var iPhone_6 = document.getElementById('model_6');
var iPhone_5se = document.getElementById('model_5se');
var iPhone_5s = document.getElementById('model_5s');
var iPhone_8p = document.getElementById('model_8+');
var iPhone_8 = document.getElementById('model_8');
var dispPrice = document.getElementById('price');
var screens = [iPhone_5s, iPhone_5se, iPhone_6, iPhone_6p, iPhone_6s, iPhone_6sp, iPhone_7, iPhone_7p, iPhone_8, iPhone_8p];

var screen_prices = ["110", "100", "90", "80", "80", "70", "70", "60", "60", "60"];
//var screen_prices = ["60", "60", "60", "70", "70", "80", "80", "90", "100", "110"];
var battery_prices = ["25", "25", "25", "30", "35", "40", "45", "50", "55", "60"];
dispPrice.innerHTML = "0";

/// i can make a function that goes off when onclick. because
// onclick reloads the function, i can just have it run through each condition
// and only have to use one function

// make the for loop its own function

// check what buttons are selected
//
// calculate the price of each
//
// sum up the prices if multiple buttons are selected

//maybe make a recursive function that will keep checking if if any other buttons have been selected and then update
var issueScreen = 0;
var issueBattery = 0;

function crackedBttnSwap() {
  // check for cracked screen selected then for each model selected after, display price
  if (document.getElementById('cracked_screen').src == 'https://i.imgur.com/X7LBfvc.png') {
    document.getElementById('cracked_screen').src = 'https://i.imgur.com/zfp4i9q.png';
    issueScreen = 1;
  }
  // reset button on second click
  else if (document.getElementById('cracked_screen').src == 'https://i.imgur.com/zfp4i9q.png') {
    document.getElementById('cracked_screen').src = 'https://i.imgur.com/X7LBfvc.png';
    issueScreen = 0;
  }
}

function batteryBttnSwap() {
  if (document.getElementById('battery_dead').src == 'https://i.imgur.com/G0Il9Ur.png') {
    document.getElementById('battery_dead').src = 'https://i.imgur.com/LvlOmGn.png';
    issueBattery = 1;
  } else if (document.getElementById('battery_dead').src == 'https://i.imgur.com/LvlOmGn.png') {
    document.getElementById('battery_dead').src = 'https://i.imgur.com/G0Il9Ur.png';
    issueBattery = 0;
  }
}

function otherBttnSwap() {
  if (document.getElementById('other_button').src == 'https://i.imgur.com/nxvapaK.png') {
    document.getElementById('other_button').src = 'https://i.imgur.com/2rxLjRb.png';
  } else if (document.getElementById('other_button').src == 'https://i.imgur.com/2rxLjRb.png') {
    document.getElementById('other_button').src = 'https://i.imgur.com/nxvapaK.png';
  }
}

function blkBttnSwap() {
  if (document.getElementById('black_screen').src == 'https://i.imgur.com/9bgYHck.png') {
    document.getElementById('black_screen').src = 'https://i.imgur.com/m5iX4ll.png';
  } else if (document.getElementById('black_screen').src == 'https://i.imgur.com/m5iX4ll.png') {
    document.getElementById('black_screen').src = 'https://i.imgur.com/9bgYHck.png';
  }
}

function whiteBttnSwap() {
  if (document.getElementById('white_screen').src == 'https://i.imgur.com/OFffBeH.png') {
    document.getElementById('white_screen').src = 'https://i.imgur.com/qrXJOgG.png';
  } else if (document.getElementById('white_screen').src == 'https://i.imgur.com/qrXJOgG.png') {
    document.getElementById('white_screen').src = 'https://i.imgur.com/OFffBeH.png';
  }
}


var colors = document.getElementsByName('color');
for (var j = 0; j < colors.length; j++) {
  if (colors[j].checked) {
    var color = colors[j].value;
  }
}

// make update function on each of the colors or make a generate button
// that turns into the last step button
function update() {
  var models = document.getElementsByName('model');
  if (issueScreen == 0 && issueBattery == 0) {
    dispPrice.innerHTML = 0;
  }
  if (issueScreen == 1 ) {
    for (var i = 0; i < models.length; i++) {
      if (models[i].checked) {
        var model = models[i].value;
        dispPrice.innerHTML = screen_prices[i];
      }
    }
  }
  if (issueBattery == 1 ) {
    for (var i = 0; i < models.length; i++) {
      if (models[i].checked) {
        var model = models[i].value;
        dispPrice.innerHTML = battery_prices[i];
      }
    }
  }
  if (issueBattery == 1 && issueScreen == 1) {
    for (var i = 0; i < models.length; i++) {
      if (models[i].checked) {
        var model = models[i].value;
        dispPrice.innerHTML = parseInt(battery_prices[i]) + parseInt(screen_prices[i]);
      }
    }
  }


}

function submit() {
  var crackedScreenSel = document.getElementById('cracked_screen').src;
  var batteryDeadSel = document.getElementById('battery_dead').src;
  var otherSel = document.getElementById('other_button').src;
  var otherReq = document.getElementById('userInput').value;

  if (crackedScreenSel == 'https://i.imgur.com/zfp4i9q.png' && batteryDeadSel == 'https://i.imgur.com/LvlOmGn.png' && otherSel == 'https://i.imgur.com/2rxLjRb.png') {
    var issue = "cracked and battery and " + otherReq;
  } else if (crackedScreenSel == 'https://i.imgur.com/zfp4i9q.png' && batteryDeadSel == 'https://i.imgur.com/LvlOmGn.png') {
    var issue = "cracked and battery";
  } else if (batteryDeadSel == 'https://i.imgur.com/LvlOmGn.png' && otherSel == 'https://i.imgur.com/2rxLjRb.png') {
    var issue = "battery and " + otherReq;
  } else if (crackedScreenSel == 'https://i.imgur.com/zfp4i9q.png' && otherSel == 'https://i.imgur.com/2rxLjRb.png') {
    var issue = "cracked and " + otherReq;
  } else if (crackedScreenSel == 'https://i.imgur.com/zfp4i9q.png') {
    var issue = "cracked iPhone screen repair";
  } else if (batteryDeadSel == 'https://i.imgur.com/LvlOmGn.png') {
    var issue = "battery replcement";
  } else if (otherSel == 'https://i.imgur.com/2rxLjRb.png') {
    var issue = otherReq;
  } else if (document.getElementById('userInput').value == "" && document.getElementById('other_button').src == 'https://i.imgur.com/2rxLjRb.png') {
    alert('please specify the additional request or other issue you have');
  } else {
    alert('thank you' + " " + name + " " + 'we will contact you shortly');
  }
  //  var models = document.querySelector('input[name="model"]').value;
  var models = document.getElementsByName('model');
  for (var i = 0; i < models.length; i++) {
    if (models[i].checked) {
      var model = models[i].value;
    }
  }
  var colors = document.getElementsByName('color');
  for (var j = 0; j < colors.length; j++) {
    if (colors[j].checked) {
      var color = colors[j].value;
    }
  }

  var name = document.querySelector('input[id="NameInput"]').value;
  var contact = document.querySelector('input[id="ContactInput"]').value;

  alert("thank you" + " " + name + ", we will contact you shortly via " + contact + "\n" + "your request was for a " + issue + " for a " + color + ", " + model);

}

function reset() {
  document.getElementById('cracked_screen').src = 'https://i.imgur.com/X7LBfvc.png';
  document.getElementById('battery_dead').src = 'https://i.imgur.com/G0Il9Ur.png';
  document.getElementById('other_button').src = 'https://i.imgur.com/nxvapaK.png';
  document.getElementById('black_screen').src = 'https://i.imgur.com/9bgYHck.png';
  document.getElementById('white_screen').src = 'https://i.imgur.com/OFffBeH.png';
}
