<template>
  <div>
  	<div class="mask" v-show="windowShow" @click="cancelDone" @touchmove.stop></div>
  	<div class="right-window" :class="windowShow ? 'right-window-in' : 'right-window-out'">
  		
	  	<div class="header"> 
	  		<div class="input-wrap">
	  			<input type="text" confirm-type="search" @change="inputInsert" placeholder="输入客户名称/手机号" v-model.lazy="proSearchInfo" />
	  		</div>
	  		<span class="cancel" @click="cancelDone">取消</span>
	  	</div>
	  	<div class="search-list">
		  	<scroll-view class="scroll-window" scroll-y style="height: 100%">
		  		<ul class="search-ul" v-if="searchUlShow">
		  			<li class="search-li" v-for="(im, ix) in 19" :key="ix" @click="infoSelect(ix)">
		  				<span>F测试零售用户{{ix + 1}}</span>
							<span>乐售连锁店测试</span>
		  			</li>
		  		</ul>
		  	</scroll-view>
	  	</div>
		  
	  </div>
  </div>
  
  
</template>

<script>
export default {
  props: ['windowShow'],

  data () {
    return {
    	searchUlShow: false,
    	proSearchInfo: ''
    }
  },

  methods: {
  	cancelDone() {
  		this.$parent.windowToShow = false
  		// this.searchUlShow = false
  	},

  	stopTouch() {
  		console.log('stop user scroll it!');
    	return true;
  	},

  	inputInsert() {
  		this.proSearchInfo 
  		? this.searchUlShow = true
  		: this.searchUlShow = false
  	},

  	infoSelect(index) {
  		const parentCom = this.$parent
  		if (parentCom.targetSearchInput === 'client') {
  			this.$parent.client = `F测试零售用户${index + 1}`
  		}else {
  			this.$parent.station = `F测试零售用户${index + 1}`
  		}
  		this.$parent.windowToShow = false
  	}
  },

  watch: {
		proSearchInfo(n, o) {
			this.inputInsert()
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
  height: 100%;
  width: 670rpx;
  background: #fff;
  right: 0;
  top: 0;
  z-index: 5;
  transition: all .25s;
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
  .search-list{
  	height: calc(100% - 102rpx);
  	/*overflow-y: auto;*/
  	/*-webkit-overflow-scrolling: touch;*/
  	.search-ul{

  		.search-li{
  			font-size: 26rpx;
				height: 70rpx;
  			border-bottom: 1rpx solid #eee;
				display: flex;
		  	align-items: center;
		  	justify-content: space-between;
		  	padding: 0 20rpx;
		  	color: #999;
			}
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
