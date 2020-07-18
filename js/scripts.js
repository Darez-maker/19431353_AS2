
/* SCRIPTS.JS */

function changePic() {
    document.getElementById("profilePic").src = "images/landing-page.jpg";
  }
  
  function normalPic() {
    document.getElementById("profilePic").src = "images/landing-page.jpg";
  }


$(".go-to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

