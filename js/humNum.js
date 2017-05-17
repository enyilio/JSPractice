
document.getElementById('countId').onclick = function(){
	
	//parseInt意指將變數型態轉換為整數值
	var humNum = parseInt(document.getElementById('hamNumid').value);
	var cokeNum = parseInt(document.getElementById('cokeNumid').value);
	var humPrice = humNum * 80;
	var cokePrice = cokeNum *30;
	var total = humPrice + cokePrice;
	document.getElementById('totalId').textContent = total;

	// typeof查詢變數型態
	console.log(typeof(humNum));
	console.log(humNum+cokeNum);

}