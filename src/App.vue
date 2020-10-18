<template>
    <div id="app">
        <!-- 菜单 -->
        <Menu />
        <!-- 内容 -->
        <router-view/>
        <!-- 页脚 -->
        <Footer />
    </div>
</template>

<script>
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export default {
    components: {
        Menu,
        Footer
    },
    data(){
        return{
        }
    },
    created() {
        // 初始化
   
    },
    methods: {
        
    }
}
</script>

<style lang="scss">

</style>