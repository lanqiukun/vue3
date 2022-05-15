<template>
    <h2>The person is {{ name }}</h2>
</template>

<script setup>
import { ref } from 'vue'

let p = new Promise((resovle, reject) => {
    setTimeout(() => {
        resovle('Edison')
    }, 1000);
})

let result = await p

let name = ref(result)


</script>

<style lang='less' scoped>

</style>