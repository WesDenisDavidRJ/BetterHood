// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#ID to add user Dennis").on("submit", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newUser = {
    firstName: $("#ID frirstname Dennis").val().trim(),
    lastName: $("#ID lastname Dennis").val().trim(),
    email: $("#ID email Dennis").val().trim(),
    phone: $("#ID phone Dennis").val().trim()
  };


  // Send an AJAX POST-request with jQuery
  $.post("/api/books", newUser)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#ID frirstname Dennis").val("");
  $("#ID lastname Dennis").val("");
  $("#ID email Dennis").val("");
  $("#ID phone Dennis").val("");

});