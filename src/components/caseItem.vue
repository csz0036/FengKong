<template>
    <div>
        <div :class="`case-box ${postion}`">
            <div class="text">
                <div class="company">
                    <p class="company-show">
                        <img class="icon" :src="icon" alt="" />
                        <span class="name">{{ name }}</span>
                    </p>
                    <p class="company-intro">{{ companyIntro }}</p>
                </div>

                <div class="project">
                    <p class="title">项目亮点</p>
                    <p class="project-intro" v-html="Wrap(projectIntro)"></p>
                </div>
            </div>
            <div class="img">
                <img
                    :src="imgUrl"
                    :style="{
                        width: imgWidth + 'px',
                        height: imgHeight + 'px',
                    }"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CaseItem",

    props: {
        postion: {
            type: String,
            default: "",
        },
        icon: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        companyIntro: {
            type: String,
            default: "",
        },
        projectIntro: {
            type: String,
            default: "",
        },
        imgUrl: {
            type: String,
            default: "",
        },
        imgWidth: {
            type: String,
            default: "",
        },
        imgHeight: {
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
.case-box {    
    overflow: hidden;
    display: flex;
    align-items: center;
    .text {
        margin-bottom: 80px;
    }
    padding: 106px 0 130px 0;
    width: 1224px;
    margin: 0 auto;
    .company-show {
        margin-bottom: 18px;
    }
    .company {
        padding: 0 40px 0 0;
        margin-bottom: 40px;
        width: 442px;
    }
    .company p {
        display: flex;
        align-items: center;
    }
    .name,
    .icon {
        vertical-align: middle;
    }
    .icon {
        width: 180px;
        height: 110px;
        margin-left: -42px;
    }
    .name {
        font-size: 25px;
        color: #050e29;
    }

    .company-intro {
        font-size: 14px;
        color: #788398;
        line-height: 24px;       
    }

    .project {
        width: 442px;
    }
    .title {
        font-size: 20px;
        color: #2f61ac;
        line-height: 24px;
        margin-bottom: 24px;
    }
    .project-intro {
        font-size: 14px;
        color: #050e29;
        line-height: 24px;
        /deep/span{
            color:#4889E6;
            font-family:'Heiti SC','黑体-简'
        }
    }

    .sub-title {
        color: #3565ae;
        font-size: 80px;
    }

    .img {
        text-align: center;
    }
}

.case-box.top {
    flex-direction: column;
    .company,
    .project {
        display: inline-block;
        vertical-align: top;
        margin-bottom: 0;
    }
    .project {
        border-left: 1px solid #d0d2d3;
        width: 612px;
        // padding: 0;
        padding: 14px 0 0 60px;
    }
}
#case5 {
    .icon {
        margin-left: -1px;
        margin-top: -16px;
    }
}
#case1 {
    .icon {
        margin-left: -30px;
    }
    .name {
        white-space: nowrap;
    }
}
</style>
