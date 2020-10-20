<template>
    <!-- 自上而下 条件渲染 -->
    <div class="parallel-box">
        <div v-for="(i, iIndex) in dataList" :key="iIndex">
            <div v-if="i.type === 'CONT'">
                <p
                    class="cont"
                    v-for="(k, kIndex) in i.conts"
                    :key="kIndex"
                    v-html="Wrap(k)"
                ></p>
            </div>

            <div class="img" v-else-if="i.type === 'IMG'">
                <img :src="i.imgUrl" :style="{ width: i.imgWidth + 'px' }" />
            </div>

            <p class="title" v-else-if="i.type === 'TITLE'">{{ i.title }}</p>

            <div class="sub-title" v-else>{{ i.subTtitle }}</div>
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
    margin: 100px auto;
    width: $pc_main_size;
    .title {
        font-size: 26px;
        color: #050e29;
        // margin-bottom: 20px;
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

    .sub-title,
    .title,
    .img{
        margin-top: 30px;
    }
    .cont {
        margin-top: 20px;
    }
}
</style>
