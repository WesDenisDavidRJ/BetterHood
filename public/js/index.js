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

$('#search-event').on("click", function () {
    $('#search-modal').modal('open');
});

$('#create-event').on("click", function () {
    $('#create-modal').modal('open');
});