$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      }).catch(function(err) {
        console.log(err);
      });
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
  