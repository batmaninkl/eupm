/*!
* Start Bootstrap - Coming Soon v6.0.5 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Video Modal
$(document).ready(function () {
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
    console.log($videoSrc);
  });
  console.log($videoSrc);

  $("#vModal-1").on("shown.bs.modal", function (e) {
    $("#video-1").attr(
      "src",
      $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1"
    );
  });

  $("#vModal-1").on("hide.bs.modal", function (e) {
    $("#video-1").attr("src", $videoSrc);
  });

  $("#vModal-2").on("shown.bs.modal", function (e) {
    $("#video-2").attr(
      "src",
      $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1"
    );
  });

  $("#vModal-2").on("hide.bs.modal", function (e) {
    $("#video-2").attr("src", $videoSrc);
  });

  $("#vModal-3").on("shown.bs.modal", function (e) {
    $("#video-3").attr(
      "src",
      $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1"
    );
  });

  $("#vModal-3").on("hide.bs.modal", function (e) {
    $("#video-3").attr("src", $videoSrc);
  });
});




var myCarousel = document.querySelector('#carousel1')
var carousel = new bootstrap.Carousel(carousel1, {
  interval: 5000,
  wrap: true,
  keyboard: true
})