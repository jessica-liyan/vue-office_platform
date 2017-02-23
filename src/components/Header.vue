<template>
  <div class="header">
    <div class="row w h">
      <div class="col v-m w-10 t-c">
        <img :src="logo" class="v-m">
      </div>
      <div class="col v-m t-l w-40">
        <img :src="tit" class="v-m">
      </div>
      <div class="col v-m t-r fs-0">
        <a href="#" v-for="item in login" class="ib v-m pl-10 pr-10 login p-r">
          <img :src="item.img" alt="" class="v-m mr-5">
          <span class="v-m fs-14 c-white">{{item.text}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    logo: {
      type: String,
      default: ''
    },
    tit: {
      type: String,
      default: ''
    },
    login: {
      type: Array,
      default: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
