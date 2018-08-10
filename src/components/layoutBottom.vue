<template>
  
  <div class="right-window" :class="windowShow ? 'right-window-in' : 'right-window-out'">
  	<div class="header"> 
  		<div class="input-wrap">
  			<!-- <i></i> -->
  			<input type="text">
  			<!-- <span>X</span> -->
  		</div>
  		<span class="cancel">取消</span>
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

  watch: {
  	windowShow(n, o) {
  		console.log(n, o)
  	}
  }
}
</script>

<style lang=less scoped>
.right-window{
  position: absolute;
  height: 100%;
  width: 670rpx;
  background: #fff;
  right: 0;
  top: 0;
  z-index: 5;
  transition: all .5s;
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
  transform: translate(0); 

}
.right-window-out{
  transform: translate(100%);
}

</style>
