<!-- 右侧悬浮 -->
<template>
    <div class='suspenison'>
        <ul>
            <li @mouseenter="enter(1)" @mouseleave="leave(1)">
                <img src='@/assets/suspension/solid-1.png' v-show="img1" class="imgIcon">
                <img src='@/assets/suspension/solid-1-2.png' v-show="!img1"  class="imgIcon">
                <img src='@/assets/suspension/ewm.png' v-show="!img1"  class="imgEwm">
            </li>
            <li @mouseenter="enter(2)" @mouseleave="leave(2)">
                <a href="http://p.qiao.baidu.com/cps/chat?siteId=120779&amp;userId=478870" target="_blank">
                    <img src='@/assets/suspension/solid-2.png' v-show="img2" class="imgIcon">
                    <img src='@/assets/suspension/solid-2-2.png' v-show="!img2"  class="imgIcon">
                    <img src='@/assets/suspension/lineConsult.png' v-show="!img2"  class="imgLine">
                </a>
            </li>
            <li @mouseenter="enter(3)" @mouseleave="leave(3)">
                <img src='@/assets/suspension/solid-3.png' v-show="img3" class="imgIcon">
                <img src='@/assets/suspension/solid-3-2.png' v-show="!img3"  class="imgIcon">
                <img src='@/assets/suspension/tel.png' v-show="!img3"  class="imgTel">
            </li>
            <li @mouseenter="enter(4)" @mouseleave="leave(4)" @click="scrollTop()">
                <img src='@/assets/suspension/solid-4.png' v-show="img4" class="imgIcon">
                <img src='@/assets/suspension/solid-4-2.png' v-show="!img4"  class="imgIcon">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            img1:true,
            img2:true,
            img3:true,
            img4:true,
            defaultImg:new Array(4).fill(1).map((i, iIndex) =>require(`@/assets/suspension/solid-${iIndex+1}.png`)),
            // leaveImg:new Array(4).fill(1).map((i, iIndex) =>require(`@/assets/suspension/solid-${iIndex}-2.png`))
        };
    },
    computed: {},
    created() {

    },
    mounted() {

    },
    methods: {
        enter(i){
            let img = 'img'+i
            this[img] = false
        },
        leave(i){
            let img = 'img'+i
            this[img] = true
        },
        scrollTop(){
            window.scrollTo(0, 0);
        }
    },
}
</script>
<style lang='scss' scoped>
    .suspenison{
     position: fixed;
     bottom: 100px;
     right: 20px;
     z-index: 11;
     li{
        margin-bottom: 4px;
        position: relative;
        width: 48px;
        height: 52px;
        .imgIcon{
            width: 48px;
            height: 48px;
        }
        .imgEwm{
            position: absolute;
            right: 48px;
            bottom: 0;
            width: 130px;
            height: 122px;
        }
        .imgLine,.imgTel{
            position: absolute;
            right: 50px;
            bottom: 3px;
            width: 128px;
            height: 48px;
            line-height: 48px;
            text-align: center;
            font-size: 18px;
            width: 130px;
            height: 50px;
        }
        .imgTel{
            width: 180px;
            height: 50px;
            width: 178px;
        }
     }
    }

</style>