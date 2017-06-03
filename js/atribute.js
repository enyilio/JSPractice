var LK = document.querySelector('.titleClass a');

LK.setAttribute('href', 'http://google.com.tw');

var LK2 = document.querySelector('.str');

//setAttribute增加屬性及其值
LK2.setAttribute('id','strId');

//使用getAttribute直接去抓取該署性值
var LU = document.querySelector('.titleClass a').getAttribute('href');
console.log(LU);