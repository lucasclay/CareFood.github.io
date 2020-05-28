$(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 80){
            $("#menu").addClass("menu-fixed-top img", 500);
            $("#menu2").addClass("menu2-2", 500);
            $(".logo").addClass("logo2", 500);
            $(".display").addClass("display2", 500);
            $(".teste").addClass("test2", 500);
            $("#fundo-logo").addClass("fundo-logo2", 500);
        } else {
            $("#menu").removeClass("menu-fixed-top", 500);
            $("#menu2").removeClass("menu2-2", 500);
            $(".logo").removeClass("logo2", 500);
            $(".display").removeClass("display2", 500);
            $(".teste").removeClass("test2", 500);
            $("#fundo-logo").removeClass("fundo-logo2", 500);
        }
    });
});