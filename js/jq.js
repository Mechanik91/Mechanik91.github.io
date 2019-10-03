$(document).ready(function(){
	// body...
$("#list-group-item_1").click(function(){
	$("[id='for_products_group_1']").css("display","block")
	$("[id='for_products_group_2']").css("display","none")
	$("[id='for_products_group_3']").css("display","none")
	$("[id='for_products_group_4']").css("display","none")
});
$("#list-group-item_2").click(function(){
	$("[id='for_products_group_1").css("display","none")
	$("[id='for_products_group_2").css("display","block")
	$("[id='for_products_group_3").css("display","none")
	$("[id='for_products_group_4").css("display","none")
});
$("#list-group-item_3").click(function(){
	$("[id='for_products_group_1").css("display","none")
	$("[id='for_products_group_2").css("display","none")
	$("[id='for_products_group_3").css("display","block")
	$("[id='for_products_group_4").css("display","none")
});
$("#list-group-item_4").click(function(){
	$("[id='for_products_group_1").css("display","none")
	$("[id='for_products_group_2").css("display","none")
	$("[id='for_products_group_3").css("display","none")
	$("[id='for_products_group_4").css("display","block")
});
$("a.scrollto").click(function(){
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	},800);
	return false;	
});
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


























});