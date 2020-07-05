// date for copyright
// const date = new Date();
// document.getElementById("demo").innerHTML = date;

//show/hide scroll to top button
const topButton = document.getElementById("topButton");
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 705 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}


//disable rightclick on images
$("body").on("contextmenu", "img", function(e) {
    return false;
});


// smooth scroll to href div
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
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
        }, 200, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
        //   window.location.hash = hash;
        });
      } // End if
    });
  });