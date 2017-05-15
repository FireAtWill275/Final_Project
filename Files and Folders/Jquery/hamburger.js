$(document).ready(function(){
$("nav ul li:first-child").click(function(){
	console.log('hamburger clicked');
$("nav ul li:first-child").click(function(event){
   event.preventDefault();
   	console.log('default prevented')
   	});
	//very cool slide toggle function, doesn't work in 
	//all browsers
	// $("nav ul li:not(:first-child)").slideToggle();
	// console.log("slide toggle");
	//cool sliding toggle that directly targets the class
	// //of the navigation in the mobile css
	$("nav").toggleClass("show");
	console.log("navigation opened");
	// });


 });

});