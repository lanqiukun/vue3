<template>
  
  <button @click="increase">点击增加：{{ $store.state.count }}</button>
  
  <button @click="$store.dispatch('async_func')">async_func</button>
  
  <div>{{ $store.getters.even_numbers }}</div>

  <router-link to='/'>go home</router-link>
  
</template>

<script setup>
import store from '../store'

function increase() {
    store.commit('increment')
}

</script>

<style lang='less' scoped>

</style>