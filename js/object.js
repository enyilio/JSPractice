
//物件＋function
var farm = {
	farmer:'卡斯伯',
	dog:['詹姆士','龐德'],
	duck:3,
	chick:10,
	goDinner: function (){
		console.log(farm.farmer+'該回家吃晚餐了');
	},

	poutryTotal: function(){
		var num = farm.chick + farm.duck;
		console.log('農場總共有'+num+'隻家禽');
	}
};

//在farm物件中加入chick:15
farm.chick = 15;

//執行farm物件中的function
farm.goDinner();
farm.poutryTotal();

var dog1 = farm.dog[0];

console.log(farm);

console.log(farm.chick);
console.log(farm.dog);
console.log(farm.dog[0]);
console.log('農場裡的第一隻狗'+dog1);

