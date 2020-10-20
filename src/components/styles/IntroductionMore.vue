<template>
    <!-- 简介 去往详情 -->
    <div class="introduction-box">
        <p class="sub-title">{{ subTitle }}</p>
        <p class="cont">{{ cont }}</p>
        <a class="more" @click="openPage(linkIndex)">更多></a>
    </div>
</template>

<script>
export default {
    name: "IntroductionMore",

    props: {
        subTitle: {
            type: String,
            default: "",
        },
        cont: {
            type: String,
            default: "",
        },
        linkIndex: {
            type: Number,
            default: 0,
        },
    },

    data() {
        return {};
    },

    methods: {
        openPage(linkIndex) {
            console.log("linkIndex===========", linkIndex);
            // todo : 跳转到指定页面
        },
    },
};
</script>

<style lang="scss" scoped>
.introduction-box {
    position: relative;
    background-color: #fff;
    display: inline-block;
    vertical-align: top;
    padding: 35px;
    border: 0 solid #edf0f5;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    width: 210px;
    height: 288px;
    margin-right: 20px;
    .sub-title {
        font-size: 18px;
        color: #14202b;
        position: relative;
        margin-bottom: 26px;
        &::after {
            content: "";
            position: absolute;
            background: #3a80e5;
            border-radius: 4.5px;
            width: 34px;
            height: 4px;
            left: 0px;
            bottom: -16px;
        }
    }
    .cont {
        font-size: 14px;
        color: #788398;
        line-height: 26px;
        padding: 26px 0;
        text-align: justify;
    }
    .more {
        position:absolute;
        bottom: 30px;
        right: 40px;
        font-size: 12px;
        color: #3a80e5;
        letter-spacing: 0;
        line-height: 14px;
        cursor: pointer;
    }
}
</style>
