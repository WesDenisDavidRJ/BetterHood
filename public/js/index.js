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
});

$('#search-event').on("click", function () {
    $('#search-modal').modal('open');
});

$('#create-event').on("click", function () {
    $('#create-modal').modal('open');
});