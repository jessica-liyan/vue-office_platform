<template>
  <div class="nav row">
    <router-link v-for="item in menu" :to="item.url" class="nav-item v-m" :name="item.name">
        <img :src="item.icon" class="v-m mr-5">
        <span class="v-m">{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
import config from '../config/index.js'
export default {
  name: 'nav',
  data () {
    return {
      menu: config.menu
    }
  }
}
</script>

<style>
</style>
