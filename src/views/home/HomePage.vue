<template>
    <div class="home">
        <Slider></Slider>
        <!-- 风控管理信息化方案特色 -->
        <div class="parallel bg-1">
            <h2 class="title title-1">风控管理信息化方案特色</h2>
            <div class="cont-parallel">
                <Parallel
                    name="知识图谱，业务互联"
                    cont="关联风险、内控、合规等管理数据要素，形成一体化风险管控体系，互通互融，消除壁垒，奠定“四位一体”管理基础。"
                    width="396"
                    height='385'
                    :imgUrl="imgUrl1"
                ></Parallel>

                <Parallel
                    name="风控中台，智能预警"
                    cont="以风控中台为基础，提供多种方式采集内外部数据，运用大数据及人工智能技术，灵活定义风险指标及模型，实现重大风险实时监测，快速预警。"
                    width="396"
                    height='385'
                    position="rightBox"
                    :imgUrl="imgUrl1"
                ></Parallel>

                <Parallel
                    name="专项风险，内控嵌入"
                    cont="与合同、投资、采购、关联交易等业务系统深度融合，将风险控制要求，预警提示嵌入业务系统，增强内控体系刚性约束。"
                    width="396"
                    height='385'
                    :imgUrl="imgUrl1"
                ></Parallel>
            </div>
        </div>
        

        <!-- 风控管理信息化设计思路 -->
        

    </div>
</template>

<script>
import Slider from '@/components/slider';
import Parallel from '@/components/styles/LeftRight';
export default {
    components: {
      Slider,
      Parallel
    },
    data() {
        return {

            imgUrl1:require('@/assets/index/img-1.png')
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
    .home{
        .banner{
            width: 100%;
            height: 578px;
            img{
                width: 100%;
            }
        }
    }
    .parallel{
        overflow: auto;
        .title{
            text-align: center;
            font-size: 26px;
            color: #050E29;
            font-weight: 400;
            &.title-1{
                padding: 50px 0 60px;
            }
        }
        .cont-parallel{
            width: 1180px;
            margin: 0 auto;
        }
    }
</style>