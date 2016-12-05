require("../sass/bingshi.scss");
$(".bs_aa>.sp").on("click",function(){
    $(this).find("i").addClass("bg").parent().siblings().find("i").removeClass("bg");
    if($(this).index()==1){
        $(".bs_list").show();
    }else{
        $(".bs_list").hide();
    }
})

$(".bs_list").on("click","span",function(){
    if($(this).hasClass("bs_bg")){
        $(this).removeClass("bs_bg");
    }else{
        $(this).addClass("bs_bg");
    }
})

$(".bs_btn").on("click",function(){
    location.href="buchi.html";
})