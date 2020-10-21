<template>
    <div class="parallel-box">
        <p class="title">{{ title }}</p>

        <div :class="`hover-box ${size}`">
            <div v-for="(i, iIndex) in dataList" :key="iIndex" class="item">
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
        size: {
            type: String,
            default: "",
        },
        imgUrl: {
            type: String,
            default: "",
        },
        // imgWidth: {
        //     type: String,
        //     default: "372",
        // },
        // imgHeight: {
        //     type: String,
        //     default: "194",
        // },
    },

    data() {
        return {};
    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.parallel-box {
    margin: 100px auto -30px;
    // padding-bottom:10px ;
    width: $pc_main_size;
    .hover-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top:10px;
        // align-items: center;
        &.reverse {
            flex-wrap: wrap-reverse;
        }
        &.big {
            .item {
                width: 520px;
                height: 228px;
                margin: 0 10px 10px 0;
            }
            .normal {
                width: 92px;
                height: 92px;
            }
            .name {
                font-size: 20px;
            }
            .active {
                padding: 60px;
            }
        }
        &.smallPadding {
            .active {
                padding: 26px;
            }
        }
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
        width: 360px;
        height: 194px;
        background: linear-gradient(194deg, #b2d1ff 0%, #4a8eef 100%);
        background-color: #4a8eef;
        border-radius: 4px;
        margin: 0 30px 30px 0;
        color: #ffffff;
        position: relative;
        cursor: pointer;
        transition: background-color 1s;
        &:hover {
            background: #5a87cb;
            .active {
                opacity: 1;
            }
            .normal {
                opacity: 0;
            }
        }
    }

    .name {
        font-size: 18px;
        line-height: 24px;
    }

    .active {
        opacity: 0;
        font-size: 14px;
        line-height: 24px;
        padding: 50px;
    }

    .active,
    .normal {
        transition: opacity 0.5s;
    }
    .normal {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        word-break: keep-all;

        img {
            width: 76px;
            height: 76px;
            margin-bottom: 18px;
        }
    }
}
</style>
