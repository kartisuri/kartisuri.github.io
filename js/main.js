$(document).ready(function() {
	
	console.log("document");
	$('iframe').load(function(){
      $(this).next().removeClass("hiddentag");
	  $(this).next().addClass("animated bounceInRight");
	});
	
	$('.pic').mousemove(function (event) {
    event.preventDefault();
    var upX = event.clientX;
    var upY = event.clientY;
    var mask = $('#mask1 circle')[0];
    mask.setAttribute("cy", (upY - 5) + 'px');
    mask.setAttribute("cx", upX + 'px');
	});

var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function(e) {
    $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
	
  });
 
setTimeout(function() {

   $('.divSE1').removeClass('opaque');
   $('.divSE1').addClass('colorwhite');
}, 2000);

setTimeout(function() {
$(".textappearsync").removeClass("invisible");
$(".textappearsync").addClass("animated fadeInUp");
}, 4000);

$('.scroller').on('click', function(){
   //window.location.href = "portfolio.html";
 
     // $('html, body').animate({scrollTop: $('.educationbox').offset().top }, 'slow');
    
   
});

$('#home').on('click', function(){
   window.location.href = "index.html";
});
$('#portfolio').on('click', function(){
   window.location.href = "portfolio.html";
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 300) {
	   $(".experiencecontainer1").removeClass("invisible");
	   $(".experiencecontainer1").addClass("animated fadeInUp");
    }
	if ($(this).scrollTop() > 500) {
	   $(".experiencecontainer2").removeClass("invisible");
	   $(".experiencecontainer2").addClass("animated fadeInUp");
    }
	if ($(this).scrollTop() > 700) {
	   $(".experiencecontainer3").removeClass("invisible");
	   $(".experiencecontainer3").addClass("animated fadeInUp");
    }
	
	if ($(this).scrollTop() > 900) {
	   $(".educationcontainer1").removeClass("invisible");
	   $(".educationcontainer1").addClass("animated fadeInUp");
    }
	if ($(this).scrollTop() > 1100) {
	   $(".educationcontainer2").removeClass("invisible");
	   $(".educationcontainer2").addClass("animated fadeInUp");
    }
	if ($(this).scrollTop() > 1300) {
	   $(".educationcontainer3").removeClass("invisible");
	   $(".educationcontainer3").addClass("animated fadeInUp");
    }
    if ($(this).scrollTop() > 1800) {
       console.log($(this).scrollTop());
	   $(".skill1").removeClass("invisible");
	   $(".skill1").addClass("animated fadeInUp");
    }
	 if ($(this).scrollTop() > 2000) {
       console.log($(this).scrollTop());
	   $(".skill2").removeClass("invisible");
	   $(".skill2").addClass("animated fadeInUp");
    }
	if ($(this).scrollTop() > 2200) {
       console.log($(this).scrollTop());
	   $(".skill3").removeClass("invisible");
	   $(".skill3").addClass("animated fadeInUp");
    }
});

});