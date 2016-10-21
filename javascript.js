function validate(username, password){
	
	var username = document.getElementById("username");
	var password = document.getElementById("pword");
	
	if(username == "admin" && password == "password"){
		alert("Successful Login");
		window.location(success.html);
		
	}
	else(alert("Login Unsucessful"))
}

validate("admin", "password")