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

// $('#create-account').on("click", function () {
//     console.log("hello from Signup!!!!")
// })

// $('#login-account').on("click", function () {
//     console.log("hello from login!!!!")
// })

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



    // console.log("Close login modal!!");
    // console.log(firstName);
    // console.log(lastName);
    // console.log(userEmail);
    // console.log(userPassword);
    // console.log(confirmPassword);
    // console.log(userDescrip);

})

$('#modal-login-account').on("click", function () {
    if ($('login-email').val() == "" ||
        $('user-login').val() == "") {
    } else {
        loginEmail = $('#login-email').val();
        userLogin = $('#user-login').val();
    }
    //clear the Event Search fields
    $('#login-email').val("");
    $('#user-login').val("");
    console.log("Close login modal!!");
    console.log(loginEmail);
    console.log(userLogin);
    $('#modal2').modal('close');
})

