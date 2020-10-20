<template>
    <!-- banner -->
    <div class="banner-box" :style="{ backgroundImage: `url(${bg})` }">
        <div class="cw">
            <div class="banner-cont">
                <div class="text">
                    <p class="en-name">{{ enName }}</p>
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
            console.log(origin);
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
        padding-left: 100px;
        padding-top: 90px;
    }
    .en-name {
        font-size: 30px;
        color: #708ee1;
        letter-spacing: 0;
        line-height: 36px;
        margin-bottom: 10px;
    }
    .cn-name {
        font-size: 45px;
        color: #ffffff;
        line-height: 64px;
        margin-bottom: 28px;
    }
    .introduction {
        font-size: 16px;
        color: #ffffff;
        line-height: 22px;
        letter-spacing: 0.44px;
        margin-bottom: 20px;
    }
}
</style>
