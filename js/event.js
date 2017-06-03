var el = document.querySelector('.btnOn');

//e可以顯示所有監控的事件與數據
el.onclick = function(e){

	console.log(e);

};



//使用onclick僅能綁定一個執行函數

var elOn = document.querySelector('.btnOn');

elOn.onclick = function(){

	alert('on-1');

};

elOn.onclick = function(){

	alert('on-2');

};



//使用addEventListener可綁定多個執行函數

var eladd = document.querySelector('.btnAdd');
eladd.addEventListener('click', function(){

	alert('add-1');

}, false);

eladd.addEventListener('click', function(){
	alert('add-2');
}, false);




//false (事件氣泡 - event Bubbling 從指定元素向上找
//true (事件捕捉 - event capturing) 從最上層向下找
var al = document.querySelector('.evelia');
al.addEventListener('click',function(e){
	
//stopPropagation是指執行此函數後，就停止執行接下來的工作。
	e.stopPropagation();
	alert('點選li');

}, false);

var acl = document.querySelector('.eveul');

acl.addEventListener('click', function(){

	alert('出現ul');

}, false);




//preventDefault為取消元素默認行為

var st = document.querySelector('.stopD4');
st.addEventListener('click', function(e){

	
	e.preventDefault();

}, false);


//e.target 顯示點選元素

var F1 = document.querySelector('.bd');

F1.addEventListener('click',function(e){

	console.log(e.target);

}, false);



