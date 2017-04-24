$.get('/ajax/category',function(d){
    var windowH=$(window).height();
    var windowW=$(window).width();
    new Vue({
        el: '#app',
        data: {
            items:d,
            screenWidth:windowW,
            scrollH:windowH-45,
        }


    });
},'json');