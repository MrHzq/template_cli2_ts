/*
 * @Author: hzq
 * @Date: 2018-08-28 17:50:19
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-12 15:44:04
 * @文件说明: 所有路由处理
 */
import hzqRouter from 'hzq-router'
import channel from './channel'
let routes = Object.assign({ '/': [{ name: 'test' }] }, channel)

export default hzqRouter(routes)
