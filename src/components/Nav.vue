<template>
  <div class="nav row">
    <router-link v-for="item in menu" :to="item.url" class="nav-item v-m" :name="item.name">
        <img :src="item.icon" class="v-m mr-5">
        <span class="v-m">{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props: {
    menu: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>
</style>
