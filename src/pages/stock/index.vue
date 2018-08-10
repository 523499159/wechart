<template>
  <div class="stock">
    <div class="header"> 
      <div class="input-wrap">
        <input type="text" confirm-type="search" @change="inputInsert" placeholder="输入客户名称/手机号" v-model.lazy="proSearchInfo" />
      </div>
      <span class="cancel">取消</span>
    </div>
    <scroll-view class="content" scroll-y>
      <div class="product-box" v-for="(im, ix) in 9" :key="ix">
        <div class="product-left">
          <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530176897&di=3ae0a9ec7e3e050bc14651b31016f3d2&src=http://img13.360buyimg.com/n0/jfs/t2224/71/493902970/397881/1f3d928a/56120e2fNeab13209.jpg" alt="">
          <span class="product-decs">
            <p>0630-11</p>
            <p>雪纺衫</p>
            <p>衬衣</p>
          </span>
        </div>
        <div class="product-right text-right">
          <span class="product-decs">
            <p>4992</p>
            <p>￥499000</p>
          </span>
          <span></span>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

export default {
  components: {

  },

  data () {
    return {
      proSearchInfo: ''
    }
  },

  methods: {
    inputInsert() {
     
    },
  },

  created () {
    // const logs = (wx.getStorageSync('logs') || [])
    // this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang=less scoped>
.stock{
  height: 100%;
  overflow: hidden;
}
.text-right{
  text-align: right;
}

.header{
    padding: 10rpx 20rpx;
    display: flex;
    align-items: center;
    height: 80rpx;
    justify-content: space-around;
    border-bottom: 1rpx solid #999;
    .input-wrap{
      display: flex;
      align-items: center;
      border: 1rpx solid #999;
      border-radius: 8rpx;
      width: 550rpx;
      height: 55rpx;
      background: #f8f9f8;
      input{
        /*border-bottom: 1rpx solid #666;*/

        font-size: 28rpx;
        padding: 2rpx 8rpx;
        box-sizing: border-box;
        &::placeholder{
          color: red;
        }
      }
    }
    .cancel{
      color: #3366ff;
      font-size: 28rpx;
      height: 80rpx;
      line-height: 80rpx;
    }
}
.content{
  font-size: 28rpx;
  max-height: 1004rpx;
  .product-box{
    height: 160rpx;
    box-sizing: border-box;
    padding: 4rpx 8rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .product-left, .product-right {
      display: flex;
      justify-content: space-between;
    }
    .product-left{
      img{
        height: 140rpx;
        width: 100rpx;
      }
    }
    .product-decs{
      margin: 0 10rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
