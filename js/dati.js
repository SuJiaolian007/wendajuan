require("../sass/dati.scss");

$.ajax({
    url:"../js/data.json",
    success:function(e){
        var str="";
        $.each(e,function(i,v){
            if(i<5){
               //console.log(i+"==="+v.qName);
                str+='<h3><span></span>'+v.qName+'</h3>'+
                        '<p><span>没有</span><span>很少</span><span>有时</span><span>经常</span><span>总是</span></p>';
            }
        })
        $(".dt_box").html(str);
    }
})

$(".dt_box").on("click","span",function(){
    $(this).addClass("dt_bg").siblings().removeClass("dt_bg");
})

$(".dt_btn").on("click",function(){
    var len=$(".dt_box .dt_bg").length;
    if(len<5){
        var num=5-len;
        alert("您还有"+num+"道题没有选择");
    }else{
        location.href="jg.html";
    }
})