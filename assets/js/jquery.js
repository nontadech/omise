// JavaScript Document
jQuery.noConflict();
//jquery stuff
jQuery(function(){
	jQuery(".btn_y").click(function(){
		jQuery(this).addClass('active');
		jQuery(".btn_n").removeClass('active');
		jQuery("#csname").show();
	})
	jQuery(".btn_n").click(function(){
		jQuery("#csname").hide();
		jQuery(this).addClass('active');
		jQuery(".btn_y").removeClass('active');
	})
	jQuery("input[type='text']").click(function(){
		jQuery(this).val('');
		jQuery(this).css("color","#000");
	})
	jQuery("#commentForm").validate({
		rules: {
			sname: "required",
			cname: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			sname: "Please enter your shore name",
			cname: "Please enter your contact name",
			email: "Please enter a valid email address"
		}
	});
	
	jQuery('.show_text').textillate({ in: {effect: 'fadeIn'}});
})