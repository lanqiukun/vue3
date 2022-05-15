<template>
    <div>{{fullname}}</div>
    <div>{{props.age}}</div>
    <a-button @click="add_age"> add age </a-button>

    <ul>
        <li><router-link to="/route/Edison">route demo</router-link></li>
        <li><router-link to="/store">store demo</router-link></li>
        <li><router-link to="/ant">Ant demo</router-link></li>
        <li><router-link to="/axios">Axios demo</router-link></li>
    </ul>
</template>

<script setup>

import { computed, defineProps, watch, defineEmits } from 'vue'

var props = defineProps({
    first_name: String,
    last_name: String,
    age: Number,
})

var fullname = computed(() => {
    return props.first_name + ' ' + props.last_name
})

watch(() => props.age, (n, o) => {
    console.log(n, o)
})

let emit = defineEmits(['change_age'])

function add_age() {
    emit('change_age', 1)
}


</script>

<style lang='less' scoped>

</style>