//This file is no longe necessary and can be deleted once group approves


// $(document).ready(function(){
// var createEvent = $('#modal-create-event');
// var EventsList = $("tbody");
// var nameInput = $("#event-name");
// var dateInput = $("#start-date");
// console.log(dateInput);
// var descripInput = $("#event-descrip");
// var imageInput = $("#event-image");
// var addressInput = $("#event-address");
// var zipcodeInput = $("#zipcode");
// var categoryInput = $("#category")

// $("#create-modal-event").on("submit", function(event){
//     console.log(event);
//     event.preventDefault();
//     var userData = {
//         name: nameInput.val().trim()
//         date: dateInput.val().trim()
//         descrip: descripInput.val().trim()
//         image: imageInput.val().trim()
//         address: addressInput.val().trim()
//         zipcode: zipcodeInput.val().trim()
//         category: categoryInput.val().trim()
        

//     }
//     if (!userData.name || !userData.date) {
//         return;
//       }
//     console.log(userdata);
//         // If we have an email and password we run the loginUser function and clear the form
//         loginUser(userData.email, userData.password);
//         emailInput.val("");
//         passwordInput.val("");
//       });

//       function loginUser(){
//     $.post("/api/events", {
//       name: name,
//       date: date,
//       descrip: descrip,
//       image: image,
//       address: address,
//       zipcode: zipcode,
//       category: category

//     }).then(getEvents) {
//   }
//   function getEvents() {
//       $.get("/api/events", function(data){
//           console.log(data)
//       }
//       )
//   }



// });