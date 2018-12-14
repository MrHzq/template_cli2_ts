/*
 * @Author: hzq
 * @Date: 2018-09-17 14:44:47
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-14 10:39:47
 * @文件说明: 新建渠道页面
 */
<template>
    <div class='add-channel'>
        我是新建渠道页面
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class AddChannel extends Vue {}
</script>

<style scoped lang="scss">
    .add-channel {
        height: 200px;
        color: aqua;
    }
</style>
