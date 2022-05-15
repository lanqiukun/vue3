<template>
  <Child :first_name="person.first_name" :last_name="person.last_name" :age="person.age" @change_age="handle_change_age"></Child>

  <button @click="increase">store data: {{ $store.state.count }}</button>

  <Suspense>
    <template #default>
      <AsyncComponent></AsyncComponent>
    </template>

    <template #fallback>
          
          <div style="position: fixed; top: 50%; left: 50%;transform: translate(-50%, -50%);">
            <a-spin />
          </div>

    </template>
  </Suspense>
</template>

<script setup>


import { reactive } from '@vue/reactivity'
import Child from './Child.vue'
import store from '../store';

import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'))


var person = reactive({
  first_name: 'Edison',
  last_name: 'Hsieh',
  age: 26
})

function handle_change_age(year) {
  person.age += year
} 

function increase() {
    store.commit('increment', 2)
}

</script>

<style lang='less' scoped>

</style>