$(document).ready(function() {
	$('#username').focusin(function(){		
		$(this).siblings("span").remove();
		$(this).after("<span></span>");
		$(this).siblings("span").empty();
		$(this).siblings("span").append("•	The username field must contain only alphabetical or numeric characters");
		$(this).siblings("span").css("color", "brown");	
		$(this).removeClass("ok");$(this).removeClass("error");				
		$(this).addClass("info");
	});
	$('#username').on('input', function() {
		var input=$(this);
		var re = (/^[a-zA-Z0-9]{1,}$/);
		var is_name=re.test(input.val());
		$(this).focusout(function(){
			if(is_name){input.removeClass("info").addClass("ok");}
		else{
			input.removeClass("info").addClass("error");
			}
        	if(is_name){				
				$(this).siblings("span").empty();				
				$(this).siblings("span").append("Ok");					
				$(this).siblings("span").css("color", "green");
			}
			else {
				$(this).siblings("span").empty();
				$(this).siblings("span").append(" <b>Invalid Username</b>.");					
				$(this).siblings("span").css("color", "red");
			}
    	});
	});	
	$('#password').focusin(function(){
		$(this).siblings("span").remove();
		$(this).after("<span></span>");
		$(this).siblings("span").empty();
		$(this).siblings("span").append("•	The password field should be at least 8 characters long.");
		$(this).siblings("span").css("color", "brown");			
		$(this).removeClass("ok");
		$(this).removeClass("error");				
		$(this).addClass("info");
	});
	$('#password').on('input', function() {
		var input=$(this);
		var re = (/^[a-zA-Z0-9]{8,}$/);
		var is_password=re.test(input.val());
		$(this).focusout(function(){
        	if(is_password){	
				input.removeClass("error");
				input.removeClass("info").addClass("ok");			
				$(this).siblings("span").empty();				
				$(this).siblings("span").append("Ok");					
				$(this).siblings("span").css("color", "green");
			}
			else {
				input.removeClass("ok");
				input.removeClass("info").addClass("error");
				$(this).siblings("span").empty();
				$(this).siblings("span").append(" <b>Invalid Password</b>.");					
				$(this).siblings("span").css("color", "red");
			}
    	});		
	});
	$('#email').focusin(function(){
		$(this).siblings("span").remove();
		$(this).after("<span></span>");
		$(this).siblings("span").empty();
		$(this).siblings("span").append("•	The email field should be a valid email address (local-part@domain)");
		$(this).siblings("span").css("color", "brown");			
		$(this).removeClass("ok");$(this).removeClass("error");			
		$(this).addClass("info");
	});
	$('#email').on('input', function() {
		var input=$(this);
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=re.test(input.val());
		$(this).focusout(function(){
			if(is_email){}
		else{
				
			}
        	if(is_email){
				input.removeClass("error");
				input.removeClass("info").addClass("ok");				
				$(this).siblings("span").empty();				
				$(this).siblings("span").append("Ok");					
				$(this).siblings("span").css("color", "green");
			}
			else {
				input.removeClass("ok");
				input.removeClass("info").addClass("error");
				$(this).siblings("span").empty();
				$(this).siblings("span").append(" <b>Invalid Email</b>.");					
				$(this).siblings("span").css("color", "red");
			}
    	});	
	});
});