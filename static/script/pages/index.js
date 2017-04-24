$.get('ajax/index',function (d) {
    var windowW=$(window).width();
    var windowH=$(window).height();
    var tabOffset=$(".swipe_tab a").eq(0).offset();
    var tabW=tabOffset.width;
    new Vue({
        el:'#app',
        data:{
            indexHeaderTabW:tabW,
            screenWidth:windowW,
            scrollH:windowH-45,
            doubleScreenW:windowW*2,
            top:d.items[0].data.data,
            hot:d.items[1].data.data,
            recommend:d.items[2].data.data,
            female:d.items[3].data.data,
            male:d.items[4].data.data,
            free:d.items[5].data.data,
            topic:d.items[6].data.data,
            duration:0,
            position:0,
            header_position:0,
            header_duration:0,
            tab_1_class:'swipe_tab_on',
            tab_2_class:''
        },
        methods:{
            tabSwitch:function (pos) {
                this.duration=0.5;
                this.header_duration=0.5;
                if(pos==0){
                    this.position=0;
                    this.header_position=0;
                    this.tab_1_class='swipe_tab_on';
                    this.tab_2_class="";
                }else{
                    this.position=(-windowW);
                    this.header_position=tabW;
                    this.tab_2_class='swipe_tab_on';
                    this.tab_1_class="";
                }
            }
        }
    })
},'json')