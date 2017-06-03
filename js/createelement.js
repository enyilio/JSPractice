var el = document.createElement('em');
el.textContent = "1234";

var cc = document.querySelector('.title').appendChild(el);

console.log(cc);


//使用for情況，像是在陣列及物件中可使用 

var farm = [{

	farmer:'艾希',
	dogs:['小黃','小輝'],

},
{

	farmer:'小茶',
	dogs:['小潮','小名'],

}];


var farmlen = farm.length;

//選定要新增元素的父選擇器.good
var el = document.querySelector('.good');

for (var i = 0; i < farmlen; i++) {

	//新增'li'元素，並存入變數str
	var str = document.createElement('li');

	str.textContent = farm[i].farmer; 
	
	//將str = li放置.good子層底下
	el.appendChild(str);

}


