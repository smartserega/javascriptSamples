//  jQuery('document').ready(function(){
//	jQuery('body').append('<a href = "http://google.com">Перейти в Гугл</a>');
//
//	jQuery('div').remove();
//
//	jQuery('p').clone();
//
//	var p_clone
//	p_clone = jQuery('p').clone();
//	jQuery('body').append(p_clone);
//
//	var p1, p2;
//
//})

jQuery('document').ready(function(){

	jQuery('button').on('click', function(){


		var value1, value2;
		value1 = jQuery('#val1').val();
		value2 = jQuery	('#val2').val();

		value1 = parseInt(value1);
		value2 = parseInt(value2);

		alert(value1+value2);


	});

});
