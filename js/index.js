$(document).ready(function() {
    $("#achievement").css({
        "background": "url('../img/achievements.svg') -240px 0px"
    });
    show($("#achievement")[0]);

    // $("#achievement").hover(function() {
    //     $(this).animate({
    //         opacity: 0.8,
    //     }, 500);
    // }, function() {
    //     $(this).animate({
    //         opacity: 1,
    //     }, 500);
    // });
    
    $("#achievement").click(function() {
        disappear(this);
    });
});

function show(object) {
    $(object).animate({
        opacity: 1,
        top: "+=300"
    }, 2000);
}

function disappear(object) {
    $(object).addClass("rotate");
    $(object).animate({
        opacity: 0,
    }, 300, function() {
        $(object).removeClass("rotate");
        $(object).hide();
    });
}