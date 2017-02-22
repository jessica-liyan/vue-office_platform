<template>
  <div class="sub">
    <template-bar :tit="tit"></template-bar>
  </div>
</template>

<script>
import templateBar from './Template'
export default {
  name: 'view',
  data () {
    return {
      tit: '阅件'
    }
  },
  components: {
    templateBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
