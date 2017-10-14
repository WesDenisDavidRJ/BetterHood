// load materialize component js
$(document).ready(function () {
    $('.scrollspy').scrollSpy();
    $('select').material_select();
    $('.modal').modal();
    $('.tooltipped').tooltip({delay: 50});
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2, // Creates a dropdown of 2 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false, // Close upon selecting a date,
        format: 'mm/dd/yyyy'
      });
     
});

//////////////////////////////////////////////////
//
//               Search Modal
//
//////////////////////////////////////////////////
$('#search-event').on("click", function () {
    $('#search-modal').modal('open');
});


let searchResults;
let googleLocation;

$('#modal-search-event').on("click", function () {
    event.preventDefault();

    let searchCategory;
    let searchStartDate;
    let searchEndDate;
    let searchAddress;
    let searchObj;


    if ($('#search-category').val() == "" || 
        $('#search-start-date').val() == "" ||
        $('#search-end-date').val() == "" ||
        $('#search-street').val() == "" ||
        $('#search-city').val() == "" ||
        $('#search-state').val() == "" ) {
            alert("PLACEHOLDER - Will pop a modal asking user to fill in info");
        } else {
           searchCategory = $('#search-category').val();
           searchStartDate = $('#search-start-date').val();
           searchEndDate = $('#search-end-date').val();
           searchAddress = $('#search-street').val() + ", " + $('#search-city').val() + ", " + $('#search-state').val();
            googleLocation = searchAddress;
           //probably don't need 
        //    searchObj = {
        //        category: searchCategory,
        //        startDate: searchStartDate,
        //        endDate: searchEndDate,
        //        address: searchAddress
        //    }

        geocode();

        searchEventByCategory();

        //check if searchResults.length = 0;

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
        }


    console.log("search category: " + searchCategory);
    console.log("start date: " + searchStartDate);
    console.log("end date: " + searchEndDate);
    console.log("address: " + searchAddress);

});

//////////////////////////////////////////////////
//
//               Create Modal
//
//////////////////////////////////////////////////

$('#create-event').on("click", function () {
    $('#create-modal').modal('open');
});

$('#modal-create-event').on("click", function () {
    let createName;
    let createDate;
    let createDescrip;
    let createImage;
    let createAddress;
    let createCategory;
    let createObj;

    //if no image link submitted, set eventImage to the event image placceholder
    if ($('#create-image').val() == "") {
        createImage = "assets/event-placeholder.png"
    } else {
        createImage = $('#create-image').val();
    }

    if ($('#create-name').val() == ""||
        $('#create-date').val() == ""||
        $('#create-descrip').val() == ""||
        $('#create-street').val() == ""||
        $('#create-city').val() == ""||
        $('#create-state').val() == ""||
        $('#create-category').val() == ""
        ) {
            alert("PLACEHOLDER - Will pop a modal asking user to fill in info");
        } else {
            createName = $('#create-name').val();
            createDate = $('#create-date').val();
            createDescrip = $('#create-descrip').val();
            createAddress = $('#create-street').val() + ", " + $('#create-city').val() + ", " + $('#create-state').val();
            createCategory = $('#create-category').val();

            //object for the DB
            createObj = {
                name: createName,
                description: createDescrip,
                address: createAddress,
                date: createDate,
                image: createImage,
                category: createCategory,
            }
            
            //clear the Event Search fields
            $('#create-name').val("");
            $('#create-date').val("");
            $('#create-descrip').val("");
            $('#create-street').val("");
            $('#create-city').val("");
            $('#create-state').val("");
            let select = $('select');
            $("form input").val("");
            select.prop('selectedIndex', 0);
            select.material_select();
        }

          // Send an AJAX POST-request with jQuery
  $.post("/api/events", createObj)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

    console.log("createName: " + createName);
    console.log("createDate: " + createDate);
    console.log("createDescrip: " + createDescrip);
    console.log("createCategory: " + createCategory);
    console.log("createImage: " + createImage)
});

//This function will be called in the search click

function searchEventByCategory() {
  // Save the book they typed into the genre-search input
  var categorySearched = $("#search-category").val();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/events?category=" + categorySearched, function (data) {

    searchResults = data;
    console.log(data);
    console.log(searchResults)
    // Call our renderEvent function to add our events to the page
    // newArray = newArray.push(data);

  });
}


function geocode() {
    // Prevent actual submi

    // var location = document.getElementById('location-input').value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: googleLocation,
                key: 'AIzaSyBW6TPdNKLWbxq92udGv6W46xMBtQ2BgSg'
            }
        })
        .then(function (response) {
            // Log full response
            console.log(response);

            
        })
        .catch(function (error) {
            console.log(error);
        });
}