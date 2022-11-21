$("#subscribeEmailButton").click(function() {
	        document.getElementById('apiMessage').innerHTML = '';
    		var email = $('#subscribeEmail').val();
    		if(email == '' || email == undefined){
    			document.getElementById('apiMessage').innerHTML = 'The email is required';
    			return false;
    		}
    		if(email != null && !regEmail.test(email)){
    			document.getElementById('apiMessage').innerHTML = 'Please enter valid email address';
    			return false;
    		}
    		$.getJSON('subscribe-email/'+ email, function(data, status){
    		       document.getElementById('apiMessageSuccess').innerHTML = data.response;
              });
    	});