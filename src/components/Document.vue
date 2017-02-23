<template>
  <div class="wrapper">
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
      <tr v-for="(item,index) in info">
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
    <div class="row w pages">
      <div class="col t-l v-m">
        共<i>1</i>页，当前第<i>1</i>页，<i></i>条记录
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
      info: config.info,
      caption: config.caption
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/css/table.css';
</style>
