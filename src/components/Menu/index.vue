<template>
    <div id="menu">
        <div class="cw dis-cont">
            <div class="menu_logo dis-cont">
                <!-- logo -->
                <img class="menu__container_logo" src="@/assets/Logo.png" @click="$router.push('/')">
                数智风控
            </div>
            <div class="menu_nav">
                 <ul>
                    <li
                        v-for="(i, iIndex) in nav"
                        :key="iIndex"
                        class="item"
                        :class="{
                            'active': isActive === iIndex,
                        }"
                        @click="openPage(i.path, iIndex)"
                    >
                        <span>{{i.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            nav: [
                {
                    name:'风控首页',
                    path: '/'
                },
                {
                    name:'产品介绍',
                    path: '/about'
                },
                {
                    name:'风控案例',
                    path: '/about'
                },
                {
                    name:'专项方案',
                    path: '/about'
                }
            ],
            isActive: 0, // 选中
        };
    },

    created() {
       
    },

    methods: {
        openPage(path, index) {
            this.isActive = index;
            if (this.$route.fullPath !== path) {
                this.$router.push(path);
            }
        }, 
    }
}
</script>

<style lang="scss" scoped>
.cw{
    height: 80px;
}
#menu{
    width: 100%;
    .menu_logo{
        flex: 1;
        img{
            // width: 126px;
            height: 42px;
            display: block;
            margin-right: 20px;
        }
        font-size: 20px;
        color: #333333;
    }
    .menu_nav{
        li{
            float: left;
            font-size: 16px;
            color: #5D749F;
            margin-right: 40px;
            cursor: pointer;
            &.active{
                color: #2970D5;
                position: relative;
                &::after{
                    content: '';
                    width: 100%;
                    height: 3px;
                    position: absolute;
                    background: #2970D5;
                    border-radius: 3px;
                    bottom: -10px;
                    left: 0;
                }
            }
        }
    }
}
</style>