var rockMargin;

var rockArray = [550,700,850,1000,1150]

var num = 850;

var rightMove = function () {
	num += 100;
	document.getElementById('ship').style.marginLeft = num + "px";
}
var leftMove = function () {
	num -= 100;
	document.getElementById('ship').style.marginLeft = num + "px";
}

var rockPosition = function(){
	rockMargin = Math.floor(Math.random()*5);
	console.log(rockMargin);
	document.getElementById('rockThing').style.marginLeft = rockArray[rockMargin] + "px";
}
rockPosition()



}
function leftArrowPressed() {
	var element = document.getElementById("image1");
	element.style.left = parseInt(element.style,left) - 5 + 'px';
