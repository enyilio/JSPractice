
//4.選取li元素
var List = document.querySelector('.list');
//1.選取表單元素
var area = document.getElementById('areaId');

var country = [{

	farmer:'理查',
	place:'前鎮區',
},{

	farmer:'艾咪',
	place:'苓雅區',
},{

	farmer:'卡斯',
	place:'前鎮區',
}];

var len = country.length;

//3.建立updateList內容
function updateList (e){

	var select = e.target.value;
	var str = ''

	for (var i = 0; i < len; i++) {
		if (select == country[i].place) {

			str+='<li>'+country[i].farmer+'</li>';

		}
	}
	//5.選取List插入html
	List.innerHTML = str;

};


//2.選取area後事件監聽，change表單內容更動時觸發, 執行函數updateList
area.addEventListener('change', updateList,false);

