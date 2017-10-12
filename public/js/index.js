// load materialize component js
$(document).ready(function () {
    $('select').material_select();
    $('.modal').modal();
    $('.tooltipped').tooltip({delay: 50});
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2, // Creates a dropdown of 2 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,

      });

      var createEvent = $('#modal-create-event');
      var nameInput = $("#event-name");
      var dateInput = $("#start-date");
      var descripInput = $("#event-descrip");
      var imageInput = $("#event-image");
      var addressInput = $("#event-address");
      var zipcodeInput = $("#zipcode");
      var categoryInput = $("#category")

      createEvent.on("click", function(event){
          console.log("clicked")
          event.preventDefault();
          console.log(`submit clicked: ${event}`)
      })
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
    let searchCategory;
    let searchStartDate;
    let searchEndDate;
    let searchAddress;
    let searchObj;

    if ($('#search-category').val() == "" || 
        $('#start-date-search').val() == "" ||
        $('#end-date-search').val() == "" ||
        $('#street-search').val() == "" ||
        $('#city-search').val() == "" ||
        $('#state-search').val() == "" ) {
            alert("PLACEHOLDER - Will pop a modal asking user to fill in info");
        } else {
           searchCategory = $('#search-category').val();
           searchStartDate = $('#start-date-search').val().trim();
           searchEndDate = $('#end-date-search').val().trim();
           searchAddress = $('#street-search').val().trim() + "," + $('#city-search').val().trim() + "," + $('#state-search').val();
           //probably don't need 
           searchObj = {
               category: searchCategory,
               startDate: searchStartDate,
               endDate: searchEndDate,
               address: searchAddress
           }
            //clear the Event Search fields
            let select = $('select');
            $("form input").val("");
            select.prop('selectedIndex', 0);
            select.material_select();
            $('#start-date-search').val("");
            $('#end-date-search').val("");
            $('#street-search').val("");
            $('#city-search').val("");
            $('#state-search').val("");
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
    let searchCategory;
    let searchStartDate;
    let searchEndDate;
    let searchAddress;

    if ($('#search-category').val() == "" || 
        $('#start-date-search').val() == "" ||
        $('#end-date-search').val() == "" ||
        $('#street-search').val() == "" ||
        $('#city-search').val() == "" ||
        $('#state-search').val() == "" ) {
            alert("PLACEHOLDER - Will pop a modal asking user to fill in info");
        } else {
           searchCategory = $('#search-category').val();
           searchStartDate = $('#start-date-search').val().trim();
           searchEndDate = $('#end-date-search').val().trim();
           searchAddress = $('#street-search').val().trim() + "," + $('#city-search').val().trim() + "," + $('#state-search').val();
        }
    console.log("search category: " + searchCategory);
    console.log("start date: " + searchStartDate);
    console.log("end date: " + searchEndDate);
    console.log("address: " + searchAddress);

    //clear the Event Search fields
    var select = $('select');
    $("form input").val("");
    select.prop('selectedIndex', 0);
    select.material_select();
    $('#start-date-search').val("");
    $('#end-date-search').val("");
    $('#street-search').val("");
    $('#city-search').val("");
    $('#state-search').val("");

});