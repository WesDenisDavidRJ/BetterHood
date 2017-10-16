//Wes update

// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#modal-create-account").on("submit", function(event) {
  
  console.log("clicked")

  // Make a newBook object
  var newUser = {
    firstName: $("#user-first-name").val().trim(),
    lastName: $("#user-last-name").val().trim(),
    userEmail: $("#user-email").val().trim(),
    phone: $("#user-phone").val().trim(),
    userPassword: $("user-password").val().trim(),
    userDescrip: $("#user-descrip").val().trim()
  

  };


  // Send an AJAX POST-request with jQuery
  $.post("/api/users", newUser)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#ID frirstname Denis").val("");
  $("#ID lastname Denis").val("");
  $("#ID email Denis").val("");
  $("#ID phone Denis").val("");

});