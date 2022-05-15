<template>
<div></div>
    <button @click="go_home">go home</button>
    <router-link :to="'/route/' + dest">About {{dest}}</router-link>
</template>

<script>
export default {
    // beforeRouteEnter 没有 composition api
    beforeRouteEnter(to, from, next) {
        console.log('onBeforeRouteEnter')
        console.log(to, from )
        next()
    }
}
</script>

<script setup>
import { computed, ref } from '@vue/runtime-core'
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

let route = useRoute()
let router = useRouter()

function go_home() {
    router.replace({path: '/'})
}

var name = ref(route.params.name)

var dest = computed(() => {
    return name.value == "Edison" ? "Recardo" : "Edison"
})

function update_dest(new_name) {
    name.value = new_name
}

onBeforeRouteLeave((to, from) => {
    console.log('onBeforeRouteLeave')
    console.log(to, from)
})

onBeforeRouteUpdate((to, from) => {
    console.log('onBeforeRouteUpdate')
    update_dest(to.params.name)
})

</script>

<style lang='less' scoped>

</style>