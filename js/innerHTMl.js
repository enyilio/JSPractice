//避免XSS(Cross site Scripting)攻擊。如果使用表單讓外部填寫時，盡量避免使用innerHTML
//使用innerHTML確保來源是信任資料

var al = document.querySelector('.text-center');

var hmt ='<h1 id="strId">我要</h1>';

al.innerHTML= hmt+hmt;


var el = document.querySelector('.list');

var link = 'http://google.com.tw';
var name = '劉寶尼';

el.innerHTML = '<li><a href="'+link+'" target="_blank">'+name+'</a></li>';


var farm = [

{

	farmer:'卡斯伯',
	dogs:['詹姆士','小龐'],

},{

	farmer:'查理',
	dogs:['皮皮']

}];

var bl = document.querySelector('.list');

var farmlen = farm.length;

console.log(farmlen);

var str ='';


for (var i = 0; i < farmlen; i++) {
	
	var content = '<li>'+farm[i].farmer+'</li>';
	str += content;

}

bl.innerHTML = str;

