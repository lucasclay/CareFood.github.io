$(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50){
            $("#menu").addClass("menu-total", 140);
            $("#menu-ul").addClass("menu-ul2", 140);
            $(".menu-li").addClass("menu-li2", 140);
            $(".logo").addClass("logo2", 140);
        } else {
            
            $("#menu").removeClass("menu-total", 140);
            $("#menu-ul").removeClass("menu-ul2", 140);
            $(".menu-li").removeClass("menu-li2", 140);
            $(".logo").removeClass("logo2", 140);
        }
        
    });
});





