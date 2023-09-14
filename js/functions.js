$(document).ready(function () {
  var val1 = 0;

  $(".navbar-handler")
    .children("img")
    .click(function () {
      if (val1 == 0) {
        $(this).attr("src", "images/cross.png");
        $(".navbar-custom").slideToggle();

        val1 = 1;
      } else {
        $(".navbar-custom").slideToggle();
        $(this).attr("src", "images/hamburger.png");
        val1 = 0;
      }
    });
});

$(document).ready(function () {
  $(".scroll-link").on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $(".next-btn").on("click", function (event) {
    console.log("click on next");
    if (localStorage.getItem("isBusiness")) {
      window.location = "business-invite.html";
    } else {
      window.location = "consumer-invite.html";
    }
    // var target = $(this.getAttribute('href'));
    // if (target.length) {
    //   event.preventDefault();
    //   $('html, body').animate({
    //     scrollTop: target.offset().top
    //   }, 1000);
    // }
  });
});

$(document).ready(function () {
  $(".js-btn-tooltip").tooltip();
  $(".js-btn-tooltip--custom").tooltip({
    customClass: "tooltip-custom",
  });
  $(".js-btn-tooltip--custom-alt").tooltip({
    customClass: "tooltip-custom-alt",
  });

  $(".js-btn-popover").popover();
  $(".js-btn-popover--custom").popover({
    customClass: "popover-custom",
  });
  $(".js-btn-popover--custom-alt").popover({
    customClass: "popover-custom-alt",
  });
});
