<template>
    <!-- todo -->
    <div class="parallel-box">
        <p class="title">{{ title }}</p>

        <div :class="`hover-box ${position}`">
            <div
                v-for="(i, iIndex) in dataList"
                :key="iIndex"
                class="item"
                :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
            >
                <div class="normal">
                    <img :src="i.iconUrl" alt="" />
                    <p>{{ i.name }}</p>
                </div>

                <div class="active">
                    <p>{{ i.datail }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HoverSwitch",

    props: {
        title: {
            type: String,
            default: "",
        },
        dataList: {
            type: Array,
            default: () => {
                return [];
            },
        },
        position: {
            type: String,
            default: "leftBox",
        },
        imgUrl: {
            type: String,
            default: "",
        },
        imgWidth: {
            type: String,
            default: "372",
        },
        imgHeight: {
            type: String,
            default: "194",
        },
    },

    data() {
        return {};
    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.parallel-box {
    .hover-box {
        display: flex;
        // align-items: center;
    }
    .title {
        font-size: 26px;
        color: #050e29;
        margin-bottom: 20px;
        position: relative;
        padding-left: 20px;
        &::after {
            content: "";
            position: absolute;
            background: #3a80e5;
            border-radius: 4.5px;
            width: 4px;
            height: 20px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .item {
        background: linear-gradient(194deg, #b2d1ff 0%, #4a8eef 100%);
        background-color: #4a8eef;
        border-radius: 4px;
        margin-right: 32px;
        color: #ffffff;
        position: relative;
        cursor: pointer;
        // display: none;
            transition: background-color 1s;
        &:hover {
            background: #5a87cb;
            .active{
                // display: block;
                  opacity: 1;
            }
            .normal{
                opacity: 0;
                // transition: opacity .5s;
                // display: none;
            }
        }
    }

    .name {
        font-size: 18px;
        line-height: 24px;
    }

    .active {
        // display: none;
         opacity: 0;
        font-size: 14px;
        line-height: 24px;
        padding: 50px;
    }

    .active,
    .normal {
        transition: opacity .5s;
        // position: absolute;
        // left: 0;
        // right: 0;
        // top: 0;
        // bottom: 0;
    }
    .normal{
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        img{
        width: 76px;
        height: 76px;
        margin-bottom: 18px;}
    }
}
</style>
