// Add smooth scrolling on all links inside the navbar
$("#navbarResponsive a").on('click', function(event) {

  // if hash has a value
  if (this.hash !== "") {

    // Prevent default behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // 800 is number of miliseconds
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) according to scroll location
      window.location.hash = hash;
    });

  } // End if

});

//Trigger tab on accordion

//on click event
$('.custom-link1').on('click', function (evt) {
  // trigger click on specific id
  $('#target-tab-link1').trigger('click');
  
});

$('.custom-link2').on('click', function (evt) {
  $('#target-tab-link2').trigger('click');
  
});

$('.custom-link3').on('click', function (evt) {
  $('#target-tab-link3').trigger('click');
  
});

//scrool to top  used J Query fadeIn and fadeOut
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});

