 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })

$(".gallery-photos").children("img").click(function(){
      $(this).toggleClass('large-image');
});
$(".fa-facebook").click(function(){
      window.location.href ="https://www.facebook.com/"
});
$(".fa-instagram").click(function(){
      window.location.href ="https://www.instagram.com/"
});
$(".fa-twitter").click(function(){
      window.location.href ="https://twitter.com/?lang=pl"
});