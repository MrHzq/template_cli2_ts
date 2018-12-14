import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'
import apiUrl from './apiUrl'

Vue.use(hzqTool)
Vue.use(hzqAxios, apiUrl, {
    baseURL: 'https://open-api.beone.app',
    createConfig: {
        headers: {
            'X-APPID': 'x9UdyFXeEwMp'
        }
    },
    beforeRequest(config) {
        let token = sessionStorage.getItem('xkt_qazplm')
        if (token) {
            config.headers['X-TOKEN'] = JSON.parse(token)
        }
        if (config.url === '/web/analyst/logout') {
            sessionStorage.clear()
        }
        return config
    },
    respSuccess(resp) {
        if (resp.data.code !== 0) {
            console.error(resp.data.msg)
            if (resp.data.code === 99999) {
                sessionStorage.clear()
                router.push('/login')
            }
        }
    },
    respError(error) {
        if (
            error.config.url.match('getVideoVsampleInfo') ||
            error.config.url.match('getVideoTransCodeInfo')
        ) {
        } else {
            console.error('网络异常，请稍后重试')
        }
    }
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
