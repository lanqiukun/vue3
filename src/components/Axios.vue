<template>
    <div>axios</div>




</template>

<script setup>

import { onMounted } from 'vue';
import * as api from '../api/index'



onMounted(() => {
    api.getHomepage({name: 'Edison', age: 26}).then(res => console.log(res))
})

</script>

<style lang='less' scoped>

</style>