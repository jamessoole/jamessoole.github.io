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




// make image previews call button links

const  musicHappiness = document.querySelector("#music-happiness-index");
const  liveChat = document.querySelector("#live-chat-app");
const  dug = document.querySelector("#dug");
const  boxes = document.querySelector("#boxes");
const  musicPortfolio = document.querySelector("#music-portfolio");


musicHappiness.addEventListener("click", (e) => {
    document.querySelector("#musicSite").click();
});
liveChat.addEventListener("click", (e) => {
    document.querySelector("#chatCode").click();
});
dug.addEventListener("click", (e) => {
    document.querySelector("#dugCode").click();
});
boxes.addEventListener("click", (e) => {
    document.querySelector("#boxesSite").click();
});
musicPortfolio.addEventListener("click", (e) => {
    document.querySelector("#photoSite").click();
});