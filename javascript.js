
/**
 * Class journalApplication that creates the journal Application.
 * @param {string} username the username of the user.
 * @param {string} email, the email of the user.
 * @param {string} password, the password of the user.
 * @param {array} notes the array of notes of a particular user.
 * @constructor
 */
var journalApplication = function (username, email, password) {
//constructor for NoteApplication Class
  this.username = username;
  this.email = email;
  this.password  = password;
  this.notes = [];
};

journalApplication.prototype.create = function() {
  var object = {};
  object.topic = document.getElementById('topic');
  object.content = document.getElementById('content');
  return this.notes.push(object);
}

journalApplication.prototype.validate = function (){
	var username = document.getElementById("username");
	var password = document.getElementById("pword");
	
	if(username == "admin" && password == "password"){
		alert("Successful Login");
		window.location(success.html);
	} else {
    (alert("Login Unsucessful"));
  }
}
