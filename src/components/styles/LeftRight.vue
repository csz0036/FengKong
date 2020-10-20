<template>
    <!-- 左右结果 -->
    <div :class="`parallel-box ${position}`">
        <div class="text">
            <div class="title">
                <p class="name">{{ name }}</p>
                <p class="intro">{{ intro }}</p>
            </div>

            <p class="cont">{{ cont }}</p>
        </div>
        <div class="img">
            <img
                :src="imgUrl"
                :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Parallel",

    props: {
        // scroll: {
        //     type: BarProp,
        //     default: false
        // },
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

    methods: {},
};
</script>

<style lang="scss" scoped>
.parallel-box {
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 106px;
    margin-bottom: 20px;
    .text {
        .title {
            margin-bottom: 20px;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                background: #3a80e5;
                border-radius: 4.5px;
                width: 4px;
                height: 50%;
                left: -20px;
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
            line-height: 26px;
            width: 360px;
        }
    }
}
.leftBox {
    flex-direction: row;
    .text {
        flex: 1;
    }
}
.rightBox {
    flex-direction: row-reverse;
    .img {
        flex: 1;
    }
}
.centerBox {
    flex-direction: column;
    .text {
        margin-bottom: 50px;
        .cont {
            width: 100%;
        }
    }
}
</style>
