$(document).on("scroll",function(){
    if($(document).scrollTop()>100){ //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $("#teste").addClass("small"); //TROCA P CLASSE MENOR
    } else{
        $("#teste").removeClass("small"); //VOLTA P MENU GRANDE ORIGINAL
    }
});