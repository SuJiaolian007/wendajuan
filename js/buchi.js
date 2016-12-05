require("../sass/buchi.scss");
$(".bc_list").on("click","span",function(){
    if($(this).hasClass("bg")){
        $(this).removeClass("bg");
    }else{
        $(this).addClass("bg");
    }
})

$(".bc_btn").on("click",function(){
    var str='<div class="dialog">'+
        '<span class="d_remove"></span>'+
        '<img src="../img/tk1.png" class="d_title">'+
        '<p class="d_info">亲,我们为您准备了60道体质测试题，请耐心如实答题，获取真实体质结果</p>'+
    '<p class="d_btn">开始测试</p>'+
        '</div>';
    $(".bc_content").append(str);
})

$(".bc_content").on("click",".d_remove",function(){
    $(this).parent().remove();
})

$(".bc_content").on("click",".d_btn",function(){
    location.href="dati.html";
})