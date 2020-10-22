<template>
    <!-- 友情链接 -->
    <div class="link-box">
        <div class="cont">
            <div
                v-for="(i, iIndex) in linkList"
                :key="iIndex"
                class="item"
                :class="{ showHover: !showDecs }"
                @click="openPage(iIndex)"
            >
                <img
                    :src="i"
                    alt="案例介绍"
                    :style="{
                        width: cloumnWidth + 'px',
                        height: cloumnHight + 'px',
                    }"
                />
            </div>
        </div>

        <p class="desc" :class="{ active: showDecs }">部分客户，排名不分先后</p>
    </div>
</template>

<script>
export default {
    name: "LinkByColumn",

    props: {
        // cloumn: {
        //     type: Number,
        //     default: 1,
        // },
        cloumnWidth: {
            type: String,
            default: "0",
        },
        cloumnHight: {
            type: String,
            default: "90",
        },
        linkList: {
            type: Array,
            default: () => {
                return [];
            },
        },
        showDecs: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {};
    },

    methods: {
        openPage(linkIndex) {
            if (!this.showDecs) {
                // console.log("linkIndex===========", linkIndex);
                this.$router.push({
                    path: "/riskControl",
                    // hash:'container',
                    query: { caseId: linkIndex },
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.link-box {
    padding-bottom: 60px;
    .cont {
        display: flex;
        flex-wrap: wrap;
    }

    .item {
        flex: 1;
        margin-bottom: 30px;
        transition: transform 0.3s;
    }
    .item.showHover {
        &:hover {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
        }
    }

    .desc {
        font-size: 14px;
        color: #8b96a7;
        text-align: center;
        line-height: 21px;
        display: none;
        &.active {
            display: block;
        }
    }
}
</style>
