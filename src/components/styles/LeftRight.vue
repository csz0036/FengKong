<template>
    <!-- 左右结果 -->
    <div :class="`parallel-box ${position}`">
        <div class="text">
            <p class="name">{{name}}</p>
            <p class="cont">{{cont}}</p>
        </div>
        <div class="img">
            <img :src="imgUrl" :style="{width: imgWidth+'px', height: imgHeight+'px'}"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ButtonMore',

    props: {
        // scroll: {
        //     type: BarProp,
        //     default: false
        // },
        name:{
           type:String,
           default: '' 
        },
        cont:{
           type:String,
           default: '' 
        },
        position:{
           type:String,
           default: 'leftBox' 
        },
        imgUrl:{
            type:String,
            default: ''
        },
        imgWidth:{
            type:String,
            default: '396' 
        },
        imgHeight:{
            type:String,
            default: '385' 
        }
    },

    data() {
        return {
        }
    },

    methods: {
       
    }
}
</script>

<style lang="scss" scoped>
    .parallel-box{
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 106px;
        margin-bottom: 20px;
        .text{
            .name{
                font-size: 24px;
                color: #14202B;
                position: relative;
                margin-bottom: 26px;
                &::after{
                    content: '';
                    position: absolute;
                    background: #3A80E5;
                    border-radius: 4.5px;
                    width: 4px;
                    height: 20px;
                    left: -20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            .cont{
                font-size: 14px;
                color: #788398;
                line-height: 26px;
                width: 360px;
            }
        }
    }
    .leftBox{
        flex-direction:row;
        .text{
            flex: 1;
        }
    }
    .rightBox{
        flex-direction:row-reverse;
        .img{
            flex: 1;
        }
    }
</style>