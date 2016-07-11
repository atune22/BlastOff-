var rockMargin;

var rockArray = [100,250,400,550,700,850,1000,1150,1300,1450,1600]

var num = 850; 

document.getElementById('rockThing').style.marginLeft = rockArray[2] + "px";

var rightMove = function () {
	num += 150;
	document.getElementById('ship').style.marginLeft = num + "px";
}
var leftMove = function () {
	num -= 150;
	document.getElementById('ship').style.marginLeft = num + "px";
}
var rockPosition = function(){
  rockMargin = Math.floor(Math.random()*11);
  console.log(rockMargin);
  document.getElementById('rockThing').style.marginLeft = rockArray[rockMargin] + "px";
}


}
var topSpace = 0;

var movement = function() {
	setInterval(function() {
		check();
		moveit();
	},10);
}

var moveit = function() {
	topSpace = topSpace + 10;
	document.getElementById('rockThing').style.marginTop = topSpace +"px";
}

var check= function() {
	if (topSpace > 600){
		if ( num == rockArray[rockMargin]){
			alert("Game Over! Restart and close to try again.")

		} else{
			rockPosition();
			topSpace = 0;
			console.log(rockArray[rockMargin]);
			console.log(num);
			score();
		}

	}
 
}
var score = function() {
	Uscore++;
	document.getElementById('ascore').innerHTML
}
movement();