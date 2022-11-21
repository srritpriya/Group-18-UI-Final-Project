    var paypalAction;
	/*function isValid() {
	   var isCheckBoxChecked = document.querySelector('#termscheck').checked;
		 var totalOrderAmount = parseFloat($('#totalAmount').text());
		 if (totalOrderAmount <= 0 ) {
		 	isCheckBoxChecked = false;
		 }
		return isCheckBoxChecked;
	}

	function onChangeCheckbox(handler) {
		document.querySelector('#termscheck').addEventListener('change', handler);
	}
	function onChangeTotalAmt(actions) {   
			toggleValidationMessage();
			toggleButton(actions);
	}
	function toggleValidationMessage() {
		 var totalOrderAmount = parseFloat($('#totalAmount').text());
		 $('.validate-mesg').hide();
		 if (totalOrderAmount <= 0) {
			 $('.validate-mesg').show();
		 }
		 if(!isCheckBoxChecked){
			 $('#checkMesg').show();
		 }
	}

	function toggleButton(actions) {
		return isValid() ? actions.enable() : actions.disable();
	}*/
	paypal.Button
			.render(
					{
						env : 'sandbox', //production
						style: {
				            label: 'checkout',
				            fundingicons: true, // optional
				            branding: true, // optional
				            size:  'responsive', // small | medium | large | responsive
				            shape: 'rect',   // pill | rect
				            color: 'gold'   // gold | blue | silve | black
				        },
						// PayPal Client IDs - replace with your own
						// Create a PayPal app: https://developer.paypal.com/developer/applications/create
						client : {
						     //sandbox : 'AUIyW9syCrauCovCdEm2gUw9LsPCzz_PjSl7FDqseo5BXGn4wiG9iu6053UdLds6UwaQTK_EMh87c6Cl'
                         	 sandbox : 'AdS9RIYsIbDN-BBcy3PlcdQhrDkvDY6OjO7-56wGUU1koh_KMZR6XkpRs0QHt_C-acNZocV2aCMDxZ0o'
				 		     //product: 'AfpOxjOWp-k9-tTdgV6mc8NZHSLkagvu63vYOSLOCRXaJgE3hKi5W5qAnG3UXVh4C72sb3FA-mnAViSZ';
				 		},
					
						// Show the buyer a 'Pay Now' button in the checkout flow
						commit : true,  
						
						/*validate : function(actions) {
							paypalAction = actions;
							 toggleButton(actions);
							  onChangeCheckbox(function() {
								    toggleValidationMessage();
					                toggleButton(actions);
					            });
						},
						onClick : function() {
							 toggleValidationMessage();
						},*/
						
						// payment() is called when the button is clicked


						payment : function(data, actions) {
                            var totalAmount = 0.01;
							var orderDetailId;
							var paypalRequest;
							 var qtyArr = "";
                             for(var i=0;i<numberInput.length;i++){
                                   qtyArr +=numberInput[i].value+",";
                            }

							var data1 = {}
							data1["qtyArr"] = qtyArr;
							data1["fname"] = $('#fname').val();
							data1["lname"] = $('#lname').val();
							data1["address1"] = $('#address1').val();
							data1["address2"] = $('#address2').val();
							data1["city"] = $('#city').val();
							data1["state"] = $('#state').val();
							data1["zipcode"] = $('#zipcode').val();

							$.ajax({
								url : "/purchase-checkout",
								contentType : "application/json",
								async : false,
								headers : { 
										'Content-Type' : 'application/json',
										 "Accept": 'application/json',
								},
								type : "POST",
								mode: 'cors',
								data : JSON.stringify(data1),
								dataType : "json",
								success : function(data) {

									orderDetailId = data.orderDetailId;
									paypalRequest = data;   
									},
									error : function(e) {
											console.log("ERROR: ", e); 
									},
									done : function(e) {
										console.log("DONE"); 
									}
								}); 
						 	
							//return false; 
							// Make a call to the REST api to create the payment 
							return actions.payment
									.create(paypalRequest);  
						},

						// onAuthorize() is called when the buyer approves the payment
						onAuthorize : function(data, actions) {
							// Make a call to the REST api to execute the payment

							return actions.payment
									.execute()
									.then(
											function() {
												actions.redirect(); 
											});
						},
						 onCancel: function(data, actions) { 
							// actions.redirect(); 
							alert('Successfully cancelled your PayPal payment!');
							 },
							 onError: function(err) { 
								//TODO..  Show an error page here, when an error occurs 
							 	alert('System error has occurred and please try again... \n\nWe apologize for any inconvenience.');
							}  
					}, '#paypal-button-container'); 