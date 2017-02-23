import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Document from 'components/Document'
import Interior from 'components/Interior'
import Supervise from 'components/Supervise'
import Data from 'components/Data'
import Template from 'components/home/Template'
// import Give from 'components/home/Give'
// import File from 'components/home/File'
// import Chrome from 'components/home/Chrome'
// import View from 'components/home/View'
// import Notice from 'components/home/Notice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      components: {
        default: Home
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home
      }
    },
    {path: '/home/give', name: 'give', components: {default: Template}},
    {path: '/home/file', name: 'file', components: {default: Template}},
    // {path: '/home/chrome', name: 'chrome', components: {default: Chrome}},
    // {path: '/home/view', name: 'view', components: {default: View}},
    // {path: '/home/notice', name: 'notice', components: {default: Notice}},
    {
      path: '/document',
      name: 'document',
      components: {
        default: Document
      }
    },
    {
      path: '/interior',
      name: 'interior',
      components: {
        default: Interior
      }
    },
    {
      path: '/supervise',
      name: 'supervise',
      components: {
        default: Supervise
      }
    },
    {
      path: '/data',
      name: 'data',
      components: {
        default: Data
      }
    }]
})
