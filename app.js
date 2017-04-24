var koa=require('koa');
var controller=require('koa-route');
var app=koa();
var views=require('co-views');
var render=views('./view',{
    map:{
        html:'ejs'
    }
});
var koa_static=require('koa-static-server');
var service=require('./service/webAppService.js');
app.use(koa_static({
    rootDir:'./static/',
    rootPath:'/static',
    maxage:0
}))
//测试
app.use(controller.get('/test',function *() {
    this.body='hello world';
}))
app.use(controller.get('/ejs_test',function *() {
 this.body=yield render('test',{title:'title_test'})
}))
app.use(controller.get('/api_test',function *() {
    this.body=service.get_test_data();
}))
//测试 end
//首页
app.use(controller.get('/',function *() {
    this.body=yield render('index',{title:'书城首页'})
}))
//男生频道
app.use(controller.get('/male',function *() {
    this.body=yield render('male',{nav:'男生频道'})
}))
//女生频道
app.use(controller.get('/female',function *() {
    this.body=yield render('female',{nav:'女生频道'})
}))
app.use(controller.get('/book',function *() {
    var querystring=require('querystring');
    var params=querystring.parse(this.req._parsedUrl.query);
    var boolId=params.id;
    this.body=yield render('book',{nav:'书籍详情',bookId:boolId})
}))
//首页接口
app.use(controller.get('/ajax/index',function *() {
    var querystring=require('querystring');
    this.body=service.get_index_data();
}))
app.use(controller.get('/reader',function *() {
    this.body=yield render('reader');
}))

//排行接口
app.use(controller.get('/ajax/rank',function *() {
    var querystring=require('querystring');
    this.body=service.get_rank_data();
}))
//排行页面渲染
app.use(controller.get('/rank',function *() {
    this.body=yield render('rank',{nav:'排行'})
}))
//女生频道接口
app.use(controller.get('/ajax/female',function *() {
    var querystring=require('querystring');
    this.body=service.get_female_data();
}))
//分类页面渲染
app.use(controller.get('/category',function *() {
    this.body=yield render('category',{nav:'分类'})
}))
//分类页面接口
app.use(controller.get('/ajax/category',function *() {
    var querystring=require('querystring');
    this.body=service.get_category_data();
}))
//男生频道接口
app.use(controller.get('/ajax/male',function *() {
    var querystring=require('querystring');
    this.body=service.get_male_data();
}))
//书籍章节接口
app.use(controller.get('/ajax/chapter_data',function *() {
    var querystring=require('querystring');
    var params=querystring.parse(this.req._parsedUrl.query);
    var id=params.id;
     id=id||"";
    this.body=service.get_chapter_content_data(id);
}))
app.use(controller.get('/ajax/book',function *() {
    var querystring=require('querystring');
    var params=querystring.parse(this.req._parsedUrl.query);
    var id=params.id;
    id=id||"";
    this.body=service.get_book_data(id);
}))
app.use(controller.get('/ajax/search',function *() {
    var querystring=require('querystring');
    var params=querystring.parse(this.req._parsedUrl.query);
    var start=params.start;
    var end=params.end;
    var keyword=params.keyword;
    this.body=yield service.get_search_data(start,end,keyword);
}))
app.use(controller.get('/search',function *() {
    this.body=yield render('search',{nav:'搜索'})
}))
app.use(controller.get('/ajax/chapter',function *() {
    this.body=service.get_chapter_data();
}))
app.listen(3001);
console.log('start...');