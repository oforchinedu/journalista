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