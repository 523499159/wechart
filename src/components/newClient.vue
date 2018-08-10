<template>
  <div>
    <div class="mask" v-show="windowShow" @click="cancelDone" @touchmove.stop></div>
     <div class="right-window" :class="windowShow ? 'right-window-in' : 'right-window-out'">
      <div class="header"> 
        <div class="input-wrap">
          
          <input type="text">
         
        </div>
        <span class="cancel" @click="cancelDone">完成</span>
      </div>
    </div>
  </div>
  
  
</template>

<script>
export default {
  props: ['windowShow'],

  data () {
    return {
     
    }
  },

  methods: {
    cancelDone() {
      this.$parent.newClientShow = false
      // this.searchUlShow = false
    },
  },

  watch: {
  	windowShow(n, o) {
  		console.log(n, o)
  	}
  }
}
</script>

<style lang=less scoped>

.mask{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 4;
}
.right-window{
  position: fixed;
  height: 670rpx;
  width: 100%;
  background: #fff;
  left: 0;
  bottom: -670rpx;
  z-index: 5;
  transition: all .25s;
  .header{
  	padding: 0 20rpx;
  	display: flex;
  	align-items: center;
  	height: 150rpx;
  	justify-content: space-around;
  	.input-wrap{
  		display: flex;
  		align-items: center;
  		border: 1rpx solid #666;
  		border-radius: 8rpx;
  		width: 550rpx;
  		input{
  			/*border-bottom: 1rpx solid #666;*/
  		}
  	}
  	.cancel{
  		color: #3366ff;
  		font-size: 28rpx;
  		align-content: flex-end;
  	}
  }

}
.right-window-in{
  transform: translateY(-100%); 

}
.right-window-out{
  transform: translateY(0);
}

</style>
