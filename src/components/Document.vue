<template>
  <div class="wrapper">
    <div class="search">
      <div class="row w h mb-10">
        <div class="col v-m">
          <input type="text" placeholder="数据源显示名称" v-model="name">
          <input type="text" placeholder="数据库类型" v-model="type">
          <a href="javascript:;" class="search-btn" v-on:click="search(name,type)"><img src="../../static/img/search.png" class="v-m"></a>
        </div>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <colgroup>
          <col width="5%" />
          <col width="18%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="17%" />
        </colgroup>
        <tr>
          <th v-for="item in caption">{{item}}</th>
        </tr>
        <tr v-for="(item,index) in limit(info)" v-bind:index ="index">
          <td>{{index+1}}</td>
          <td>
            <img :src="'static/img/' + item.type + '.png'" alt="" class="v-m mr-10 ml-10">
            {{item.tit}}
          </td>
          <td>{{item.entit}}</td>
          <td>{{item.default}}</td>
          <td>{{item.type}}</td>
          <td>{{item.ip}}</td>
          <td>{{item.post}}</td>
          <td>{{item.description}}</td>
          <td>
            <button class="btn pop">连接测试</button>
            <button class="btn edit">修改</button>
            <button class="btn del" v-on:click="info.splice(index, 1)">删除</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="pages">
      <div class="row w h">
        <div class="col t-l v-m">
          共<i v-text="pages"></i>页，当前第<i v-text="i"></i>页，<i v-text="sum"></i>条记录
        </div>
        <div class="col t-r v-m">
          <a href="javascript:;" v-on:click="home()">首页</a>
          <a href="javascript:;" v-on:click="prev()">上一页</a>
          <a href="javascript:;" v-on:click="next(pages)">下一页</a>
          <a href="javascript:;" v-on:click="end(pages)">末页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../config/index.js'

export default {
  name: 'document',
  data () {
    return {
      name: '',
      type: '',
      index: 0,
      i: 1,
      info: config.info,
      caption: config.caption,
      // 每页显示的最大记录数
      max: 8
    }
  },
  computed: {
    sum () {
      return config.info.length
    },
    pages () {
      return Math.ceil(config.info.length / this.max)
    }
  },
  methods: {
    limit (obj) {
      return obj.slice(0, this.max)
    },
    // 首页
    home () {
      this.info = config.info
      this.info = this.info.slice(0, this.max)
    },
    // 尾页
    end (n) {
      this.info = config.info
      this.info = this.info.slice((n - 1) * this.max)
    },
    // 上一页
    prev () {
      if (this.i > 1) {
        this.i = this.i - 1
        this.info = config.info
        this.info = this.info.slice((this.i - 1) * this.max)
      } else {
        return false
      }
    },
    // 下一页
    next (n) {
      if (this.i < n) {
        this.i = this.i + 1
        this.info = config.info
        this.info = this.info.slice((this.i - 1) * this.max)
      } else {
        return false
      }
    },
    search (name, type) {
      this.info = config.info
      if (name === '' && type !== '') {
        this.info = this.info.filter(function (item) {
          return item.type.match(type)
        })
      } else if (name !== '' && type === '') {
        this.info = this.info.filter(function (item) {
          return item.tit.match(name)
        })
      } else if (name !== '' && type !== '') {
        this.info = this.info.filter(function (item) {
          return item.tit.match(name) && item.type.match(type)
        })
      } else {
        this.info = this.info
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
  功能：限制每页显示的记录数，动态加载
  列表循环v-for中加筛选条件
-->
<style>
@import '../assets/css/table.css';
</style>
