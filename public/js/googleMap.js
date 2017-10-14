// Call Geocode
//geocode();


// Get location form
// var locationForm = document.getElementById('location-form');

// Listen for submiot
// locationForm.addEventListener('submit', geocode);

function geocode() {
    // Prevent actual submi

    // var location = document.getElementById('location-input').value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: location,
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


//The JS I wrote to check distance

var testCoordinates = [{
        name: "my house",
        lat: "35.6347403",
        lng: "-78.7736362"
    },
    {
        name: "my parents",
        lat: "26.974762",
        lng: "-80.110879"
    }
]

//These are the results that are returned converted to a num and then to abs num
var latNum = parseFloat(lat);
var absLatNum = Math.abs(latNum);
var lngNum = parseFloat(lng);
var absLngNum = Math.abs(lngNum);

for (var i = 0; i < testCoordinates.length; i++) {
    //taking the lats and longs from test array converting to abs nums
    var compLat = parseFloat(testCoordinates[i].lat);
    var absCompLat = Math.abs(compLat);
    var compLng = parseFloat(testCoordinates[i].lng);
    var absCompLng = Math.abs(compLng);

    if ((absCompLat - absLatNum) < 1 && (absCompLng - absLngNum) < 1) {
        console.log(testCoordinates[i].name + "is in your area")

    } else {
        console.log(testCoordinates[i].name + "is NOT in your area")
    }

}

//The JS I wrote to check distance end

//below is the html code

        //     // Formatted Address
        //     var formattedAddress = response.data.results[0].formatted_address;
        //     var formattedAddressOutput = `
        //   <ul class="list-group">
        //     <li class="list-group-item">${formattedAddress}</li>
        //   </ul>
        // `;

        //     // Address Components
        //     var addressComponents = response.data.results[0].address_components;
        //     var addressComponentsOutput = '<ul class="list-group">';
        //     for (var i = 0; i < addressComponents.length; i++) {
        //         addressComponentsOutput += `
        //     <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
        //   `;
        //     }
        //     addressComponentsOutput += '</ul>';

        //     // Geometry
        //     var lat = response.data.results[0].geometry.location.lat;
        //     var lng = response.data.results[0].geometry.location.lng;
        //     var geometryOutput = `
        //   <ul class="list-group">
        //     <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
        //     <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
        //   </ul>
        // `;

        //     // Output to app
        //     document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
        //     document.getElementById('address-components').innerHTML = addressComponentsOutput;
        //     document.getElementById('geometry').innerHTML = geometryOutput

        // end of htmls code