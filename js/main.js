'use strict'
$(document).ready(function(){
	$('#name').focus();
	$('#title').change(function(){
		if($('#title option:selected').text() == 'Other'){
			$(this).after('<input type="text" id="other-title" name="other-title" placeholder="Your Title">');
		}
	});
});