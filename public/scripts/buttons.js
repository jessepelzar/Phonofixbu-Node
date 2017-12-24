
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

var screen_prices =  ["60", "60", "60", "70", "70", "80", "80", "90", "100", "110"];
dispPrice.innerHTML = "0";

function crackedBttnSwap() {
  if (document.getElementById('cracked_screen').src == 'https://i.imgur.com/X7LBfvc.png') {
      document.getElementById('cracked_screen').src = 'https://i.imgur.com/zfp4i9q.png';
      for (let i = 0; i < screens.length; i++) {
        screens[i].addEventListener('click', () => {
            var battery_price = battery_prices[i];
            if (document.getElementById('battery_dead').src == 'https://i.imgur.com/LvlOmGn.png' && document.getElementById('battery_dead').src == 'https://i.imgur.com/LvlOmGn.png') {
              dispPrice.innerHTML = parseInt(screen_price[i]) + parseInt(battery_price);
            }
            else {
              dispPrice.innerHTML = screen_prices[i];
            }
        });
      }
    console.log('if');
  }
  else if (document.getElementById('cracked_screen').src == 'https://i.imgur.com/zfp4i9q.png') {
    document.getElementById('cracked_screen').src = 'https://i.imgur.com/X7LBfvc.png';
    dispPrice.innerHTML = "0";
    console.log('else');
  }
}
var battery_prices =  ["25", "25", "25", "30", "35", "40", "45", "50", "55", "60"];
function batteryBttnSwap() {
  if (document.getElementById('battery_dead').src == 'https://i.imgur.com/G0Il9Ur.png') {
    document.getElementById('battery_dead').src = 'https://i.imgur.com/LvlOmGn.png';

    for (let i = 0; i < screens.length; i++) {
      screens[i].addEventListener('click', () => {
          var screen_price = screen_prices[i];
          if (document.getElementById('battery_dead').src == 'https://i.imgur.com/LvlOmGn.png' && document.getElementById('battery_dead').src == 'https://i.imgur.com/LvlOmGn.png') {
            dispPrice.innerHTML = parseInt(screen_price) + parseInt(battery_prices[i]);
          }
          else {
            dispPrice.innerHTML = battery_prices[i];
          }
      });
    }
    console.log('if');
  }
  else if (document.getElementById('battery_dead').src == 'https://i.imgur.com/LvlOmGn.png') {
    document.getElementById('battery_dead').src = 'https://i.imgur.com/G0Il9Ur.png';
    dispPrice.innerHTML = "0";
    console.log('else');
  }
}

function otherBttnSwap() {
  if (document.getElementById('other_button').src == 'https://i.imgur.com/nxvapaK.png') {
    document.getElementById('other_button').src = 'https://i.imgur.com/2rxLjRb.png';
  }
  else if (document.getElementById('other_button').src == 'https://i.imgur.com/2rxLjRb.png') {
    document.getElementById('other_button').src = 'https://i.imgur.com/nxvapaK.png';
  }
}

function blkBttnSwap() {
  if (document.getElementById('black_screen').src == 'https://i.imgur.com/9bgYHck.png') {
    document.getElementById('black_screen').src = 'https://i.imgur.com/m5iX4ll.png';
  }
  else if (document.getElementById('black_screen').src == 'https://i.imgur.com/m5iX4ll.png') {
    document.getElementById('black_screen').src = 'https://i.imgur.com/9bgYHck.png';
  }
}

function whiteBttnSwap() {
  if (document.getElementById('white_screen').src == 'https://i.imgur.com/OFffBeH.png') {
    document.getElementById('white_screen').src = 'https://i.imgur.com/qrXJOgG.png';
  }
  else if (document.getElementById('white_screen').src == 'https://i.imgur.com/qrXJOgG.png') {
    document.getElementById('white_screen').src = 'https://i.imgur.com/OFffBeH.png';
  }
}



function reset() {
  document.getElementById('cracked_screen').src = 'https://i.imgur.com/X7LBfvc.png';
  document.getElementById('battery_dead').src = 'https://i.imgur.com/G0Il9Ur.png';
  document.getElementById('other_button').src = 'https://i.imgur.com/nxvapaK.png';
  document.getElementById('black_screen').src = 'https://i.imgur.com/9bgYHck.png';
  document.getElementById('white_screen').src = 'https://i.imgur.com/OFffBeH.png';
}
