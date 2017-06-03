var myBill = 1250;
var VIP = false;

// &&=AB條件同時成立 ; 
// ||=AB其中一個條件成立;
var andCheck = myBill>1000 && VIP == true;
var orCheck = myBill>1000 || VIP == true;

if (myBill<1000 && VIP == false) {

	andCheck = '我都沒有';

}else if (myBill < 1000) {

	andCheck = '我消費沒有滿一千元';

}else if (VIP == false) {

	andCheck = '我不是VIP';

}else {
	andCheck = '我是會員也消費滿一千元';
}


if (myBill<1000 && VIP == false) {

	orCheck = '我都沒有';

}else if (myBill > 1000) {

	orCheck = '我消費有滿一千元';

}else if (VIP == true) {

	orCheck = '我是VIP';

}else {
	orCheck = '我是會員也消費滿一千元';
}

document.getElementById('andId').textContent = andCheck;
document.getElementById('orId').textContent = orCheck;


