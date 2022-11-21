 jQuery(function ($) {

	new google.maps.event.addDomListener(window, 'load', initMapData);

	var autocomplete, map, marker;
	var lat, lag, searchReduis;

	function initMapData() {
		initAutocomplete();
	}

	function initAutocomplete() {
		// Create the autocomplete object, restricting the search to geographical
		// location types.

		var input = document.getElementById('location-input');
		var options = {
			componentRestrictions : {
				country : ['us','in']
			}
		//India only
		};
		autocomplete = new google.maps.places.Autocomplete(input, options);

		// When the user selects an address from the dropdown, populate the address
		// fields in the form.
		autocomplete.addListener('place_changed', fillInAddress);
	}

	function fillInAddress() {
		// Get the place details from the autocomplete object.
		var place = autocomplete.getPlace();

		var address1,city,state,zip,country,landmark;



		if(place.address_components != null && place.address_components.length > 0 ){

			for (var i = 0; i < place.address_components.length; i++) {
			      for (var j = 0; j < place.address_components[i].types.length; j++) {

			        if (place.address_components[i].types[j] == "administrative_area_level_1") {
			        	state = place.address_components[i].short_name;

			        }
			        if (place.address_components[i].types[j] == "neighborhood" ) {
			        	city = place.address_components[i].long_name;

			        }
			        if (place.address_components[i].types[j] == "postal_code") {
			        	zip = place.address_components[i].long_name;

			        }

			         if (place.address_components[i].types[j] == "street_number") {
			        	address1 = place.address_components[i].long_name;

			        }

			        if (place.address_components[i].types[j] == "route") {
			        	address1 =( address1 == undefined ) ?  place.address_components[i].long_name : address1+" "+place.address_components[i].long_name ;

			        }
			      }
			    }

			landmark = place.name;

		}
		$('#address1').val(address1);
		$('#city').val(city);
		$('#state').val(state);
		$('#zipcode').val(zip);
		$('#country').val(country);
		//alert($('#address1').val()  + $('#city').val() + $('#state').val() + $('#zipcode').val());
	}
 });