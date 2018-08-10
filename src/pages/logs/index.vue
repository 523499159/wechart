<template>
  <div class="mine">
    <div class="func-wrapper" v-for="(im, ix) in functionList" :key="ix" :style="{marginTop: im.name === '员工管理' ? '-1rpx': ''}">
      <span>{{im.name}}</span>
      <img src="/static/asset/arrowright.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },

  data () {
    return {
      functionList: [
        {name: '我的账号'},
        {name: '店铺管理'},
        {name: '员工管理'},
        {name: '全局设置'},
        {name: '消息通知'},
        {name: '服务器到期'},
        {name: '关于乐售'}
      ]
    }
  },

  created () {
   
  }
}
</script>

<style>
  page{
    height: 100%;
  }

</style>

<style lang=less scoped>

.mine{
  font-size: 28rpx;
  height: 100%;
  background: #eee;
  border-top: 1rpx solid #bbb;
  box-sizing: border-box;
  .func-wrapper {
    background: #fff;
    height: 90rpx;
    border-bottom: 1rpx solid #bbb;
    border-top: 1rpx solid #bbb;
    box-sizing: border-box;
    display: flex;
    padding: 4rpx 24rpx;
    justify-content: space-between;
    align-items: center;
    margin-top: 38rpx;
    img {
      width: 36rpx;
      height: 36rpx;
    }
  }
}

</style>
