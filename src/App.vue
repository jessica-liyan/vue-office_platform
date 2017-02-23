<template>
  <div id="app" class="view">
    <headerBar :logo="logo" :tit="tit" :login="login"></headerBar>
    <navBar :menu="menu"></navBar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerBar from './components/Header'
import navBar from './components/Nav'
import config from './config/index.js'
export default {
  name: 'app',
  components: {
    headerBar,
    navBar
  },
  data () {
    return {
      logo: config.logo,
      tit: config.title,
      login: config.login,
      menu: config.menu
    }
  }
}
</script>

<style>
@import 'assets/css/main.css';
.view{width:100%;height:100%;padding-top:70px;padding-left:150px;box-sizing:border-box;}

.header{height:70px;background:#559EFE;margin-top:-70px;margin-left:-150px;box-sizing:border-box;}
.login:after{content:'';display:inline-block;width:1px;height:14px;background:#fff;position:absolute;right:0;top:50%;margin-top:-7px;}
.login:last-child:after{width:0;}

.nav{width:150px;height:100%;margin-left:-150px;background:#447DC8;float:left;}
.nav-item{display:block;text-align:center;font-size:15px;color:#fff;padding:15px 0;border-bottom:1px solid #4085CC;}
.nav-item.active{}

.main{width:100%;height:100%;overflow:hidden;background:#EEEEEE;}
.content{font-size:0;width:100%;height:100%;overflow:auto;padding:10px;box-sizing:border-box;}
.content-item{display:inline-block;width:50%;padding:5px;box-sizing:border-box;vertical-align:top;}
.content-item h2{padding:8px 20px;background:#EEF7FF;border-bottom:1px solid #429FFF;font-size:16px;color:#006fe3;position:relative;}
.content-info{background:#fff;border:1px solid #d9dee9;border-radius:4px;height:350px;}
.content-info-list{padding:8px;display:inline-block;font-size:14px;border-bottom:1px solid #EEEEEE;width:100%;box-sizing:border-box;}
.type{display:inline-block;width:16px;height:16px;border-radius:4px;font-size:12px;color:#fff;text-align:center;line-height:16px;background:#ccc;margin:0 10px;}
.type.red{background:#EE0000;}
.type.green{background:#22AC38;}
.type.yellow{background:#FF9900;}
.text{color:#333;}
.text:hover{color:#0072FF;}
.time{color:#999;float:right;}
.more{font-size:12px;color:#429fff;position:absolute;right:10px;top:50%;height:14px;line-height:14px;margin-top:-7px;}

/*首页二级页面模板*/
.info{padding:10px;box-sizing:border-box;}
.info-nav{font-size:12px;color:#999;display:inline-block;padding:8px;}

/*美化谷歌滚动条*/
::-webkit-scrollbar{width:6px;background:#EEEEEE;-webkit-border-radius:5px;}
::-webkit-scrollbar-thumb{background:#ccc;-webkit-border-radius:5px;}
::-webkit-scrollbar-thumb:hover{background:#989898;}

</style>
