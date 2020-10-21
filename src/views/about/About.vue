<template>
    <div class="about">
        <Banner
            enName="Product introduction"
            cnName="产品介绍"
            introduction="数据关联促进风险、合规、内控、法务管理融合风控中台赋能企业数智化风险控制手段"
            :bg="bannerBg"
        ></Banner>

        <!-- 企业风险管理面临的问题 -->
        <div class="parallel bg-0">
            <h2 class="title title-1">企业风险管理面临的问题</h2>
            <div class="cont-parallel cont-problem">
                <div class="problem-item">
                    <img class="problem-icon" src="@/assets/about/icon1.png" />
                    <p class="problem-intro">
                        如何打通风险内控<br />合规法务“四位一体”的管理链路？
                    </p>
                    <p class="problem-cont">
                        监管新要求“强内控、防风险、促合规”；业务融合、部门协同、成果共享势在必行。
                    </p>
                </div>
                <div class="problem-item">
                    <img class="problem-icon" src="@/assets/about/icon2.png" />
                    <p class="problem-intro">
                        如何通过大数据技术<br />实现对业务系统的风险监控？
                    </p>
                    <p class="problem-cont">
                        企业数字化基础逐步完善，风控管理者对数据无从下手，缺乏有效数据分析手段。
                    </p>
                </div>
                <div class="problem-item">
                    <img class="problem-icon" src="@/assets/about/icon3.png" />
                    <p class="problem-intro">
                        如何落地风险管理<br />实现内控刚性约束？
                    </p>
                    <p class="problem-cont">
                        风控管理“两张皮”，顽疾依旧，缺乏“落地抓手”，价值感不强。
                    </p>
                </div>
                <div class="problem-item">
                    <img class="problem-icon" src="@/assets/about/icon4.png" />
                    <p class="problem-intro">
                        如何实现集团型公司<br />风控信息化的全级次覆盖？
                    </p>
                    <p class="problem-cont">
                        集团型公司组织结构复杂，风控管理条线长，涉及部门多，工作效率低。
                    </p>
                </div>
            </div>
        </div>

        <!-- 功能亮点 -->
        <div class="parallel bg-1">
            <h2 class="title title-1">功能亮点</h2>
            <div class="cont-parallel linght">
                <div
                    v-for="(ite, ind) in contBox1"
                    :key="ind"
                    :id="`scorll${ind}`"
                >
                    <Parallel
                        :name="ite.name"
                        :intro="ite.intro"
                        :cont="ite.cont"
                        :imgWidth="ite.style[0]"
                        :imgHeight="ite.style[1]"
                        :position="ite.position"
                        :imgUrl="ite.imgUrl"
                        boxHeight="460"
                    ></Parallel>
                </div>
            </div>
        </div>

        <!-- 功能架构图 -->
        <div class="parallel bg-0">
            <h2 class="title title-1">功能架构图</h2>
            <div class="cont-parallel cont-architecture">
                <p class="intro">致力于建设企业“风控中台”</p>
                <img :src="imgUrl8" alt="" width="" />
                <p class="cont">
                    慧点科技风控信息化产品以自主研发的“慧眼”风控中台为基础，运用大数据及智能分析技术，为企业打造数智化的风控管理平台，帮助企业快速洞察风险，辅助战略决策！
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/styles/Banner";
import Parallel from "@/components/styles/LeftRight";
import scroll from "@/utils/scroll";
export default {
    components: {
        Banner,
        Parallel,
    },

    data() {
        return {
            // isScorlled: false,
            bannerBg: require("@/assets/about/banner.jpg"),
            imgUrl8: require("@/assets/about/img8.png"),
            contBox1: [
                {
                    name: "风险智能预警",
                    cont:
                        "灵活定义风险指标，具备多种数据采集方式，实现业务数据自动采集、智能预警及预警整改，预警数据智能分析，辅助企业业务决策。",
                    style: ["364", "241"],
                    imgUrl: require("@/assets/about/img1.png"),
                },
                {
                    name: "基于机器学习算法的模型设计器",
                    cont:
                        "产品能够可视化机器学习建模过程，灵活、无代码化、可拖拽的进行建模过程构建和过程中的参数配置（比如数据预处理，特征工程，模型训练，模型预测，以及模型评估），帮助用户在线搭建高重用的风险监控模型，打造数据风控决策中心。",
                    style: ["443", "292"],
                    position: "rightBox",
                    imgUrl: require("@/assets/about/img2.png"),
                },
                {
                    name: "大数据风险舆情监控",
                    cont:
                        "对接外部各类征信数据、网络数据，为用户提供风险监控、舆情监控、商机发现、事件分析等智能服务，覆盖工商、司法、监管、经营四大类风险。",
                    style: ["313", "319"],
                    imgUrl: require("@/assets/about/img3.png"),
                },
                {
                    name: "风险知识图谱",
                    cont:
                        "知识图谱作为一门底层技术，涵盖实体抽取、关系抽取、图谱可视化等技术能力，在风险领域结合具体的场景提供智能化的风险识别、关联关系分析、风险成因分析，从而赋能企业智能化预测风险的能力。",
                    style: ["398", "273"],
                    position: "rightBox",
                    imgUrl: require("@/assets/about/img4.png"),
                },
                {
                    name: "“四位一体”知识关联",
                    intro: "规章制度、风险库、内控矩阵相互关联",
                    cont:
                        "能够实现风险事件与控制措施、风险事件与规章制度、控制措施与规章制度之间相互关联。",
                    style: ["542", "248"],
                    imgUrl: require("@/assets/about/img5.png"),
                },
                {
                    name: "风险闭环流程",
                    intro: "实现风险识别、分析、评价、应对全流程闭环管理",
                    cont:
                        "规范企业风险管理工作流程，实现风险管理工作各环节无缝衔接、流程闭环。",
                    style: ["379", "248"],
                    position: "rightBox",
                    imgUrl: require("@/assets/about/img6.png"),
                },
                {
                    name: "内控评价全流程",
                    intro: "穿行/控制测试灵活组合",
                    cont:
                        "结合内控管理特点及发展，支持灵活选择内控评价方式，统一生成测试底稿；可追溯历次内控评价结果，在线跟进评价进展。",
                    style: ["336", "362"],
                    imgUrl: require("@/assets/about/img7.png"),
                },
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.initScorllAn();
        });
    },
    methods: {
        initScorllAn() {
            let scrollData = [];
            for (let i = 0; i < 7; i++) {
                let elId = "scorll" + i;
                let elScrollTop = document.getElementById(elId).offsetTop - 960;
                scrollData.push({ id: elId, start: elScrollTop });
                // console.log("滚动高度", elId, elScrollTop);
            }
            scrollData.forEach((val) => {
                scroll.addEventListener(val);
            });
        },
    },
};
</script>

<style lang="scss" scoped>
#scorll0,
#scorll1,
#scorll2,
#scorll3,
#scorll4,
#scorll5,
#scorll6 {
    -webkit-transition: all 0.6s ease-in-out;
    transition: all 0.6s ease-in-out;
    opacity: 0;
    -webkit-transform: translate3D(0, 200%, 0);
    transform: translate3D(0, 200%, 0);
}
.linght {
    // position: relative;
    overflow: hidden;
}
.parallel {
    overflow: auto;
    .title {
        text-align: center;
        font-size: 26px;
        color: #050e29;
        font-weight: 400;
        &.title-1 {
            padding: 90px 0 60px;
        }
    }
    .cont-parallel {
        width: $pc_main_size;
        margin: 0 auto 60px;
    }

    .cont-problem {
        padding-bottom: 110px;
    }
    .problem-item {
        display: inline-block;
        font-size: 0;
        vertical-align: top;
        width: 576px;
        height: 216px;
        box-sizing: border-box;
        background: #ffffff;
        box-shadow: 0 4px 10px 0 #ebf3ff;
        padding: 40px 150px;
        line-height: 1.5;
        position: relative;
        margin: 10px 6px;
        .problem-icon {
            position: absolute;
            left: 40px;
            top: 50%;
            width: 70px;
            height: 70px;
            transform: translateY(-50%);
        }
        .problem-intro {
            font-size: 18px;
            color: #14202b;
            margin-bottom: 20px;
        }
        .problem-cont {
            font-size: 14px;
            color: #788398;
        }
    }

    .cont-architecture {
        text-align: center;
        .intro {
            font-size: 18px;
            color: #14202b;
            letter-spacing: 0;
            text-align: center;
            line-height: 18px;
            margin-bottom: 60px;
        }
        img {
            width: 840px;
            height: 635px;
        }
        .cont {
            font-size: 14px;
            color: #788398;
            letter-spacing: 0;
            line-height: 26px;
            margin: 20px auto 80px;
        }
    }
}
</style>
