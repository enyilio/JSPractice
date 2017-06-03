
//飢餓程度1~10
var hungry = 3;


function eat(food){

	console.log('我現在要吃'+food);
}

if (hungry <=3 ) {

	eat('pizza');

}else if (hungry>4 && hungry<7 ) {
	eat('sala');
}else {
	console.log('我現在很飽');
}