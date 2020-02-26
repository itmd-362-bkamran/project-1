function init(){
//add your javascrip between these two lines of code

document.getElementById('button').addEventListener('click', function(){
	var pw = document.getElementById('password').value;
	var pw1 = document.getElementById('input_float_pw').value;
	var email = document.getElementById('email').value;
	var regex = /^[A-Za-z0-9 ]+$/;
	if ( pw != pw1) {
		alert('Your passwords dont match please try again');
	}else {
        var isValid = regex.test(pw);
        if (isValid) {
            alert("Your password must contain at least one special character to proceed");
        } else {
            alert("Password passes requirements");
			document.getElementById("myform").submit();
        }
    }
	if (email != 'a') {
	alert('test');
	}else {
		document.getElementById("myform").submit();
	}
});

}

 
window.addEventListener('load', init);
