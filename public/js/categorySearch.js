function searchEventByCategory(params) {
  // Save the book they typed into the genre-search input
  var categorySearched = $("#search-category").val();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/events?category=" + categorySearched, function (data) {

    console.log(data);
    // Call our renderEvent function to add our events to the page
    // newArray = newArray.push(data);

  });
}