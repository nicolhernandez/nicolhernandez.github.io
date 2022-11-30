/**
 * @param {string} boxID 
 */
function Unhidebox1(boxID) {
	document.getElementById('box-overlay1').classList.remove('hidden');
	document.getElementById(boxID).classList.remove("hidden");
}

function unhidebox1() {
	Unhidebox1("plate1");
}
document.getElementById("food3").onclick=unhidebox1;

function Unhidebox2(boxID) {
	document.getElementById('box-overlay2').classList.remove('hidden');
	document.getElementById(boxID).classList.remove("hidden");
}


function unhidebox2(){
	Unhidebox2("plate2");
}
document.getElementById("food4").onclick=unhidebox2;



function closebox(boxID) {
	document.getElementById('box-overlay1').classList.add('hidden');
	document.getElementById(boxID).classList.add("hidden");
}

function closeAllboxes() {
	var boxElements = document.getElementsByClassName('box');
	for (var i = 0; i < boxElements.length; i++) {
		var id = boxElements[i].id;
		closebox(id);
	}
}

document.getElementById("box-overlay1").onclick=closeAllboxes;

function closebox1(boxID) {
	document.getElementById('box-overlay2').classList.add('hidden');
	document.getElementById(boxID).classList.add("hidden");
}

function closeAllboxes1() {
	var boxElements = document.getElementsByClassName('box');
	for (var i = 0; i < boxElements.length; i++) {
		var id = boxElements[i].id;
		closebox1(id);
	}
}

document.getElementById("box-overlay2").onclick=closeAllboxes1;