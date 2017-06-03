document.getElementById('butfood').onclick = function() {

    var prefer = document.getElementById('foodId').value;


    switch (prefer) {
        case '牛排':
            eat('牛排');
            break;
        case '泡菜':
            eat('泡菜');
            break;
        default:
            eat('白飯');
            break;
    }

    var eatfood;

    function eat(food) {

        if (food == '牛排') {
        	eatfood = '好，我給你吃牛排！';
        }else if (food =='泡菜') {
        	eatfood = '好，我給你吃泡菜！';
        }else {
        	eatfood = '抱歉，我現在只有白飯給你吃';
        }

    }

    document.getElementById('giveFood').textContent = eatfood;

}
