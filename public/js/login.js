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

  ///////////////////////////
// GAUTHSOME START

// This is automatically called via the onload parameter in the platform.js <script> tag.
function gapiInit() {
  
      // Load the auth2 module into the Google API object.
      gapi.load('auth2', function() {
  
          console.log('Loaded auth2');
          let googleUser;
  
          // Init the auth2 module with our client ID
          // https://developers.google.com/identity/sign-in/web/devconsole-project
          const googleAuth = gapi.auth2.init({
              client_id: '495769109297-e2mgpt6k8ca1u9r8n248tombmr1egva1.apps.googleusercontent.com'
          });
  
          // Wait until the auth module is finished loading via a Promise.
          googleAuth.then(() => {
  
              // The user may have gotten automatically signed-in via Google.
              if (googleAuth.isSignedIn.get()) {
                  console.log('User was logged in on page load.')
                  validateUser(googleAuth.currentUser.get());
              }
  
              // Listen for changes in the user's signed-in status.
              googleAuth.isSignedIn.listen((signedIn) => {
                  if (signedIn) {
                      console.log('User just signed in manually.');
                      validateUser(googleAuth.currentUser.get());
                  } else {
                      console.log('User just signed out.');
                  }
              });
          }, (error) => console.error(error));
  
      });
  }
  
  const validateUser = (user) => {
      console.log(`ID Token: ${user.getAuthResponse().id_token}`);
  
      const profile = user.getBasicProfile();
      console.log(`ID: ${profile.getId()}`);
      console.log(`Name: ${profile.getName()}`);
      console.log(`Email: ${profile.getEmail()}`);
      console.log(`ImageUrl: ${profile.getImageUrl()}`);
  
      // 1. Send the token to the backend...
      // 2. so that we can use the google-auth-library to...
      // 3. verify whether the info is valid or if a malicious user is spoofing a Google account.
      $.get(`/api/auth?token=${user.getAuthResponse().id_token}`)
          .then((response) => {
              console.log('Response from /api/auth:', response);
  
              if (response.valid) {
                  // The 'sub' key should be the same as the Profile ID we printed out on line 5 here.
                  $("#reserve-unique-id").val(response.sub);
              } else {
                  // The backend authetnication failed. The front-end user was trying to spoof
                  // and impersonate a Google account.
                  console.error(response.error);
              }
          });
  };
  
  
  // GAUTHSOME END
  
  });
  
