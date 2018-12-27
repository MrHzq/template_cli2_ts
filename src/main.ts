import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'
import './components/global'

Vue.use(hzqTool)

let apiUrl = []
const requireComponent = require['context']('@/apiUrl', true, /\.ts$/)
requireComponent.keys().map(fileName => {
    let prefix = ''
    if (fileName.match(/\//g).length > 1) {
        // 如果长度大于1，则表明访问接口是需要前缀的，则自动获取到前缀并地址中加上
        prefix = '/' + fileName.split(/\//g)[1]
    }
    let arr = requireComponent(fileName).default.map(u => {
        u.url = prefix + u.url
        return u
    })
    apiUrl.push(...arr)
})
console.log(apiUrl)
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
