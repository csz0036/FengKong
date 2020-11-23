<template>
    <!-- banner -->
    <div class="banner-box" :style="{ backgroundImage: `url(${bg})` }">
        <div class="cw">
            <div class="banner-cont">
                <div class="text">
                    <!-- <p class="en-name">{{ enName }}</p> -->
                    <p class="cn-name">{{ cnName }}</p>
                    <p class="introduction" v-html="Wrap(introduction)"></p>
                </div>
                <ButtonMore></ButtonMore>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonMore from "@/components/styles/ButtonMore";
export default {
    components: {
        ButtonMore,
    },
    name: "Banner",

    props: {
        enName: {
            type: String,
            default: "",
        },
        cnName: {
            type: String,
            default: "",
        },
        introduction: {
            type: String,
            default: "",
        },
        bg: {
            type: String,
            default: "",
        },
    },

    data() {
        return {};
    },

    methods: {
        Wrap: (origin) => {
            // console.log(origin);
            var res = origin.replace(/\\n/gm, "<br>");
            return res;
        },
    },
};
</script>

<style lang="scss" scoped>
.banner-box {
    height: 400px;
    background-position: center center;
    background-size: cover;

    .banner-cont {
        width: 420px;
        padding-left: 110px;
        padding-top: 86px;
    }
    .en-name {
        font-size: 30px;
        color: #708ee1;
        line-height: 36px;
        margin-bottom: 6px;
    }
    .cn-name {
        font-size: 43px;
        color: #ffffff;
        line-height: 64px;
        margin-bottom: 28px;
    }
    .introduction {
        font-size: 16px;
        color: #ffffff;
        line-height: 20px;
        margin-bottom: 26px;
    }
}
</style>
