<template>
    <div class="home">
        <div class="banner" v-for="(i, iIndex) in banners" :key="iIndex"><img :src="i" alt=""></div>
        <!-- 风控管理信息化方案特色 -->
        <div class="bg-1">
            <div class="cw">
                风控管理信息化方案特色
            </div>
        </div>

        <!-- 风控管理信息化设计思路 -->
        <div class="bg-0">
            <div class="cw">
                风控管理信息化设计思路
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
      
    },
    data() {
        return {
            banners:[
                require('@/views/home/assets/banner.png'),
            ]
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
</style>