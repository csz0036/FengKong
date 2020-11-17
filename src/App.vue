<template>
    <div id="app">
        <!-- 菜单 -->
        <Menu />
        <!-- 内容 -->
        <router-view class="main-container" />
        <!-- 页脚 -->
        <Footer />
        <!-- 右侧悬浮 -->
        <Sus />
    </div>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from '@/components/Footer';
import Sus from '@/components/suspension';

export default {
    components: {
        Menu,
        Footer,
        Sus
    },
    data() {
        return {};
    },
    created() {
        // 初始化
    },
    methods: {},
};
</script>

<style lang="scss">
#app {
     min-width: 1180px;
    overflow: auto;
    // width: 100%;
    // overflow: hidden;;
    .main-container {
        padding-top: 80px;
    }
}
</style>
