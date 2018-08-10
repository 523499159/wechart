<template>
  <div class="sale-container">
    
    <scroll-view class="content" :scroll-y="!windowToShow">
      <div class="client-info">
        <div class="info-1">
          <span>客户</span>
          <span class="mock-input" @click="windowShow('client')">{{client}}</span>
          <button @click="clinentWindowShow('client')">+</button>
          <button>平账</button>
          <span>平欠10020</span>
        </div>
        <div class="info-1">
          <span>货站</span>
          <span class="mock-input" @click="windowShow('station')">{{station}}</span>
          <button @click="clinentWindowShow('client')">+</button>
        </div>
      </div>

      <div class="pro-info">
        <div class="title">
          <ul class="mock-table">
            <li>商品</li>
            <li>数量</li>
            <li>单价</li>
            <li>小计</li>
          </ul>
        </div>
        <div class="pro-detail" v-for="(item1, index1) in productList" :key="index1">
          <div class="name">
            <button @click="innerShow">+</button>
            <span>{{item1.name}}</span>
          </div>
          <div class="detail" v-for="(item2, index2) in item1.detail" :key="index2">
            <ul class="mock-table detail-ul">
              <li>{{item2.name}}</li>
              <li class="num-change">
                <button @click="changeNum(false, item2)">-</button>
                <input type="text" v-model.lazy="item2.num">
                <button @click="changeNum(true, item2)">+</button>
              </li>
              <li class="price">
                <input type="text" v-model.lazy="item2.price">
              </li>
              <li>{{item2.littelCal}}</li>
            </ul>
          </div>
        </div>

      </div>
    </scroll-view>
    
    
    <!-- <div class="right-window" :class="window2Show ? 'right-window-in' : 'right-window-out'"></div> -->
    
    <layout 
      :window-show="windowToShow"
    ></layout>

    <new-client 
      :window-show="newClientShow"
    ></new-client>

    <div class="footer">
      <div class="total">共￥850</div>
      <div class="next">下一步</div>
    </div>
    
  </div>
</template>

<script>
import card from '@/components/card'
import layout from '@/components/layout'
import newClient from '@/components/newClient'


export default {
  data () {
    return {
      windowToShow: false,
      newClientShow: false,
      num: 0,
      price: 100,
      userInfo: {},
      productList: [
        {
          name: 'MY1001，时尚豹纹打底衫',
          detail: [
            {
              name: '红色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            },
            {
              name: '红色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            }
          ]
        },
        {
          name: 'MY1005，时尚衬衫',
          detail: [
            {
              name: '红色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            },
            {
              name: '红色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            }
          ]
        },
        {
          name: 'MY1005，时尚衬衫',
          detail: [
            {
              name: '黄色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            },
            {
              name: '红色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            },
            {
              name: '红色 L码',
              num: 1,
              price: 1000,
              littelCal: 140
            },
            {
              name: '红色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            }
          ]
        },
        {
          name: 'MY1001，时尚豹纹打底衫',
          detail: [
            {
              name: '红色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            },
            {
              name: '红色 M码',
              num: 1,
              price: 1000,
              littelCal: 140
            }
          ]
        }
      ],
      yangjiang: '',
      inShow: true,
      targetSearchInput: '',
      client: '',
      station: ''
      
    }
  },

  components: {
    card,
    layout,
    newClient
  },

  methods: {
    changeNum (isAdd, item) {
      if (isAdd) {
        item.num++
      }else{
        item.num--
      }
    },

    clinentWindowShow(type) {
      this.newClientShow = true
      
      // if (type === 'client') {
      //   this.targetSearchInput = 'client'
      // }else {
      //   this.targetSearchInput = 'station'
      // }

    },

    windowShow(type) {
      this.windowToShow = true
      
      if (type === 'client') {
        this.targetSearchInput = 'client'
      }else {
        this.targetSearchInput = 'station'
      }
      
    },

    windowShowCtor() {
      this.windowToShow = !this.windowToShow
    },

    request() {
      const _this = this
      wx.request({
        url: 'http://47.106.206.172:5000/signin', 
        data: {
           x: '' ,
           y: ''
        },
        header: {
            'content-type': 'application/json' 
        },
        success: function(res) {
          console.log(res.data)
          _this.yangjiang = res.data.data.a
        }
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style lang=less scoped>
  
  .sale-container{
    position: fixed;
    top: 0;
    left: 0;
    padding: 20rpx 0 0;
    background: #f0f2f5;
    box-sizing: border-box;
    min-height: 1204rpx;
    width: 750rpx;
    .content{
      /*-webkit-overflow-scrolling: touch;*/
      max-height: 1084rpx;
      /*overflow-y: auto;*/
      /*overflow: hidden;*/
      /*height: 100%;*/
    }
    .client-info{
      width: 100%;
      height: 176rpx;
      font-size: 28rpx;
      background: #fff;
      .info-1{
        padding: 0 30rpx;
        display: flex;
        height: 88rpx;
        align-items: center;
        button{
          height: 56rpx;
          border: #ffc2a7 solid 1rpx;
          color: #ffc2a7;
          line-height: 56rpx;
          margin-left: 0;
        }
        .mock-input{
          border-bottom: #e6e6e6 solid 1rpx;
          width: 274rpx;
          height: 56rpx;
          line-height: 56rpx;
          padding: 2rpx 8rpx;
          box-sizing: border-box;
        }
      }
    }
    .pro-info{
      margin-top: 30rpx;
      font-size: 28rpx;
      width: 100%;
      /*height: 70rpx;*/
      background: #fff;
      .title{
        background: #fafafa;
      }
    }
    .pro-detail{
      border-bottom: #f2f2f5 solid 1rpx;
      .name{
        display: flex;
        button{
          margin-left: 16rpx;
          margin-right: 16rpx;
        }
        span{
          height: 86rpx;
          line-height: 86rpx;
          font-size: 36rpx;
        }
      }
      .detail{

        .num-change{
          display: flex;
          align-items: center;
          input{
            border-bottom: #e6e6e6 solid 1rpx;
            width: 80rpx;

          }
          button{
            font-size: 50rpx;
            width: 50rpx;
            height: 50rpx;
            text-align: center;
            line-height: 50rpx;
            padding: 0;
            color: #ffc2a7;

          }
        }
        .price{
          display: flex;
          align-items: center;
          input{
            width: 120rpx;
            border-bottom: #e6e6e6 solid 1rpx;
          }
        }
        .detail-ul{
          height: 88rpx;
        }

      }

    }
    .mock-table{
      display: flex;
      li{
        height: 70rpx;
        line-height: 70rpx;
        /*border-right: 1px solid #666; */
        text-align: center;
      }
      li:nth-of-type(1){
        width: 350rpx;
      }
      li:nth-of-type(2){
        width: 250rpx;
      }
      li:nth-of-type(3){
        width: 150rpx;
      }
      li:nth-of-type(4){
        width: 150rpx;
      }
    }
    .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100rpx;
      display: flex;
      text-align: center;
      line-height: 100rpx;
      color: #fff;
      z-index: 2;
      .total{
        width: 600rpx;
        background: #3a3635;
      }
      .next{
        background: #f23030;
        width: 450rpx;
      }
    }
    .right-window{
      position: absolute;
      height: 100%;
      width: 70%;
      background: green;
      right: 0;
      top: 0;
      z-index: 5;
      transition: all .5s;

    }
    .right-window-in{
      transform: translate(0); 

    }
    .right-window-out{
      transform: translate(100%);
    }
  }

  .fixed-scroll{
   /* overflow: hidden;
    height: 100%;*/
  }
  
</style>
