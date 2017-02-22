<template>
  <div class="content-item">
      <div class="content-info">
        <h2>
            <img :src="icon" class="v-m">
            <span class="v-m">{{tit}}</span>
            <router-link class="more" :to="url">+查看更多</router-link>
        </h2>
        <ul>
            <li v-for="item in list" class="content-info-list">
                <span class="type" :class="{'red':item.type == '督','green':item.type == '平','yellow':item.type == '急'}">{{item.type}}</span>
                <router-link class="text" :to="item.url">{{item.text}}</router-link>
                <span class="time">{{item.time}}</span>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    icon: {
      type: String,
      default: ''
    },
    tit: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
