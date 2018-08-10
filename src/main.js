import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

console.log('App', App)

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去 
    pages: [
      'pages/index/main', 
      'pages/saleOpen/main', 
      'pages/statistics/main', 
      'pages/stock/main', 
      'pages/logs/main', 
      '^pages/login/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/main',
          iconPath: 'static/asset/home.png',
          selectedIconPath: 'static/asset/home-actived.png'
        },
        {
          text: '库存',
          pagePath: 'pages/stock/main',
          iconPath: 'static/asset/board.png',
          selectedIconPath: 'static/asset/board-actived.png'
        },
        {
          text: '统计',
          pagePath: 'pages/statistics/main',
          iconPath: 'static/asset/note.png',
          selectedIconPath: 'static/asset/note-actived.png'
        },
        {
          text: '我的',
          pagePath: 'pages/logs/main',
          iconPath: 'static/asset/profile.png',
          selectedIconPath: 'static/asset/profile-actived.png'
        }
      ]
    }
  }
}
