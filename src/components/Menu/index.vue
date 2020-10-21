<template>
    <div id="menu">
        <div class="cw dis-cont">
            <div class="menu_logo dis-cont">
                <!-- logo -->
                <img
                    class="menu__container_logo"
                    src="@/assets/Logo.png"
                    @click="$router.push('/')"
                />
                数智风控
            </div>
            <div class="menu_nav">
                <ul>
                    <li
                        v-for="(i, iIndex) in nav"
                        :key="iIndex"
                        class="item"
                        :class="{
                            active: isActive === iIndex,
                        }"
                        @click="openPage(i.path, iIndex)"
                    >
                        <span>{{ i.name }}</span>
                    </li>
                </ul>
                <!-- todo：链接是多是 -->
                <a href="" class="demo_link">预约演示</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            nav: [
                {
                    name: "风控首页",
                    path: "/",
                },
                {
                    name: "产品介绍",
                    path: "/about",
                },
                {
                    name: "风控案例",
                    path: "/riskControl",
                },
                {
                    name: "专项方案",
                    path: "/scheme",
                },
            ],
            isActive: -1, // 选中
        };
    },

    created() {},
    methods: {
        getPath() {
            let curPath = this.$route.path;
            // console.log("路由------", this.$route);

            // menu tab重置
            for (let i = this.nav.length - 1; i >= 0; i--) {
                if (this.nav[i].path == curPath) {
                    this.isActive = i;
                    break;
                }
            }
        },
        openPage(path, index) {
            this.isActive = index;
            if (this.$route.fullPath !== path) {
                this.$router.push(path);
            }
        },
    },
    watch: {
        $route: "getPath",
    },
};
</script>

<style lang="scss" scoped>
.cw {
    height: 80px;
}
#menu {
    width: 100%;
    .menu_logo {
        flex: 1;
        img {
            // width: 126px;
            height: 42px;
            display: block;
            margin-right: 20px;
        }
        font-size: 20px;
        color: #333333;
    }
    .menu_nav {
        ul {
            overflow: visible;
            display: inline-block;
        }
        li {
            float: left;
            font-size: 16px;
            color: #5d749f;
            margin-right: 40px;
            cursor: pointer;
            &.active {
                color: #2970d5;
                position: relative;
                &::after {
                    content: "";
                    width: 100%;
                    height: 3px;
                    position: absolute;
                    background: #2970d5;
                    border-radius: 3px;
                    bottom: -10px;
                    left: 0;
                }
            }
        }
    }
    .demo_link {
        display: inline-block;
        width: 92px;
        height: 36px;
        line-height: 36px;
        background-image: linear-gradient(180deg, #f39800 0%, #f18e00 100%);
        border-radius: 2px;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
        text-decoration: none;
    }
}
</style>
