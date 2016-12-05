require("../sass/sex.scss");
$(".x_aa").on("click","li",function(){
    $(this).find(".x_select").addClass("bg")
        .parent().siblings().find(".x_select").removeClass("bg");
})

$(".x_btn").on("click",function(){
    location.href="bingshi.html";
})