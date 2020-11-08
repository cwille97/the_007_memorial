$(document).ready(() => {
    $(".bond-card").hover(function() {
        $(this).children("img").css("opacity", "0.3");
        $(this).children("p").css("display", "block");
    }, function() {
        $(this).children("img").css("opacity", "1");
        $(this).children("p").css("display", "none");
    });
});