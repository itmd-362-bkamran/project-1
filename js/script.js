function init(){
//add your javascrip between these two lines of code

document.getElementById('button').addEventListener('click', function(){
	var pw = document.getElementById('password').value;
	var pw1 = document.getElementById('input_float_pw').value;
	if ( pw != pw1) {
		alert('Your passwords dont match please try again');
	}else {
		var regex = /^[A-Za-z0-9 ]+$/
        var isValid = regex.test(pw);
        if (isValid) {
            alert("Your password must contain at least one special character to proceed");
        } else {
            alert("Password passes requirements");
        }
 
        return isValid;
    }
});

}
 
window.addEventListener('load', init);
