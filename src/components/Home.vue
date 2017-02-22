<template>
  <div class="content">
    <content-item v-for="item in content" :icon="item.icon" :tit="item.tit" :list="item.list" :url="item.url1"></content-item>
  </div>
</template>

<script>
import config from '../config/index.js'
import contentItem from './Content'

export default {
  name: 'home',
  components: {
    contentItem
  },
  data () {
    return {
      content: config.content
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
