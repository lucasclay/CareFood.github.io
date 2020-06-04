$(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 140){
            $("body").addClass("body2", 5000);
            $("#menu").addClass("menu-total", 5000);
            $("#menu-ul").addClass("menu-ul2", 5000);
            $(".menu-li").addClass("menu-li2", 5000);
            $(".menu-div").addClass("menu-div2", 5000);
            $(".menu-div").addClass("menu-div2:hover", 5000);
            $(".logo").addClass("logo2", 5000);
            $("#fundo-logo").addClass("fundo-logo2", 5000);
           //$("#up").addClass("up2", 500);
        } else {
            $("body").removeClass("body2", 5000);
            $("#menu").removeClass("menu-total", 5000);
            $("#menu-ul").removeClass("menu-ul2", 5000);
            $(".menu-li2").removeClass("menu-li2", 5000);
            $(".menu-div").removeClass("menu-div2", 5000);
            $(".menu-div").removeClass("menu-div2:hover", 5000);
            $(".logo").removeClass("logo2", 5000);
            $("#fundo-logo").removeClass("fundo-logo2", 5000);
            //$("#up").removeClass("up2", 500);
        }
        if ($(this).scrollTop() > 500){
            $("#up").addClass("up2", 5);
        } else {
            $("#up").removeClass("up2", 5);
        }
    });
});