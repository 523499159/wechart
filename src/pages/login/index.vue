<template>
  <div class="login">
    <div class="logo">
      <span class="icon">乐售</span>
    </div>
    <div class="login-wrap phone">
      <i class="phone-icon"></i>
      <input type="tel" placeholder="手机号" v-model="phoneNum">
    </div>
    <div class="login-wrap username">
      <i class="phone-icon"></i>
      <input type="text" placeholder="工号" v-model="account">
    </div>
    <div class="login-wrap password">
      <i class="phone-icon"></i>
      <input type="password" placeholder="密码" v-model="password">
    </div>
    <div style="height: 45px;">
      <button class="button" @click="loginDone">登录</button>
    </div>
    <!-- <view class="section">
      
      <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange(0, $event)">
        <view class="picker">
          开始:{{startDate}}
        </view>
      </picker>
      <span> - </span>
      <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange(1, $event)">
        <view class="picker">
          截至: {{endDate}}
        </view>
      </picker>

    </view> -->
    <swTable></swTable>
  </div>
</template>

<style>
  .section{
    display: flex;

  }

</style>

<script>

import swTable from '@/components/swTable'

export default {
  components: {
    swTable
  },

  data () {
    return {
      phoneNum: '111',
      account: '222',
      password: '3333333',
      startDate: '2018-08-08',
      endDate: '2018-08-08'

    }
  },

  created () {
    
   
  },

  methods: {
    loginDone() {
      wx.showToast({
        title: '登录成功',
        // icon: 'none',
        duration: 2000,
        complete: (e) =>{
          setTimeout(() => {
            wx.switchTab({
              url: "/pages/index/main"
            })
          }, 1000)
          
        }
      })
    },

    bindDateChange: function(index, ev) {
      // console.log('picker发送选择改变，携带值为', e.detail.value)
      console.log('event', index, ev)
      if(index) {
        this.endDate = ev.target.value
      }else{
        this.startDate = ev.target.value
      }
      
    },
  },

  watch: {
    phoneNum(n) {
      this.phoneNum = n.replace(/[^0-9]/g, '')
    },

    account(n) {
      this.account = n.replace(/[^\a-\z\A-\Z0-9]/g, '')
    },

    password(n) {
      this.password = n.replace(/[^\a-\z\A-\Z0-9]/g, '')
    }
    
  }
}
</script>

<style>
  page{
    height: 100%;
  }

</style>

<style lang=less scoped>
  .login{
    height: 100%;
    .logo{
      width: 100%;
      height: 400rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        display: inline-block;
        width: 150rpx;
        height: 150rpx;
        border: 1rpx solid #333;
        border-radius: 8rpx;
        line-height: 150rpx;
        text-align: center;
      }
    }
    .login-wrap{
      display: flex;
      align-items: center;
      border-bottom: 0.5px #c8c8c8 solid; 
      height: 50px;
      > i{
        width: 24px;
        height: 24px;
        background: yellow; 
        margin-right: 12px;
      }
      > div{
        height: 80%;
      }
      input{
        height: 80%;
        outline: none;
        border: none;
        line-height: 20px;
        font-size: 16px;
        color: #333;
        /* transform: rotateZ(0) */
      }
      input::placeholder{
        font-size: 16px;
        color: #a1a1a1;
      }
      
    }
  }
 

</style>
