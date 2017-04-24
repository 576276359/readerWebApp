$.get("/ajax/female",function (d) {
    var windowH=$(window).height();
    var windowW=$(window).width();
    new Vue({
        el:'#app',
        data:{
            screenWidth:windowW,
            scrollH:windowH-45,
            focus:d.items[0].data.data,
            recommend:d.items[1].data.data,
            new:d.items[2].data.data,
            end:d.items[3].data.data,
            focusHiddeninfo:"查看更多",
            recommendHiddeninfo:"更多主编推荐",
            newHiddeninfo:"更多新书抢先读",
            endHiddeninfo:"更多完本精品"
        }
    })
},"json")
