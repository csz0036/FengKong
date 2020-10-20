<template>
    <!-- 上下结构 -->
    <div class="parallel-box">
        <!-- <div class="title">{{ title }}</div>
        <div class="sub-title">{{ subTtitle }}</div>
        <p class="cont" v-html="Wrap(cont)"></p>
        <img class="img" :src="imgUrl" :style="{ width: imgWidth + 'px' }" /> -->

        <!-- 自上而下 条件渲染 -->
        <div v-for="(i, iIndex) in dataList" :key="iIndex">
            <!-- <div v-if="i.type === 'IMG'"> -->
            <div class="img" v-if="i.type === 'IMG'">
                <img :src="i.imgUrl" :style="{ width: i.imgWidth + 'px' }" />
            </div>
            <!-- </div> -->

            <!-- <div v-else-if="i.type === 'TITLE'"> -->
            <p class="title" v-else-if="i.type === 'TITLE'">{{ i.title }}</p>
            <!-- </div> -->

            <!-- <div v-else-if="i.type === 'CONT'"> -->
            <p
                class="cont"
                v-else-if="i.type === 'CONT'"
                v-html="Wrap(i.cont)"
            ></p>
            <!-- </div> -->

            <!-- <div v-else> -->
            <div class="sub-title" v-else>{{ i.subTtitle }}</div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "TopBottom",

    props: {
        dataList: {
            type: Array,
            default: () => {
                return [];
            },
        },
        // title: {
        //     type: String,
        //     default: "",
        // },
        // subTtitle: {
        //     type: String,
        //     default: "",
        // },
        // name: {
        //     type: String,
        //     default: "",
        // },
        // intro: {
        //     type: String,
        //     default: "",
        // },
        // cont: {
        //     type: String,
        //     default: "",
        // },
        // position: {
        //     type: String,
        //     default: "leftBox",
        // },
        // imgUrl: {
        //     type: String,
        //     default: "",
        // },
        // imgWidth: {
        //     type: String,
        //     default: "396",
        // },
        // imgHeight: {
        //     type: String,
        //     default: "385",
        // },
    },

    data() {
        return {};
    },
    // todo: 多个组件调用 同一个方法，怎么提取？
    methods: {
        Wrap: (origin) => {
            var res = origin.replace(/\\n/gm, "<br>");
            return res;
        },
    },
};
</script>

<style lang="scss" scoped>
.parallel-box {
    // background-color: #fff;
    // padding: 106px;
    margin-top: 100px;
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
    .cont {
        font-size: 14px;
        color: #788398;
        line-height: 24px;
    }
    .sub-title {
        font-size: 20px;
        color: #050e29;
        letter-spacing: 0;
        // line-height: 50px;
    }
    .img {
        text-align: center;
        // margin-bottom: 50px;
    }

    .cont,
    .sub-title,
    .img {
        margin-top: 30px;
    }
}
</style>
