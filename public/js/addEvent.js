//Wes update

// The code in add.js handles what happens when the user clicks the "Add a Event" button.

// When user clicks add-btn
$("#ID to add user Denis").on("submit", function(event) {
  event.preventDefault();

  // Make a newEvent object
  var newEvent = {
    fdescription: $("#ID description Denis").val().trim(),
    address: $("#ID address Denis").val().trim(),
    date: $("#ID date Denis").val().trim(),
    image: $("#ID image Denis").val().trim(),
    category: $("#ID category Denis").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/events", newEvent)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#ID description Denis").val("");
  $("#ID address Denis").val("");
  $("#ID date Denis").val("");
  $("#ID image Denis").val("");
  $("#ID category Denis").val("");

});