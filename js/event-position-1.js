var screenX = document.querySelector('.screenX');        
var screenY = document.querySelector('.screenY');        
var pageX = document.querySelector('.pageX');        
var pageY = document.querySelector('.pageY');        
var clientX = document.querySelector('.clientX');        
var clientY = document.querySelector('.clientY');        

function getPosition(e) {      
//screen依螢幕解析度進行座標定位           
  screenX.textContent = e.screenX;                    
  screenY.textContent = e.screenY;
  
  //page依頁面寬度與高度進行座標定位                    
  pageX.textContent = e.pageX;                   
  pageY.textContent = e.pageY; 

  //client依瀏覽器寬高進行座標定位                    
  clientX.textContent = e.clientX;                   
  clientY.textContent = e.clientY;                  
}

var el = document.body;      
el.addEventListener('mousemove', getPosition, false); 