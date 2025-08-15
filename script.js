//your JS code here. If required.
let line=document.getElementById("line");
let rotateDeg= 0;
setInterval(function(){
	rotateDeg=rotateDeg+2;
	line.style.transform="rotate("+rotateDeg+"deg)";
},20)
