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


var topSpace = 0;

var movement = function() {
	setInterval(function() {
		check();
		moveit();
	},10);
}

var GameOver = function() {
	document.getElementById('yousuk').innerHTML = " Game Over! ";
	topSpace = 0;
	document.getElementById('rockThing').innerHTML = "";
}

var moveit = function() {
	topSpace = topSpace + 10;
	document.getElementById('rockThing').style.marginTop = topSpace +"px";
}

var check= function() {
	if (topSpace > 400){
		if ( num == rockArray[rockMargin]){
			GameOver();

		} else{
			rockPosition();
			topSpace = 0;
			console.log(rockArray[rockMargin]);
			console.log(num);
			score();
		}

	}
 
}

var Uscore = 0;
var score = function() {
	Uscore++;
	document.getElementById('ascore').innerHTML = " Your Score: " + Uscore;
};
movement();





document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
       leftMove();
    }
    else if (e.keyCode == '39') {
       // right arrow
       rightMove();
    }

}