'use strict'
$(document).ready(function(){
	
	//Set initial focus on Name input field
	$('#name').focus();
	
	//In case js is turn off Other title will appear
	$('#other-title').remove();
	
	//Adding dinamically other title input field if the option is selected
	$('#title').change(function(){
		if($('#title option:selected').text() == 'Other'){
			$(this).after('<input type="text" id="other-title" name="other-title" placeholder="Your Title">');
		}
		else{
			$('#other-title').remove();
		}
	});
	
	
	//Showing the right options for each design
	$('#design').change(function(){
		if($('#design option:selected').val() == 'js puns'){
			var color = document.getElementById('color')
			for(var i = 3; i < 6; i++){
				color.getElementsByTagName('option')[i].style.display = "none";
			}
			for(var i = 0; i < 3; i++){
				color.getElementsByTagName('option')[i].style.display = "block";
			}
		}
		if($('#design option:selected').val() == 'heart js'){
			var color = document.getElementById('color')
			for(var i = 0; i < 3; i++){
				color.getElementsByTagName('option')[i].style.display = "none";
			}
			for(var i = 3; i < 6; i++){
				color.getElementsByTagName('option')[i].style.display = "block";
			}
		}
	});
	
	// Initializing the total value of the courses selected to 0
	var total = 0;
	
	
	// Calculating total costs
	$('input[name="all"]').change(function(){
		if(this.checked){
			total += 200;
		}else{
			total -= 200;
		}
		$('.total').remove();
		$('.activities').append('<h2 class="total"> Your total is $' + total + '</h2>');
	});

	
	$('input[name="js-frameworks"]').change(function(){
		if(this.checked){
			$('input[name="express"]').attr('disabled','true');
			total += 100;
		}else{
			$('input[name="express"]').removeAttr('disabled','false');
			total -= 100;
		}
		$('.total').remove();
		$('.activities').append('<h2 class="total"> Your total is $' + total + '</h2>');
	});
	
	$('input[name="express"]').change(function(){
		if(this.checked){
			$('input[name="js-frameworks"]').attr('disabled','true');
			total += 100;
		}else{
			$('input[name="js-frameworks"]').removeAttr('disabled','false');
			total -= 100;
		}
		$('.total').remove();
		$('.activities').append('<h2 class="total"> Your total is $' + total + '</h2>');
	});
	
	$('input[name="js-libs"]').change(function(){
		if(this.checked){
			$('input[name="node"]').attr('disabled','true');
			total += 100;
		}else{
			$('input[name="node"]').removeAttr('disabled','false');
			total -= 100;
		}
		$('.total').remove();
		$('.activities').append('<h2 class="total"> Your total is $' + total + '</h2>');
	});
	
	$('input[name="node"]').change(function(){
		if(this.checked){
			$('input[name="js-libs"]').attr('disabled','true');
			total += 100;
		}else{
			$('input[name="js-libs"]').removeAttr('disabled','false');
			total -= 100;
		}
		$('.total').remove();
		$('.activities').append('<h2 class="total"> Your total is $' + total + '</h2>');
	});
	
	$('input[name="build-tools"], input[name="npm"]').change(function(){
		if(this.checked){
			total += 100;
		}else{
			total -= 100;
		}
		$('.total').remove();
		$('.activities').append('<h2 class="total"> Your total is $' + total + '</h2>');
	});
	
	
	//Initialize payment option to credit card
	$('#payment').val("credit card");
	$('#paypal').hide();
	$('#bitcoin').hide();
	
	//Show the right fields according to selection
	$('#payment').change(function(){
		if($('#payment').val() == "credit card"){
			$('#paypal').hide();
			$('#bitcoin').hide();
			$('#credit-card').show();
		}
		if($('#payment').val() == "paypal"){
			$('#paypal').show();
			$('#bitcoin').hide();
			$('#credit-card').hide();	
		}
		if($('#payment').val() == "bitcoin"){
			$('#paypal').hide();
			$('#bitcoin').show();
			$('#credit-card').hide();
		}
	});
	
	//Evaluating if submit the form
	$('form').submit(function(e){
		if($('#name').val() == ''){
			e.preventDefault();
			$('.error-message').remove();
			$('form').append('<div class="error-message"><p>Please include your name!</p></div>');
		}
		
		if( !validateEmail( ($('#mail').val()) )){
			e.preventDefault();
			$('.error-message').remove();
			$('form').append('<div class="error-message"><p>That is not a valid!</p></div>');
		}
		
		if( $('input[type="checkbox"]:checked').length == 0 ){
			e.preventDefault();
			$('.error-message').remove();
			$('form').append('<div class="error-message"><p>Please select an activity</p></div>');
		}
		
		if( $('#payment').val() == 'select_method' ){
			e.preventDefault();
			$('.error-message').remove();
			$('form').append('<div class="error-message"><p>Please select a payment method</p></div>');
		}
		
		if( $('#payment').val() == 'credit card' ){
			if( $('#cc-num').val() == '' ){
				e.preventDefault();
				$('.error-message').remove();
				$('form').append('<div class="error-message"><p>Please set a credit card number</p></div>');
			}
			
			if( $('#zip').val() == '' ){
				e.preventDefault();
				$('.error-message').remove();
				$('form').append('<div class="error-message"><p>Please set a ZIP code</p></div>');
			}
			
			if( $('#cvv').val() == '' ){
				e.preventDefault();
				$('.error-message').remove();
				$('form').append('<div class="error-message"><p>Please set a cvv number</p></div>');
			}
			
		}
		
		function validateEmail(email) {
		  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
		}
	});
});