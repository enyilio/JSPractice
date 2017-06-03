var body = document.body;

function goRocket(e){
	//查詢keyCode代碼
	console.log(e.keyCode);

	//將e.ketCode代碼帶入switch
	switch (e.keyCode) {
		//按數字鍵1時，選取.rocket-1元素，改變其屬性質。
		case 49:
			document.querySelector('.rocket-1').style.bottom = "1000px";
			break;
		//按數字鍵2時，選取.rocket-1元素，改變其屬性質。
		case 50:
			document.querySelector('.rocket-2').style.bottom = "1000px";
			break;
		//按數字鍵3時，選取.rocket-1元素，改變其屬性質。
		case 51:
			document.querySelector('.rocket-3').style.bottom = "1000px";
			break;
		default:
			// statements_def
			break;
	}

}


body.addEventListener('keydown',goRocket,false);