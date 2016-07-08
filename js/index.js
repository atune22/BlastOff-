var rockMargin;

var rockArray = [550,700,850,1000,1150]

var num = 850; 

var rightMove = function () {
	num += 150;
	document.getElementById('ship').style.marginLeft = num + "px";
}
var leftMove = function () {
	num -= 150;
	document.getElementById('ship').style.marginLeft = num + "px";
}
var rockPosition = function(){
  rockMargin = Math.floor(Math.random()*5);
  console.log(rockMargin);
  document.getElementById('rockThing').style.marginLeft = rockArray[rockMargin] + "px";
}


var topSpace = 0;

var movement = function() {
	setInterval(function() {
		check();
		moveit();
		console.log(topSpace);
	},50);
}

var moveit = function() {
	topSpace = topSpace + 10;
	document.getElementById('rockThing').style.marginTop = topSpace +"px";
}

var check= function() {
	if (topSpace > 300){
		if ( num == rockMargin){
			alert("Game Over") 
		} else{
			topSpace = 0;
		
		}

	}

}

movement();