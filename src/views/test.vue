<template>
    <div class="test">我是base</div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Text extends Vue {
        created() {
            this.$api
                .login({
                    password: 'qwer1234',
                    userNo: '13402318457'
                })
                .then(res => console.log(res))
        }
    }
</script>

<style scoped lang="scss">
    .test {
        color: red;
    }
</style>
