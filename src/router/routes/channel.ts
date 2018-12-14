/*
 * @Author: hzq
 * @Date: 2018-09-17 14:45:43
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-10 10:31:17
 * @文件说明: 渠道相关路由
 */
// key：为views下面的【文件夹】名称
// []：为对应key下面的【.vue文件】名称
/*{
    name:'add-channel', .vue文件名
    children: ['publish-article', 'my-article'], 以name为文件夹的里面的.vue文件名
    meta: { requiresAuth: true } 路由元信息
} */
// 然后统一在all.js里面引入该文件
export default {
    channel: [
        {
            name: 'add-channel'
        }
    ]
}
