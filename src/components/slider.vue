<template>
  <slider class="slider" ref="slider" :options="options">
       <!-- 使用slideritem组件   -->
        <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
            <img :src="item" class="sliderImg"/>
        </slideritem>
  </slider>
</template>

<script>
import {slider,slideritem} from 'vue-concise-slider'// 引入slider组件
export default {
   name: 'SliderComponents',
   data () {
      return {
        //图片列表[arr]
        someList:(new Array(3).fill(1)).map((i, iIndex) => require(`@/assets/index/banner${iIndex}.png`)),
        //滑动配置[obj]
        options: {
          currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
          thresholdTime: 300,//滑动判定时间
          autoplay:2000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizontal',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
      }
    },
    components: {
        slider,
        slideritem
    }
}
</script>

<style lang="scss" scoped>
.slider{
    width: 100%;
    height: 578px;
    .sliderImg{
        width: 100%;
        height: 100%;
    }
    /deep/ .slider-pagination{
        // text-align: right;
        box-sizing: border-box;
        padding-right: 20px;
        .slider-pagination-bullet{
            background: #87A2C2;
            opacity: 1;
        }
        .slider-pagination-bullet-active{
            background: #3D89E5;
            border-radius: 4px;
            width: 18px;
        }
    }
    
}
</style>