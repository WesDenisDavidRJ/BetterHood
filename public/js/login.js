// Materliaze js component
$(document).ready(function () {
    $('.parallax').parallax();

    $('.modal').modal();
});
var firstName;
var lastName;
var userEmail;
var userPassword;
var confirmPassword;
var userDescrip;
var loginEmail;
var userLogin;


$('#modal-create-account').on("click", function () {
    if ($("#user-password").val().trim() != $("#confirm-password").val().trim()) {
        alert("Passwords do not match.");
    } else if ($('#user-first-name').val() == "" ||
        $('#user-last-name').val() == "" ||
        $('#user-email').val() == "" ||
        $('#user-password').val() == "" ||
        $('#confirm-password').val() == "") {
        alert("Please fill in missing info");
    } else {
        firstName = $('#user-first-name').val();
        lastName = $('#user-last-name').val();
        userEmail = $('#user-email').val();
        userPassword = $('#user-password').val();
        confirmPassword = $('#confirm-password').val();
        userDescrip = $('#user-descrip').val();
        $('#modal1').modal('close');
        // clear the Event Search fields
        $('#user-first-name').val("");
        $('#user-last-name').val("");
        $('#user-email').val("");
        $('#user-password').val("");
        $('#confirm-password').val("");
        $('#user-descrip').val("");
    }
  
  });
  
