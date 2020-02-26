function init(){
//add your javascrip between these two lines of code

document.getElementById('button').addEventListener('click', function(){
	if (document.getElementById('password').value) != document.getElementByClass('float').value)) {
		alert('Your passwords do not match, please try again.');
	}
	else {
	alert('you did it');
}
	document.getElementById('textoutput').innerHTML = document.getElementById('entryinput').value;
};

}
 
window.addEventListener('load', init);
