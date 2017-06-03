var ca = document.querySelector('.list');
var show = document.querySelector('.show');
ca.addEventListener('click', checkname, false);

function checkname(e){

	if (e.target.nodeName !== "LI") {return};
	show.textContent = e.target.textContent;
}