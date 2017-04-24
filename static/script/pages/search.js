var windowH=$(window).height();
var windowW=$(window).width();
new Vue({
    el: '#search',
    data: {
        screenWidth:windowW,
        scrollH:windowH-45,
        search:[],
        condition:true,
        empty:false
    },
    methods: {
        doSearch: function(e) {
            var keyword = $('#keyword').val();
            var _this = this;
            $.get('/ajax/search',{
                keyword:keyword
            },function(d){
                _this.condition = false;
                _this.search = d.items;
                if(_this.search.length == 0){
                    _this.empty = true;
                }else{
                    _this.empty = false;
                }
            },'json')
        }
    }
})