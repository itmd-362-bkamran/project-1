function init(){
//add your javascrip between these two lines of code

document.getElementById('button').addEventListener('click', function(){
	alert('Babar Kamran: ' + document.getElementById('password').value);
	document.getElementById('textoutput').innerHTML = document.getElementById('entryinput').value;
});

}
 
window.addEventListener('load', init);
