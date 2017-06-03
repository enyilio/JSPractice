
//物件陣列

var farm = [{

	farmer:'John',
	field:6,
	chick:120

},
{
	farmer:'Sam',
	field:10,
	chick:110

},
{
	farmer:'Allen',
	field:3,
	chick:70

}]

	var farmTotal = farm.length;
	var chickTotal = 0;

//   初始狀態;條件;更新內容
for (var i=0; i < farmTotal; i++){

	console.log(farm[i].chick);

	if (farm[i].chick>100) {

		console.log(farm[i].farmer+'的農場有'+farm[i].chick+'隻雞');
	}

for (var i = 0; i < farmTotal; i++) {
	
		chickTotal += farm[i].chick;

}
	
console.log('今年的雞隻飼養量達:'+chickTotal+'隻');

}




