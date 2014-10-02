// JavaScript Document
var thebutton_right = $('.sales_right');
var header_right = $('.sales_detail_right');

var buttonclickhandler = function () {
	var currentstate = header_right.attr('data-state');
	if(currentstate== 'active'){
		header_right.attr('data-state','inactive');	
	}else{
		header_right.attr('data-state', 'active');	
	}

}
thebutton_right.on('click',buttonclickhandler);

var thebutton_left = $('.sales_left');
var header_left = $('.sales_detail_left');

var buttonclickhandler = function () {
	var currentstate = header_left.attr('data-state');
	if(currentstate== 'active'){
		header_left.attr('data-state','inactive');	
	}else{
		header_left.attr('data-state', 'active');	
	}

}
thebutton_left.on('click',buttonclickhandler);