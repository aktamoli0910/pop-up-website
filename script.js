$(document).ready(() => {
    $(".clickme").on("click", function () {
      $("#popup").toggleClass("show");
    });
    $(".close").on("click", function () {
      $("#popup").removeClass("show");
      $("#popup").addClass("closing");

    });
  });