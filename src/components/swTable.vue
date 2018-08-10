<template>
  <div @touchmove.stop>
  	<div class="sw-table" @touchstart="touchST"  @touchmove="touchMV" @touchend="touchEnd">
      <div class="sw-table-head" :style="{'transform': 'translate(' + tableLeft + 'px, ' + 0 + 'px)'}">
        <ul id="tableHead">
          <li>序号</li>
          <li>测试项目</li>
          <li>规格上限</li>
          <li>规格下限</li>
          <li>单位</li>
          <li>测试值</li>
          <li>测试结果</li>
        </ul>
      </div> 
      <div class="sw-table-body">
        <div class="sw-table-body-left" :style="{'transform': 'translate(' + 0 + 'px, ' + tableTop + 'px)'}">
          <ul>
            <li v-for="i in 7" :key="i">{{i}}</li>
          </ul>
        </div>
        <div class="sw-table-body-right" :style="{'transform': 'translate(' + tableLeft + 'px, ' + tableTop + 'px)'}">
          <ul v-for="i in 7" :key="i">
            <li>序号{{i}}</li>
            <li>测试项目{{i}}</li>
            <li>规格上限{{i}}</li>
            <li>规格下限{{i}}</li>
            <li>单位{{i}}</li>
            <li>测试值{{i}}</li>
            <li>测试结果{{i}}</li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
  
  
</template>

<script>
export default {
  props: ['windowShow'],

  data () {
    return {
      isTableMove: false,
      startX: '',
      startY: '',
      tableLeft: '0',
      tableTop: '0',
      storeLeft: '0',
      storeTop: '0',
      withinLeft: 0,
      withinTop: 0

    }
  },

  mounted() {

    // const _this = this
    const query = wx.createSelectorQuery()

    query.select('.sw-table').boundingClientRect()
    query.select('#tableHead').boundingClientRect()
    query.select('.sw-table-body-right').boundingClientRect()

    query.exec((res) =>{
      console.log('sw-table-body-right', res)
      const windowWidth = res[0].width
      const windowHeight = res[0].height

      const content1Width = res[1].width
      const content1Height = res[1].height

      const content2Width = res[2].width
      const content2Height = res[2].height

      this.withinLeft = content2Width - windowWidth
      this.withinTop = content2Height + content1Height - windowHeight

      console.log('queryY', windowWidth, windowHeight, content1Width, content1Height, content2Width, content2Height)
      console.log('queryX', this.withinLeft, this.withinTop )

    })
    


  },

  methods: {
    touchST(e) {
      this.isTableMove = true
      this.startX = e.clientX
      this.startY = e.clientY

    },

    touchMV(e) {
      if(this.isTableMove) {
        const moveX = e.clientX - this.startX
        const moveY = e.clientY - this.startY

        let tableLeft = parseInt(this.storeLeft) + moveX
        let tableTop = parseInt(this.storeTop) + moveY

        tableLeft >= 0 && (tableLeft = 0)
        tableTop >= 0 && (tableTop = 0)

        tableLeft <= -this.withinLeft && (tableLeft = -this.withinLeft)
        tableTop <= -this.withinTop && (tableTop = -this.withinTop)

        this.tableLeft = tableLeft
        this.tableTop = tableTop

      }

    },

    touchEnd(e) {
      this.isTableMove = false
      this.storeTop = this.tableTop
      this.storeLeft = this.tableLeft

      
      // console.log(query)
      // console.log(query.select('#tableHead').boundingClientRect())

    }
  },  

  watch: {
		
  }
}
</script>

<style lang=less scoped>
  .sw-table{
    position: relative;
    text-align: center;
    width: 100%;
    background: yellowgreen;
    overflow: hidden;
    .sw-table-head{
      background: yellow;
      overflow: hidden;

      /* overflow-x: auto; */
      ul{
        display: inline-flex;
        li{
          font-size: 32rpx;
          width: 200rpx;
          height: 80rpx;
          border-right: 1rpx #333 solid; 
          flex-shrink: 0;
        }
      }
    }
    .sw-table-body{
      max-height: 400rpx;
      overflow: hidden;
      .sw-table-body-left{
        position: absolute;
        top: 81rpx;
        left: 0;
        background: red;
        ul{
          li{
            font-size: 32rpx;
            width: 200rpx;
            height: 80rpx;
            border-right: 1rpx #333 solid; 
            flex-shrink: 0;
          }
        }
      }
      .sw-table-body-right{
        display: inline-block;
        width: auto;
        padding-left: 200rpx;
        ul{
          display: inline-flex;
          li{
            font-size: 32rpx;
            width: 200rpx;
            height: 80rpx;
            border-right: 1rpx #333 solid; 
            flex-shrink: 0;
          }
        }
      }
    }
  }

</style>
