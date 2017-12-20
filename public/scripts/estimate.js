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
var iPhone_5c = document.getElementById('model_5c');
var iPhone_5 = document.getElementById('model_5');
var dispPrice = document.getElementById('price');


var prices =  ["50", "60", "70", "80", "100", "120"];
dispPrice.innerHTML = "0";
iPhone_7p.addEventListener('click', () => {
    dispPrice.innerHTML = prices[5];
});
iPhone_7.addEventListener('click', () => {
    dispPrice.innerHTML = prices[4];
});
iPhone_6sp.addEventListener('click', () => {
    dispPrice.innerHTML = prices[3];
});
iPhone_6s.addEventListener('click', () => {
    dispPrice.innerHTML = prices[2];
});
iPhone_6p.addEventListener('click', () => {
    dispPrice.innerHTML = prices[2];
});
iPhone_6.addEventListener('click', () => {
    dispPrice.innerHTML = prices[1];
});
iPhone_5se.addEventListener('click', () => {
    dispPrice.innerHTML = prices[1];
});
iPhone_5s.addEventListener('click', () => {
    dispPrice.innerHTML = prices[1];
});
iPhone_5c.addEventListener('click', () => {
    dispPrice.innerHTML = prices[0];
});
iPhone_5.addEventListener('click', () => {
    dispPrice.innerHTML = prices[0];
});

function issueSel() {
  document.getElementById('cracked_screen').onclick = function() {
    alert('cracked screen selected');
  }



}

function request () {
  var userInput = document.getElementById("userInput").value;
  alert(userInput);
}
 /*

document.getElementById('target').addEventListener("click", function(){

});

function updatePrice() {
  document.getElementById('total_cost').innerHTML = function that returns num ;
};
*/
