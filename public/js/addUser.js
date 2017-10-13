//Wes update

// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#ID to add user Denis").on("submit", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newUser = {
    firstName: $("#ID frirstname Denis").val().trim(),
    lastName: $("#ID lastname Denis").val().trim(),
    email: $("#ID email Denis").val().trim(),
    phone: $("#ID phone Denis").val().trim()
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