(function main(){
 

// ####### Native browser smooth scrolling with jQuery              #######
// ####### https://css-tricks.com/snippets/jquery/smooth-scrolling  #######

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// ####### END SMOOTH SCROLLING #######




//#######  STARTS change BACKGROUND with season #######/////

var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var total = month;

// var total = Date().getMonth() + 1;
var imagebackground = "../img/glenn-carstens-peters-112923.jpg"

console.log(total);


// Summer
if (total >= 6 && total <= 8) { imagebackground="../img/background/summer/cé.jpg"; };
// Autumn
if (total >= 9 && total <= 11) { imagebackground="../img/background/autumn/leaf.jpg"; };
// Winter
if (total == 12 || total <= 2) { imagebackground="../img/background/winter/roman-kraft-508148.jpg"; };
// Spring
if (total >= 2 && total <= 6) { imagebackground="../img/background/spring/daisies.jpg"; };

console.log("'"+imagebackground+ "'");

document.body.style.backgroundImage = url("'"+imagebackground+ "'");

 
 






})();

