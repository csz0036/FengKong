<template>
    <!-- 简介 去往详情 -->
    <div class="introduction-box" @click="openPage(linkIndex)">
        <p class="sub-title">{{ subTitle }}</p>
        <p class="cont">{{ cont }}</p>
        <span class="more">更多></span>
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
            // console.log("linkIndex===========", linkIndex);
            this.$router.push({
                path: "/scheme",
                // hash:'container',
                query: { tabIndex: linkIndex },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.introduction-box {
     cursor: pointer;
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
    -webkit-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
    &:hover {
        // -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.05);
        // box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.05);
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
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
        position: absolute;
        display: inline-block;
        width: 40px;
        height: 30px;
        bottom: 30px;
        right: 40px;
        text-align: right;
        font-size: 12px;
        color: #3a80e5;
        letter-spacing: 0;
        line-height: 14px;
       
    }
}
</style>
