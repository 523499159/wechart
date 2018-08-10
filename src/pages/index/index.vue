<template>
  <div class="container">
    <div class="banner">
      <img class="order" src="../../asset/账本@2x.png" alt="">
      <img class="circle" src="../../asset/圆环@2x.png" alt="">
    </div>
    <div class="content">
      <div class="fun-wrap" v-for="(item, index) in functionList" :key="index" @click="navTo">
        <div class="fun">
          <img :src="item.imgUrl" :alt="item.name">
          <p :style="{color: item.name === '增加' ? '#fff' : ''}">{{item.name}}</p>
        </div>
        
      </div>
    </div>
    <!-- <div class="footer">
      <div class="nav-wrap" v-for="(item, index) in footerList" :key="index">
        <div class="nav">
          <img :src="item.imgUrl" :alt="item.name">
          <p :style="{color: item.name === '增加' ? '#fff' : ''}">{{item.name}}</p>
        </div>
        
      </div>
    </div> -->
  </div>
</template>

<script>
import card from '@/components/card'
import vueTabBar from './tabBar'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      functionList: [
        {
          imgUrl: '/static/asset/销售开单@2x.png',
          name: '销售开单'
        },
        {
          imgUrl: '/static/asset/商品入库@2x.png',
          name: '商品入库'
        },
        {
          imgUrl: '/static/asset/商品总览@2x.png',
          name: '商品总览'
        },
        {
          imgUrl: '/static/asset/客户管理@2x.png',
          name: '客户管理'
        },
        {
          imgUrl: '/static/asset/厂家管理@2x.png',
          name: '厂家管理'
        },
        {
          imgUrl: '/static/asset/增加@2x.png',
          name: '增加'
        }
      ],
      footerList: [
        {
          imgUrl: '/static/asset/销售开单@2x.png',
          name: '首页'
        },
        {
          imgUrl: '/static/asset/商品入库@2x.png',
          name: '库存'
        },
        {
          imgUrl: '/static/asset/商品总览@2x.png',
          name: '统计'
        },
        {
          imgUrl: '/static/asset/客户管理@2x.png',
          name: '我的'
        }
      ]
    }
  },

  components: {
    card,
    vueTabBar
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },

    navTo () {
      wx.navigateTo({
        url: `/pages/saleOpen/main`
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang=less scoped>
  .banner {
    width: 100%;
    height: 627rpx;
    background: #08a4c0;
    .order {
      display: block;
      width: 572rpx;
      height: 360rpx;
      margin: 126rpx auto 0;
    }
    .circle {
      display: block;
      /*width: 100%;*/
      height: 140rpx;
      margin: 0 auto;
    }
  }
  .content {
    width: 100%;
    font-size: 0;
    .fun-wrap{
      display: inline-flex;
      font-size: 28rpx;
      width: 33.33%;
      box-sizing: border-box;
      height: 240rpx;
      justify-content: center;
      align-items: center;
      .fun{
        img {
          display: block;
          width: 80rpx;
          height: 80rpx;
          margin: 0 auto;
        }
        p{
          text-align: center;
        }
      }
    }
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
    background: #f8f8f8;
    .nav-wrap{
      display: inline-flex;
      font-size: 24rpx;
      width: 25%;
      box-sizing: border-box;
      height: 100rpx;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 60rpx;
        height: 60rpx;
        margin: 0 auto;
      }
      p{
        text-align: center;
      }
    }

  }
</style>
