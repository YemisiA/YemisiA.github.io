// Add smooth scrolling on all links inside the navbar
$("#navbarResponsive a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

//Trigger click on accordion

$('.custom-link1').on('click', function (evt) {
  $('#target-tab-link1').trigger('click');
  
});

$('.custom-link2').on('click', function (evt) {
  $('#target-tab-link2').trigger('click');
  
});

$('.custom-link3').on('click', function (evt) {
  $('#target-tab-link3').trigger('click');
  
});

//scrool to top arrow
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

