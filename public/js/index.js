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


//Variables that are created inside the click of the search event modal
let searchCategory;
let searchStartDate;
let searchEndDate;
let searchAddress;
let searchObj;

let searchResults;
let googleLocation;


// load materialize component js
$(document).ready(function () {
    $('.scrollspy').scrollSpy();
    $('select').material_select();
    $('.modal').modal();
    $('.tooltipped').tooltip({
        delay: 50
    });
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


$('#modal-search-event').on("click", function () {
    event.preventDefault();




    if ($('#search-category').val() == "" ||
        $('#search-start-date').val() == "" ||
        $('#search-end-date').val() == "" ||
        $('#search-street').val() == "" ||
        $('#search-city').val() == "" ||
        $('#search-state').val() == "") {
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

let googleLocationCreate;

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

    if ($('#create-name').val() == "" ||
        $('#create-date').val() == "" ||
        $('#create-descrip').val() == "" ||
        $('#create-street').val() == "" ||
        $('#create-city').val() == "" ||
        $('#create-state').val() == "" ||
        $('#create-category').val() == ""
    ) {
        alert("PLACEHOLDER - Will pop a modal asking user to fill in info");
    } else {
        createName = $('#create-name').val();
        createDate = $('#create-date').val();
        createDescrip = $('#create-descrip').val();
        createAddress = $('#create-street').val() + ", " + $('#create-city').val() + ", " + $('#create-state').val();
        createCategory = $('#create-category').val();
        googleLocationCreate = createAddress;


        geocodeCreate().then(function () {

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

            // Send an AJAX POST-request with jQuery
            $.post("/api/events", createObj)
                // On success, run the following code
                .done(function (data) {
                    // Log the data we found
                    console.log(data);
                });

            console.log("createName: " + createName);
            console.log("createDate: " + createDate);
            console.log("createDescrip: " + createDescrip);
            console.log("createCategory: " + createCategory);
            console.log("createImage: " + createImage)
        });
    }
})



//This function will be called in the search click

function searchEventByCategory() {
    // Save the book they typed into the genre-search input
    var categorySearched = $("#search-category").val();

    // Make an AJAX get request to our api, including the user's genre in the url
    $.get("/api/events?category=" + categorySearched, function (data) {

        searchResults = data;
        categoryResults = data;

        // console.log(data);
        // console.log(searchResults);
        console.log(categoryResults);
        // Call our renderEvent function to add our events to the page
        // newArray = newArray.push(data);
        getEventsByDate();

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

function geocodeCreate() {
    // Prevent actual submi

    // var location = document.getElementById('location-input').value;

    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: googleLocationCreate,
                key: 'AIzaSyBW6TPdNKLWbxq92udGv6W46xMBtQ2BgSg'
            }
        })
        .then(function (response) {
            // Log full response
            console.log(response);

            let createLatFloat = response.data.results[0].geometry.location.lat;
            let createLongFloat = response.data.results[0].geometry.location.lng;
            createLat = createLatFloat.toString();
            createLong = createLongFloat.toString();
            console.log(createLat);
            console.log(createLong);

        })
        .catch(function (error) {
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

        //this will be checking if event date fits in search param
        // var d1 = Date.parse("01-11-2014");
        // var d2 = Date.parse("01-10-2014");
        // if (d1 > d2) {
        //     alert ("Error!");
        // }
        if (resultEventDate >= startDate && resultEventDate <= endDate) {
            dateResults.push(categoryResults[j])
        }
    }
    console.log(dateResults);
}