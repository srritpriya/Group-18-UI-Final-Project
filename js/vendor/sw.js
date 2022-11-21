$(document).ready(function() {

    $('#userSignupForm').formValidation({
        framework: 'bootstrap',
        fields: {
            firstName: {
                selector: '#firstName',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /[a-zA-Z]{1,10}/,
                        message: 'First name must be alpha numerics'
                    }
                }
            },
            lastName: {
                selector: '#lastName',
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /[a-zA-Z]{1,10}/,
                        message: 'Last name must be alpha numerics'
                    }
                }
            },
            email: {
                selector: '#email',
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                selector: '#password',
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The password must be more than 6 and less than 30 characters long.'
                    }
                }
            },
            confirmPassword: {
                selector: '#confirmPassword',
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and cannot be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm password are not the same'
                    }
                }
            },
            phone: {
                selector: '#phone',
                validators: {
                    notEmpty: {
                        message: 'The contact phone is required and cannot be empty'
                    },
                    stringLength: {
                        min: 14,
                        max: 14,
                        message: 'The phone number is not valid'
                    }
                }
            },
            'termscheck': {
                validators: {
                    notEmpty: {
                        message: 'You have to accept the terms and policies'
                    }
                }
            },
        }

    });

    $('#editProfile').formValidation({
        framework: 'bootstrap',
        fields: {
            firstName: {
                selector: '#firstName',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },
            lastName: {
                selector: '#lastName',
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
            }
        }

    });
 /*$('#updateCartForm').formValidation({
        framework: 'bootstrap',
        fields: {
            address: {
                     selector: '#address',
                     validators: {
                    notEmpty: {
                        message: 'The address feild is required and cannot be empty'
                    }
                }
            },

        }

    });*/
$('#addToCartForm').formValidation({
        framework: 'bootstrap',
        fields: {
            address: {
                     selector: '#qtyInput',
                     validators: {
                    notEmpty: {
                        message: 'Please select the product size'
                    }
                }
            },

        }

    });
    $('#homeFilter').formValidation({
        framework: 'bootstrap',
        fields: {
            categorySelect: {
                selector: '#categorySelect',
                validators: {
                    notEmpty: {
                        message: 'Please choose your category'
                    }
                }
            },
            subCategorySelect: {
                selector: '#subCategorySelect',
                validators: {
                    notEmpty: {
                        message: 'Please choose your sub category'
                    }
                }
            },
            citySelect: {
                selector: '#citySelect',
                validators: {
                    notEmpty: {
                        message: 'Please choose your city'
                    }
                }
            },
        }
    });
    $('#size').formValidation({
        framework: 'bootstrap',
    		fields: {
    			size: {
    	   			 selector: '#size',
    	                validators: {
    	                	notEmpty: {
    	                        message: 'please choose your Size'
    	                    }
    	                }
    	            },
                }
                });


    $('#postProduct').formValidation({
        framework: 'bootstrap',
        fields: {
            categorySelectForm: {
                selector: '#categorySelect',
                validators: {
                    notEmpty: {
                        message: 'Please choose your category'
                    }
                }
            },
            /* subCategorySelectForm: {
             	 selector: '#subCategorySelectForm',
                 validators: {
                 	notEmpty: {
                         message: 'Please choose your sub category'
                     }
                 }
             },*/
            title: {
                selector: '#title',
                validators: {
                    notEmpty: {
                        message: 'The title is required and cannot be empty'
                    },
                    stringLength: {
                        max: 125,
                        message: 'You have exceeded the maximum characters allowed'
                    }
                }
            },

            description: {
                selector: '#description',
                validators: {
                    notEmpty: {
                        message: 'The description is required and cannot be empty'
                    },
                    stringLength: {
                        max: 6000,
                        message: 'You have exceeded the maximum characters allowed'
                    }
                }
            },
            materialType: {
                selector: '#materialType',
                validators: {
                    notEmpty: {
                        message: 'Please choose your material type'
                    },

                }
            },
            productType: {
                selector: '#productType',
                validators: {
                    notEmpty: {
                        message: 'Please choose your product type'
                    },

                }
            },
            size: {
                selector: '#size',
                validators: {
                    notEmpty: {
                        message: 'Please choose your size'
                    },

                }
            },
            price: {
                selector: '#price',
                validators: {
                    notEmpty: {
                        message: 'The price is required and cannot be empty'
                    },

                }
            },
            qty: {
                selector: '#qty',
                validators: {
                    notEmpty: {
                        message: 'The Quantity is required and cannot be empty'
                    },

                }
            },



            termscheck: {
                validators: {
                    notEmpty: {
                        message: 'You have to accept the terms and policies'
                    }
                }
            }
        }
    });

    $('#flyerImage').bind('change', function() {
        $("#err").html('');
        var ext = $('#flyerImage').val().split('.').pop().toLowerCase();
        var file_size = this.files[0].size;
        if (file_size > 1048576 * 2) {
            $('#flyerImage').val('');
            $("#err").html('Image size should not exceed 2 mb/image');
            return false;
        }
        if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == -1) {
            $("#err").html('Invalid extension!');
            $('#flyerImage').val('');
            return false;
        }

    });

    $('#Image1').bind('change', function() {
        $("#err").html('');
        var ext = $('#Image1').val().split('.').pop().toLowerCase();
        var file_size = this.files[0].size;
        if (file_size > 1048576 * 2) {
            $('#Image1').val('');
            $("#err").html('Image size should not exceed 2 mb/image');
            return false;
        }
        if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == -1) {
            $("#err").html('Invalid extension!');
            $('#Image1').val('');
            return false;
        }

    });

    $('#Image2').bind('change', function() {
        $("#err").html('');
        var ext = $('#Image2').val().split('.').pop().toLowerCase();
        var file_size = this.files[0].size;
        if (file_size > 1048576 * 2) {
            $('#Image2').val('');
            $("#err").html('Image size should not exceed 2 mb/image');
            return false;
        }
        if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == -1) {
            $("#err").html('Invalid extension!');
            $('#Image2').val('');
            return false;
        }

    });








    $('#change-password-from').formValidation({
        fields: {
            password: {
                selector: '#password',
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The password must be more than 6 and less than 30 characters long.'
                    }
                }
            },
            confirmpassword: {
                selector: '#confirmpassword',
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and cannot be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }

                }
            }
        }
    });

    $("#coupon-apply-button").click(function() {
        document.getElementById('invalidMessage').innerHTML = '';
        document.getElementById('validMessage').innerHTML = '';
        var couponCode = $('#coupon').val().trim();
        var email = $('#email').val();
        var totalPrice = $('#totalAmount').val();
        var actualPrice = $('#price').val();
        if (couponCode == '' || couponCode == undefined) {
            alert('Discount coupon code is not required');
            return false;
        } else {
            $.getJSON('/applyCoupon/' + email + '/' + couponCode, function(data) {
                $.each(data, function(key, value) {

                    if (key == 'INVALID') {
                        document.getElementById('invalidMessage').innerHTML = 'Invalid Coupon. Please try again with valid code';
                    } else if (key == 'VALID_AMT') {
                        var total = parseFloat(actualPrice - value).toFixed(2);
                        if (total <= 0) {
                            $("#subscribeButton").show();
                            document.getElementById('subscribeButton').style.display = 'block';
                            $("#paypalCheckoutButton").hide();
                            document.getElementById('paypalCheckoutButton').style.display = 'none';
                            total = parseFloat(0).toFixed(2)
                        }
                        document.getElementById('totalPrice').innerHTML = total;
                        if (actualPrice < value) {
                            document.getElementById('discountPrice').innerHTML = parseFloat(actualPrice).toFixed(2);
                            $('#discount').val(parseFloat(actualPrice).toFixed(2));
                        } else {
                            document.getElementById('discountPrice').innerHTML = parseFloat(value).toFixed(2);
                            $('#discount').val(parseFloat(value).toFixed(2));
                        }

                        document.getElementById('validMessage').innerHTML = 'Valid Coupon. Discount amount applied!';
                        $('#totalAmount').val(total);
                        $('#coupon').prop("disabled", true);

                        $('#coupon-apply-button').attr("disabled", true);
                        $('#discountCode').val(couponCode);

                    } else if (key == 'VALID_PER') {
                        var total = parseFloat((actualPrice * value / 100).toFixed(2)).toFixed(2);
                        if (total <= 0) {
                            $("#subscribeButton").show();
                            document.getElementById('subscribeButton').style.display = 'block';
                            $("#paypalCheckoutButton").hide();
                            document.getElementById('paypalCheckoutButton').style.display = 'none';
                            total = parseFloat(0).toFixed(2)
                        }
                        document.getElementById('totalPrice').innerHTML = total;
                        if (actualPrice < value) {
                            document.getElementById('discountPrice').innerHTML = parseFloat(actualPrice).toFixed(2);
                            $('#discount').val(parseFloat(actualPrice).toFixed(2));
                        } else {
                            document.getElementById('discountPrice').innerHTML = parseFloat(value).toFixed(2);
                            $('#discount').val(parseFloat(value).toFixed(2));
                        }

                        document.getElementById('validMessage').innerHTML = 'Valid Coupon. Discount amount applied!';
                        $('#totalAmount').val(total);
                        $('#coupon').prop("disabled", true);

                        $('#coupon-apply-button').attr("disabled", true);
                        $('#discountCode').val(couponCode);

                    }
                });
            });
        }
    });


    $("#coupon-remove-button").click(function() {
        document.getElementById('invalidMessage').innerHTML = '';
        document.getElementById('validMessage').innerHTML = '';
        $('#coupon').val('');
        $('#coupon').prop("disabled", false);
        var price = $('#price').val();
        $('#coupon-apply-button').attr("disabled", false);
        $("#subscribeButton").hide();
        $("#paypalCheckoutButton").show();
        document.getElementById('totalPrice').innerHTML = parseFloat(price).toFixed(2);
        document.getElementById('discountPrice').innerHTML = parseFloat(0.00).toFixed(2);
        document.getElementById('price').innerHTML = parseFloat(price).toFixed(2);
        $('#totalAmount').val(parseFloat(price).toFixed(2));
        $('#discount').val(parseFloat(0.00).toFixed(2));
    });

    $('#checkoutPayment').formValidation({
        framework: 'bootstrap',
        fields: {
            termscheck: {
                validators: {
                    notEmpty: {
                        message: 'You have to accept the subscription service terms and policies'
                    }
                }
            }
        }
    });


    $('#contact-form').formValidation({
        framework: 'bootstrap',
        fields: {
            name: {
                selector: '#name',
                validators: {
                    notEmpty: {
                        message: 'The name is required and cannot be empty'
                    }
                }
            },
            email: {
                selector: '#email',
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'The input is not a valid email address'
                    }
                }
            },
            subject: {
                selector: '#subject',
                validators: {
                    notEmpty: {
                        message: 'The subject is required and cannot be empty'
                    }
                }
            },
            message: {
                selector: '#message',
                validators: {
                    notEmpty: {
                        message: 'The message is required and cannot be empty'
                    }
                }
            }
        }
    });

    $('#resetpassword').formValidation({
        fields: {
            email: {
                selector: '#email',
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty.'
                    },
                    regexp: {
                        regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'The email is not valid. Please enter valid email.'
                    },
                }
            }
        }
    });

    $('#subscribeEmailButton').formValidation({
        fields: {
            email: {
                selector: '#email',
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty.'
                    },
                    regexp: {
                        regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'The email is not valid. Please enter valid email.'
                    },
                }
            }
        }
    });
/*
  $("#subscribeEmailButton").click(function() {
        var email = $('#subscribeEmail').val();
        if (email == '' || email == undefined) {
            alert('The email is required');
            return false;
        }
        if (email != null && !regEmail.test(email)) {
            alert('Please enter valid email address');
            return false;
        }

    });*/

    var popularState = $('select[name="popularState"] option:selected').val();
    $('#popularStateSelected').val(popularState);

    $('#post-popular-ads-submit-button').click(function() {
        var popularState = $('select[name="popularState"] option:selected').val();
        $('#popularStateSelected').val(popularState);
    });


    $('#filter-popular-info').formValidation({
        framework: 'bootstrap',
        fields: {
            popularCategorySelect: {
                selector: '#popularCategorySelect',
                validators: {
                    notEmpty: {
                        message: 'Please choose category'
                    }
                }
            },
        }
    });

    /* Ticket Buyer Details form Validation */




    $("#subscribeButton").hide();
    $("#ticket-qty-validation-err").html('');

    $('select[name="txtqty_select"]').on('change', function() {

        var selectedValue = $(this).val();
        var ticketInfo = selectedValue.split("~");
        // ${i},${ticket.ticketInfoId},${ticket.unitPrice},${ticket.fee},${count.index + 1}
        var quantity = ticketInfo[0];
        var ticketInfoId = ticketInfo[1];
        var unitPrice = ticketInfo[2];
        var fee = ticketInfo[3];
        var rowId = ticketInfo[4];
        var ticketTypeCount = ticketInfo[5];
        var availableQty = ticketInfo[6];

        if (availableQty > 0) {
            $.getJSON('/check-availability/' + ticketInfoId + '/' + quantity, function(data) {

                $.each(data, function(key, value) {
                    if (key == 'quantity' && value >= quantity) {
                        var totalFee = quantity * fee;
                        var totalUnitPrice = unitPrice * quantity;
                        var totalPrice = totalFee + totalUnitPrice;
                        var totalPriceId = "#TktPrice" + rowId;
                        $(totalPriceId).text(parseFloat(totalPrice).toFixed(2));
                        var totalAmount = 0;
                        var totalFee = 0;
                        var grandTotal = 0;
                        for (var i = 1; i <= ticketTypeCount; i++) {
                            var currentAmountId = "#TktUnitPrice" + i;
                            var currentFeeId = "#ticketFee" + i;
                            var currentQuantityId = "#TktQty" + i;
                            var currentQty = $(currentQuantityId).val();
                            totalAmount = totalAmount +
                                (parseInt(currentQty) * parseFloat(
                                    $(currentAmountId).text()).toFixed(2));
                            totalFee = totalFee +
                                (parseInt(currentQty) * parseFloat(
                                    $(currentFeeId).text()).toFixed(2));
                            grandTotal = totalAmount + totalFee;
                        }

                        $('#totalTktFee').text(parseFloat(totalFee).toFixed(2));
                        $('#totalTktPrice').text(parseFloat(totalAmount).toFixed(2));
                        //$('#discountPrice').text(parseFloat(totalFee).toFixed(2));
                        $('#totalTktAmount').text(parseFloat(grandTotal).toFixed(2));
                        onChangeTotalAmt(paypalAction);
                        $("#ticket-qty-validation-err").html('');
                    } else {
                        $("#ticket-qty-validation-err").html('Tickets quantity is not available at this time.');
                        //alert('Tickets quantity is not available at this time.');
                    }
                });
            });
        }
    });

});

$('#profileContactPhone').attr('placeholder', "(000) 000-0000").keyup(function(e) {
    if (e.keyCode != 9 && e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 39) {
        this.value = this.value.replace(/[^0-9]/g, '')
            .replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3')
            .replace(/(\(\))?( -$)/, '');
    }
});
$('#shop-coupon-apply-button').click(function() {
	    document.getElementById('invalidMessage').innerHTML = '';
        document.getElementById('validMessage').innerHTML = '';
        var couponCode = $('#shopCoupon').val().trim();
        // var email = $('#email').val();
        var totalPrice = $('#totalAmount').text();

        if(couponCode == '' || couponCode == undefined){
            document.getElementById('invalidMessage').innerHTML = 'Coupon code is required!';
            return false;
        }else{
            $.getJSON('applyShopCoupon/'+couponCode, function(data) {
                $.each(data, function(key,value) {
                    if(key =='USER_EXISTS'){
                        document.getElementById('invalidMessage').innerHTML = 'This coupon is already applied.';
                    }else if(key =='INVALID') {
                        document.getElementById('invalidMessage').innerHTML = 'Invalid Coupon. Pleased try with valid code.';
                    }else if(key =='VALID_AMT') {
                        document.getElementById('validMessage').innerHTML = 'Valid Coupon. Discount applied!';


                        $('#discountPrice').text(parseFloat(value).toFixed(2));
                        $('#discountAmt').val(parseFloat(value).toFixed(2));
                        //$('#coupon').prop("disabled", true);
                        //$('#discountPrice').text(parseFloat(totalFee).toFixed(2));
                        var discountAmt = value;
                        var totalAmount = totalPrice;
                        totalAmount= Number(totalAmount.replace(/[^0-9\.]+/g,""));
                        var priceAfterDiscount = (totalAmount - discountAmt).toFixed(2);
                        $('#totalAmount').text(parseFloat(priceAfterDiscount).toFixed(2));
                        //$('#ticketDiscountAmt').val(parseFloat(totalFee).toFixed(2));
                        $('#shop-coupon-apply-button').attr("disabled", true);
                        //$('#discountPrice').val(couponCode);

                    }
                })
            })
        }

	});
$('.save-favorite').click(function() {
        var productDetailId = $(this).val();
        document.getElementById('invalidMessage'+productDetailId).innerHTML = '';
        document.getElementById('validMessage'+productDetailId).innerHTML = '';
        if(productDetailId == '' || productDetailId == undefined){
            document.getElementById('invalidMessage').innerHTML = 'Error !';
            return false;
        }else{
            $.getJSON('/shopping/saveFavorite/'+productDetailId, function(data) {
                $.each(data, function(key,value) {
                    if(key =='SAVE_FAV' && value == 1){
                        document.getElementById('validMessage'+productDetailId).innerHTML = 'Added to wishlist';
                       //$('').show;
                       //$(this).attr("disabled", true);
                       $('#save-favorite'+productDetailId).hide();
                       $('#remove-favorite'+productDetailId).show();
                       $('#validMessage'+productDetailId).delay(2000).fadeOut();
                    }
                })
            })
        }
	});

    $('.remove-favorite').click(function(){
        var productDetailId = $(this).val();
        if(productDetailId == '' || productDetailId == undefined){
            //document.getElementById('invalidMessage').innerHTML = 'Error !';
            return false;
        }else{
            $.getJSON('/shopping/removeFavorite/'+productDetailId, function(data) {
                $.each(data, function(key,value) {
                    if(key =='REMOVE_FAV' && value == 0){
                       //document.getElementById('validMessage'+productDetailId).innerHTML = 'Removed from wishlist';
                       //$('').show;
                       //$(this).attr("disabled", true);
                       //$('#save-favorite'+productDetailId).hide();
                       $('#remove-favorite'+productDetailId).hide();
                       //$('#validMessage'+productDetailId).delay(2000).fadeOut();
                    }
                })
            })
        }
    });

/* It reads each image uploaded then shorts the name of file and display image size and preview*/
function readImageURL(input, i, sOutput) {
    if (input.files && input.files[i]) {
        var reader = new FileReader();
        reader.onload = function(e) {

            var fileName = input.files[i].name;
            var shortName;
            if (fileName.length > 15) {
                shortName = fileName.replace(fileName.substring(7, fileName.length - 6), "...");
            } else {
                shortName = fileName;
            }
            $('<div class="col-md-3">' + '<p>' + '<img src="' + e.target.result + '" alt="" width="150px" height="250px" />' + '</p>' +
                '<p><span id="fileName">' + shortName + '</span>' + '</p>' +
                '<p>Size: <span>' + sOutput + '</span>' + '</p>').appendTo('#previewImageContainer');
        }

        reader.readAsDataURL(input.files[i]);
    }
}


