<template>
    <div>
        <div :class="`case-box ${postion}`">
            <div class="text">
                <div class="company">
                    <p>
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
            console.log(origin);
            var res = origin.replace(/\\n/gm, "<br>");
            return res;
        },
    },
};
</script>

<style lang="scss" scoped>
.case-box {
    display: flex;
    align-items: center;
    .text {
        margin-bottom: 60px;
    }
    padding: 90px 0;
    width: 1224px;
    margin: 0 auto;
    .company {
        padding: 0 40px;
        margin-bottom: 40px;
         width: 442px;
        
    }
    .company p{
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
        padding: 0 40px;
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
    }
    .project {
        width: 612px;
    }
}
</style>
