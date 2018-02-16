(function main(){
 
// Sticky navbar
// =========================
$(document).ready(function() {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function() {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});

// Sticky TOP button
// =================
$(document).ready(function(){
      // "Back to top" for english version, "Haut de page" for french version
      $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-arrow-up"></i>Haut de page</div>');
      $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    // Snippet from Thomas [16 h 49]
    // $(‘[href^=“#”]’).click(function() {
    //      $(“html, body”).animate({ scrollTop: 0 }, “slow”);
    //      return false;
    //    }
    //  });
});



// ####### FUNCTION IMAGE RANDOM #######
//  document.getElementById('imageAleatoire').style.backgroundImage = "url(img/background/image" + Math.round(Math.random()*11+1) +".jpg)"; 
// ####### END FUNCTION IMAGE RANDOM #######


//#######  STARTS change BACKGROUND with season #######/////
//https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript

var month = new Date().getMonth();
var season = 'spring';
var months = month+2;

if (month>=13) {
  month = 1;
}

switch (month){
  //december, january, february 
  case 1:
  case 2:
  case 3:
    season = "winter";
    break;

  //june, july, august
  case 7:
  case 8:
  case 9:
    season = "summer";
    break; 

  //september, october, november
  case 10:
  case 11:
  case 12:
    season = "autumn";
    break;        
}

document.body.style.backgroundImage = "url(img/background/"+ season + "/img_" + Math.round(Math.random()*3+1) + ".jpg)";

 
})();
