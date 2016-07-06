
	var num = 5;

	var rightMove = function () {
		num += 100;
		document.getElementById('ship').style.marginLeft = num + "px";
	}
	var leftMove = function () {
		num -= 100;
		document.getElementById('ship').style.marginLeft = num + "px";
	}