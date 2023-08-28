'use strict';

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT', true);


xhr.send();

xhr.addEventListener('readystatechange', function() {

if (xhr.readyState == 4 && xhr.status == 200) {
let GG  = JSON.parse(xhr.responseText)
document.querySelector('#a14').innerHTML = 'Курс Битка ' + GG.price
}
})
b1.addEventListener('click',function(){

})