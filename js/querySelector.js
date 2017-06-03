// var HL = document.getElementById('titleId');

//querySelector可選取Id或者Class甚至後代選擇器
var HL = document.querySelector('.titleClass em');

HL.textContent="好";


//querySelectorAll是選取陣列，可依相同Class各別制定不同的動作
var ALL = document.querySelectorAll('.titleClass em');



var ALLLen = ALL.length;

for (var i = 0; i < ALLLen; i++) {
 	ALL[i].textContent = i+1+'Lemon';
 } 