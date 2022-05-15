<!-- https://www.bilibili.com/video/BV15T4y1175F -->
<template>
    <a-button @click="show_msg"> ant design ui button </a-button>
    <router-link to='/'>go home</router-link>
    

</template>

<script setup>

// import { Button } from 'ant-design-vue';
import { message, Spin } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib
import { h, onMounted } from 'vue';


import { LoadingOutlined } from '@ant-design/icons-vue';
Spin.setDefaultIndicator({
    indicator:h(LoadingOutlined, {
        style: { fontSize: '24px', },
        spin: true,
    })
});

onMounted(() => {

})

function show_msg() {
    message.info('haha')
}

</script>

<style lang='less' scoped>

</style>