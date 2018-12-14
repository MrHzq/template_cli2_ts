import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'
import apiUrl from './apiUrl'

Vue.use(hzqTool)
Vue.use(hzqAxios, apiUrl, {
    baseURL: 'https://open-api.beone.app'
})

Vue.config.productionTip = false

// 全局方法 this. 的调用方式
declare module 'vue/types/vue' {
    interface Vue {
        $tool: any
        $api: any
    }
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
