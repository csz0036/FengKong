<template>
    <!-- 上下结构 -->
    <div class="parallel-box">
        <div class="title">{{ title }}</div>
        <div class="sub-title">{{ subTtitle }}</div>
        <p class="cont" v-html="Wrap(cont)"></p>
        <img class="img" :src="imgUrl" :style="{ width: imgWidth + 'px' }" />
    </div>
</template>

<script>
export default {
    name: "TopBottom",

    props: {
        title: {
            type: String,
            default: "",
        },
        subTtitle: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        intro: {
            type: String,
            default: "",
        },
        cont: {
            type: String,
            default: "",
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
            default: "396",
        },
        imgHeight: {
            type: String,
            default: "385",
        },
    },

    data() {
        return {};
    },

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
    // margin-bottom: 20px;
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
    .name {
        font-size: 24px;
        line-height: 1.8;
        color: #14202b;
    }
    .intro {
        font-size: 18px;
        color: #282828;
        letter-spacing: 0;
        line-height: 20px;
    }
    .cont {
        font-size: 14px;
        color: #788398;
        line-height: 20px;
        margin-bottom: 20px;
    }
    .sub-title {
        font-size: 20px;
        color: #050e29;
        letter-spacing: 0;
        line-height: 50px;
    }
}
.img {
    margin-bottom: 50px;
}
</style>
