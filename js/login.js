/* Sign in form IFFY */
$(function(){
	var cache = {
		'nextBtn': $('.next-btn'),
		'userEmail': $('.user_email'),
		'password': $('.password'),
		'loginBtn': $('.login-btn'),
		'loginForm': $('#login-form')
	};

	var nextEventHandler = function(){
		if( cache.userEmail.val().match( cache.userEmail.attr('pattern') ) ){
			$(this).hide();
			cache.password.show(1000);
		}
		else{
			alert('Please enter a valid Email id!');
		}
	};

	var passwordEventHandler = function(e){
		if(e.target.value != ''){
			cache.loginBtn.show(1000);
		}
		else{
			cache.loginBtn.hide(500);
		}
	};

	var submitEventHandler = function(){
		if( !(cache.userEmail.val() && cache.password.val()) ){
			return false;
		}
	};

	var bindEvents = function(){
		cache.nextBtn.click(nextEventHandler);
		cache.password.keyup(passwordEventHandler);
		cache.loginForm.submit(submitEventHandler);
	};

	var init = function(){
		bindEvents();
	};

	$(document).ready(function(){
		init();
	});

}());

/* Registeration form IFFY */
$(function(){
	var cache = {
		'tabs': $('.tabs>h2'),
		'registerForm': $('#registration-form'),
		'loginForm': $('#login-form'),
		'addTempAddress': $('.temp-add'),
		'tempAddress': $('.temp-address'),
		'otp': $('.otp'),
		'userMobile': $('.user_mobile_reg'),
		'virtualKeyboard': $('.virtual-keyboard'),
		'fixedContainer': $('.fixed-cont')
	};

	var tabsEventHandler = function(){
		cache.tabs.removeClass('active');
		if($(this).hasClass('register')){
			cache.registerForm
					.removeClass('hide-translate')
					.addClass('translate90deg');
			cache.loginForm
					.addClass('hide-translate')
					.removeClass('translate90deg');
		}
		else{
			cache.loginForm
					.removeClass('hide-translate')
					.addClass('translate90deg');
			cache.registerForm
					.addClass('hide-translate')
					.removeClass('translate90deg');
		}
		$(this).addClass('active');
	};

	var tempAddressEventHandler = function(){
		$(this).hide();
		cache.tempAddress.removeClass('hide').animate({
			opacity: 1,
			width: '100%'
		}, 500);
	};

	var otpEventHandler = function(e){
		e.preventDefault();
		var pressedKey = String.fromCharCode( e.keyCode || e.which ) || "";
		var nextEle = $(e.target).next('.otp');
		var otpValue = $(this).val();

		if(!isNaN(pressedKey)){
			$(this).val(pressedKey);
			nextEle && nextEle.focus();
		}
	};

	var registerEventHandler = function(){
		alert('Registration succefull!');
		$('.signIn, .reset-btn').click();
	};

	var mobileEventHandler = function(e){
		e.preventDefault();
	};

	var virtualKeyBoardEventHandler  = function(e){
		var value = e.target.textContent;
		var prevVal = cache.userMobile.val();
		prevVal.length <= 9 && cache.userMobile.val(prevVal+Number(value));
	};

	var registerFormClickEventHandler = function(e){
		var element = $(e.target);
		if(element.hasClass('user_mobile_reg')){
			cache.fixedContainer.removeClass('hide');
		}else{
			cache.fixedContainer.addClass('hide');
		}
	};

	var bindEvents = function(){
		cache.tabs.click(tabsEventHandler);
		cache.addTempAddress.click(tempAddressEventHandler);
		cache.otp.keypress(otpEventHandler);
		cache.registerForm.on('submit' ,registerEventHandler);
		cache.userMobile.click(mobileEventHandler).keypress(mobileEventHandler);
		cache.virtualKeyboard.on('click','.key' ,virtualKeyBoardEventHandler);
		cache.registerForm.click(registerFormClickEventHandler);
	};

	var init = function(){
		bindEvents();
	};

	$(document).ready(function(){
		init();
	});

}());