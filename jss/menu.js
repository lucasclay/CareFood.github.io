$(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 240){
            $("#menu").addClass("menu-fixed-top", 500);
        } else {
            $("#menu").removeClass("menu-fixed-top", 500);
        }
    });
});