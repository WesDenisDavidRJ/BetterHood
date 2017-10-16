//These variables will hold the lat and long that will be added to a event

let createLat;
let createLong;

//This will be the array that stores the results by event

let categoryResults = [];

//This will be the array that stores the results by date

let dateResults = [];

//The start date of the search param
let startDate;

//The end date of the search param
let endDate;

//This is going to be the results based on distance
let distanceResults = [];

//This will be the absolute result of the lat and long searched
let absLatNumSearched;
let absLngNumSearched;

//Variables that are created inside the click of the search event modal
let searchCategory;
let searchStartDate;
let searchEndDate;
let searchAddress;
let searchObj;
let googleLocationCreate;
let searchResults;
let googleLocation;

// load materialize component js
$(document).ready(function() {
  $("select").material_select();
  $(".modal").modal();
  $(".tooltipped").tooltip({
    delay: 50
  });
  $(".datepicker").pickadate({
    selectMonths: true, 
    selectYears: 2, 
    today: "Today",
    clear: "Clear",
    close: "Ok",
    closeOnSelect: true,
    format: "mm/dd/yyyy"
  });
});

// function for displaying error messages in the error modal
function errorModal(mes){
    $('.error-message').text(mes);
    $('#error-modal').modal('open');
}
    


//////////////////////////////////////////////////
//
//               Search Modal
//
//////////////////////////////////////////////////
$("#search-event").on("click", function() {
  $("#search-modal").modal("open");
});

$("#modal-search-event").on("click", function() {
  event.preventDefault();

     //check to make sure a valid date range is entered
    if (new Date($('#search-start-date').val()) <= new Date($('#search-end-date').val())) {
        searchStartDate = $('#search-start-date').val();
        searchEndDate = $('#search-end-date').val();
    }else{
        let dateMessage = "Please enter valid date range.";
        errorModal(dateMessage);
    }   


  if (
    $("#search-category").val() == "" ||
    $("#search-start-date").val() == "" ||
    $("#search-end-date").val() == "" ||
    $("#search-street").val() == "" ||
    $("#search-city").val() == "" ||
    $("#search-state").val() == ""
  ) {
    let searchMessage = "Please enter all required information and then click [Search Events].";
    errorModal(searchMessage);
  } else {
    searchCategory = $("#search-category").val();
    // searchStartDate = $("#search-start-date").val();
    // searchEndDate = $("#search-end-date").val();
    searchAddress =
      $("#search-street").val() +
      ", " +
      $("#search-city").val() +
      ", " +
      $("#search-state").val();
    googleLocation = searchAddress;
    $("#search-modal").modal("close");

    geocode();

  }

    //clear the Event Search fields
    let select = $('select');
    $("form input").val("");
    select.prop('selectedIndex', 0);
    select.material_select();
    $('#search-start-date').val("");
    $('#search-end-date').val("");
    $('#search-street').val("");
    $('#search-city').val("");
    $('#search-state').val("");
});

//////////////////////////////////////////////////
//
//               Create Modal
//
//////////////////////////////////////////////////

$("#create-event").on("click", function() {
  $("#create-modal").modal("open");
});



$("#modal-create-event").on("click", function() {
  let createName;
  let createDate;
  let createDescrip;
  let createImage;
  let createAddress;
  let createCategory;
  let createObj;

  //if no image link submitted, set eventImage to the event image placceholder
  if ($("#create-image").val() == "") {
    createImage = "assets/event-placeholder.png";
  } else {
    createImage = $("#create-image").val();
  }
  // check to make data has been entered into all fields
  if (
    $("#create-name").val() == "" ||
    $("#create-date").val() == "" ||
    $("#create-descrip").val() == "" ||
    $("#create-street").val() == "" ||
    $("#create-city").val() == "" ||
    $("#create-state").val() == "" ||
    $("#create-category").val() == ""
  ) {
    //if not, pop a modal asking the user to enter data for all fields
    let createMessage = "Please enter all required information and then click [Create Event].";
    errorModal(createMessage);
  } else {
    createName = $("#create-name").val();
    createDate = $("#create-date").val();
    createDescrip = $("#create-descrip").val();
    createAddress =
      $("#create-street").val() +
      ", " +
      $("#create-city").val() +
      ", " +
      $("#create-state").val();
    createCategory = $("#create-category").val();
    googleLocationCreate = createAddress;

    geocodeCreate().then(function() {
      //object for the DB
      createObj = {
        name: createName,
        description: createDescrip,
        address: createAddress,
        lat: createLat,
        lon: createLong,
        date: createDate,
        image: createImage,
        category: createCategory
      };

      //clear the Event Search fields
      $("#create-name").val("");
      $("#create-date").val("");
      $("#create-descrip").val("");
      $("#create-street").val("");
      $("#create-city").val("");
      $("#create-state").val("");
      let select = $("select");
      $("form input").val("");
      select.prop("selectedIndex", 0);
      select.material_select();

      // Send an AJAX POST-request with jQuery
      $.post("/api/events", createObj)
        // On success, run the following code
        .done(function(data) {
          // Log the data we found
          console.log(data);
        });
    });
  }
});

//This function will be called in the search click

function searchEventByCategory() {
  // Save the book they typed into the genre-search input
  var categorySearched = $("#search-category").val();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/events?category=" + categorySearched, function(data) {
    searchResults = data;
    categoryResults = data;

    console.log(categoryResults);

    getEventsByDate();
  });
}

function geocode() {
  axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: googleLocation,
        key: "AIzaSyBW6TPdNKLWbxq92udGv6W46xMBtQ2BgSg"
      }
    })
    .then(function(response) {
      // Log full response
      console.log(response);
      let searchRawLat = response.data.results[0].geometry.location.lat;
      let searchRawLon = response.data.results[0].geometry.location.lng;
      absLngNumSearched = Math.abs(searchRawLon);
      absLatNumSearched = Math.abs(searchRawLat);
      searchEventByCategory();
    })
    .catch(function(error) {
      console.log(error);
    });
}

function geocodeCreate() {
  return axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: googleLocationCreate,
        key: "AIzaSyBW6TPdNKLWbxq92udGv6W46xMBtQ2BgSg"
      }
    })
    .then(function(response) {
      // Log full response
      console.log(response);

      let createLatFloat = response.data.results[0].geometry.location.lat;
      let createLongFloat = response.data.results[0].geometry.location.lng;
      createLat = createLatFloat.toString();
      createLong = createLongFloat.toString();
      console.log(createLat);
      console.log(createLong);
    })
    .catch(function(error) {
      console.log(error);
    });
}

//This function will start search for the event based on the meeting the time requirments

function getEventsByDate() {
  startDate = Date.parse(searchStartDate);
  endDate = Date.parse(searchEndDate);

  for (var j = 0; j < categoryResults.length; j++) {
    //This will be the date of each event of the results

    let resultEventDate = Date.parse(categoryResults[j].date);

    if (resultEventDate >= startDate && resultEventDate <= endDate) {
      dateResults.push(categoryResults[j]);
    }
  }
  getEventsByDistance();
  console.log(dateResults);
}

function getEventsByDistance() {
  for (var k = 0; k < dateResults.length; k++) {
    //taking the lats and longs from test array converting to abs nums
    var compLat = parseFloat(dateResults[k].lat);
    var absCompLat = Math.abs(compLat);
    var compLng = parseFloat(dateResults[k].lon);
    var absCompLng = Math.abs(compLng);
    var absDifferenceLat = Math.abs(absCompLat - absLatNumSearched);
    var absDifferenceLong = Math.abs(absCompLng - absLngNumSearched);


    if (absDifferenceLat < 1 && absDifferenceLong < 1) {
      distanceResults.push(dateResults[k]);
      console.log("Distance results:" + distanceResults);
    } else {
      console.log(dateResults[k].name + "is NOT in your area");
    }
  }

  console.log(distanceResults);

  //take the results from the search and build div(s) to display the results
  for (var l = 0; l < distanceResults.length; l++) {
    let resultDiv = $(
      '<div class="res-event row container hoverable z-depth-1">'
    );
    let resultImgDiv = $('<div class="res-img col l3">');
    let resultImg = $('<img class="responsive-img">');
    resultImg.attr("src", distanceResults[l].image);
    resultImgDiv.append(resultImg);

    resultDiv.append(resultImgDiv);

    let resultInfoDiv = $('<div class="res-info col l7">');
    let resultEventName = $('<p class="res-name">');
    resultEventName.text(distanceResults[l].name);

    let resultDescripTitle = $('<p class="res-descrip-title">')
    resultDescripTitle.text("Description:");
    let resultDescrip = $('<p class="res-descrip">');
    resultDescrip.text(distanceResults[l].description);
    let resultDateTitle = $('<p class="res-date-title">')
    resultDateTitle.text("Description:");
    let resultDate = $('<p class="res-date">');
    resultDate.text(distanceResults[l].date);

    let resultLoc = $('<p class="res-loc">');
    resultLoc.text(distanceResults[l].address);

    resultInfoDiv.append(resultEventName);
    resultInfoDiv.append(resultDescripTitle);
    resultInfoDiv.append(resultDescrip);

    resultInfoDiv.append(resultDate);

    resultInfoDiv.append(resultLoc);


    resultDiv.append(resultInfoDiv);

    $(".search-results").append(resultDiv);
  }
}
