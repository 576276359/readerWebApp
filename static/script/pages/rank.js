$.get('/ajax/rank',function (d) {
    var windowH=$(window).height();
    var windowW=$(window).width();
    for(var i=0;i< d.items.length;i++){
        d.items[i].description = d.items[i].description.split('\n');
    }
    new Vue({
        el:'#app',
        data:{
            screenWidth:windowW,
            scrollH:windowH-45,
            items:d.items
        }
    })
},'json')