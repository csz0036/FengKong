<template>
    <div class="home">
        <Slider></Slider>
        <!-- banner 文字 -->
            <div class="banner-cont">
                <p class="intro">
                    重新定义<span class="stress-color"> 数智时代 </span
                    >的风控管理
                </p>
                <p class="intro-stress">慧点科技大数据风控解决方案</p>
                <ButtonMore></ButtonMore>
                <p class="intro-history stress-color">
                    十八年坚守耕耘，200+客户共同选择
                </p>
                <p class="intro-future">
                    专注铸就专业，专业赢得信任！<br />企业风控管理信息化领域的领导者！
                </p>
            </div>

        <!-- 风控管理信息化方案特色 -->
        <div class="parallel bg-1">
            <h2 class="title title-1">风控管理信息化方案特色</h2>
            <div class="cont-parallel">
                <div
                    v-for="(ite, ind) in contBox1"
                    :key="ind"
                    :id="`scorll${ind}`"
                >
                    <Parallel
                        :name="ite.name"
                        :cont="ite.cont"
                        :imgWidth="ite.style[0]"
                        :imgHeight="ite.style[1]"
                        :position="ite.position"
                        :imgUrl="ite.img"
                    ></Parallel>
                </div>
            </div>
        </div>

        <!-- 风控管理信息化设计思路 -->
        <div class="parallel bg-0">
            <h2 class="title title-1">风控管理信息化设计思路</h2>
            <div class="cont-parallel" id="contLint">
                <template v-for="(ite, ind) in contBox2">
                    <Parallel
                        :key="ind"
                        :name="ite.name"
                        :cont="ite.cont"
                        :imgWidth="ite.style[0]"
                        :imgHeight="ite.style[1]"
                        :position="ite.position"
                        :imgUrl="ite.img"
                    >
                    </Parallel>
                </template>
            </div>
        </div>

        <!-- 应用场景 -->
        <div class="parallel bg-1">
            <h2 class="title title-1">基于“四位一体”的风险管理落地应用场景</h2>
            <div class="cont-parallel cont-scenes">
                <template v-for="(ite, ind) in IntroductionMore">
                    <IntroductionMore
                        :key="ind"
                        :subTitle="ite.subTitle"
                        :cont="ite.cont"
                    ></IntroductionMore>
                </template>
            </div>
        </div>

        <!-- 经典案例介绍 -->
        <div class="parallel bg-2">
            <div class="dividing-line2"></div>
            <h2 class="title title-1">经典案例介绍</h2>
            <div class="cont-parallel">
                <LinkByColumn
                    :cloumnWidth="cloumnWidth"
                    :linkList="linkList"
                ></LinkByColumn>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "@/components/slider";
import Parallel from "@/components/styles/LeftRight";
import IntroductionMore from "@/components/styles/IntroductionMore";
import LinkByColumn from "@/components/styles/LinkByColumn";
import ButtonMore from "@/components/styles/ButtonMore";
export default {
    components: {
        Slider,
        Parallel,
        IntroductionMore,
        LinkByColumn,
        ButtonMore,
    },
    data() {
        return {
            contBox1: [
                {
                    name: "知识图谱，业务互联",
                    cont:
                        "关联风险、内控、合规等管理数据要素，形成一体化风险管控体系，互通互融，消除壁垒，奠定“四位一体”管理基础。",
                    style: ["396", "385"],
                    img: require("@/assets/index/img1.png"),
                    position: "leftBox",
                },
                {
                    name: "风控中台，智能预警",
                    cont:
                        "以风控中台为基础，提供多种方式采集内外部数据，运用大数据及人工智能技术，灵活定义风险指标及模型，实现重大风险实时监测，快速预警。",
                    style: ["339", "238"],
                    img: require("@/assets/index/img2.png"),
                    position: "rightBox",
                },
                {
                    name: "专项风险，内控嵌入",
                    cont:
                        "与合同、投资、采购、关联交易等业务系统深度融合，将风险控制要求，预警提示嵌入业务系统，增强内控体系刚性约束。",
                    style: ["344", "308"],
                    img: require("@/assets/index/img3.png"),
                    position: "leftBox",
                },
                {
                    name: "集团架构，分级管理",
                    cont:
                        "产品设计充分考虑集团及下级单位需求，提供多层级风险库、内控矩阵库，支持风险评估、内控评价、指标监控等工作的全级次覆盖。",
                    style: ["442", "240"],
                    img: require("@/assets/index/img4.png"),
                    position: "rightBox",
                },
            ],
            contBox2: [
                {
                    name: "遵循“四位一体”的业务管理思路",
                    cont:
                        "以业务为载体，以流程为主线，以风险为导向，以法律为准绳，以制度为基础，以内控为手段，构建风险、合规、内控、法务的业务关联，实现各业务之间的信息共享、成果共享，形成监督合力，搭建“四位一体”的全面风险管理体系。",
                    style: ["506", "305"],
                    img: require("@/assets/index/img5.png"),
                    position: "leftBox",
                },
                {
                    name: "“横向到边，纵向到底”的信息化蓝图",
                    cont:
                        "基于统一开发平台，管理上“横向到边”，融合风险、合规、内控、法务等管理数据要素，形成一体化的风险管控体系；数据上“纵向到底”，通过数据采集分析能力，跨组织自下而上获取业务数据，通过指标、模型、图谱等手段监控业务运行，及时洞察，快速纠偏。",
                    style: ["1049", "410"],
                    img: require("@/assets/index/img6.png"),
                    position: "centerBox",
                },
            ],
            IntroductionMore: [
                {
                    subTitle: "合同履约风险",
                    cont:
                        "与合同管理及第三方资信平台集成，将合同管理风险相关的控制措施嵌入到合同管理平台中，同时设置合同履约风险预警模型及指标，智能识别合同对方主体资格、合同未全面履行或监控不当、合同纠纷处理不当等风险。",
                },
                {
                    subTitle: "投资风险管理",
                    cont:
                        "在投资管理全过程中内置风险提示，固化控制要求，实现投资管理全过程的流程合规化；在投资决策阶段提供风险评估模型，基于固定资产投资、股权投资、开发性投资等不同的投资项目设置各类风险监控指标，确保投资收益。",
                },
                {
                    subTitle: "采购风险管理",
                    cont:
                        "对采购领域常见风险，设置各类监控模型，智能识别采购价格异常、违规采购、采购合格率异常等风险，建立供应商信用监控预警模型，对供应商进行动态管理，建立供应商黑/灰名单库。",
                },
                {
                    subTitle: "关联交易风险",
                    cont:
                        "对接企业财务、费控、合同以及第三方企业信息数据库，筛查疑似关联方，预置银保监、上交所、联交所等规则，智能识别关联交易，基于授信额度自动预警及干预，有效控制关联交易风险。",
                },
            ],
            linkList: new Array(8)
                .fill(1)
                .map((i, iIndex) =>
                    require(`@/assets/links/link${iIndex}.png`)
                ),
            cloumnWidth: 276,
            scrollElemnt: [{}],
        };
    },
    mounted() {},
    created() {},
};
</script>

<style lang="scss" scoped>
.home {
    .banner {
        width: 100%;
        height: 578px;
        img {
            width: 100%;
        }
    }
}
.parallel {
    overflow: auto;
    .title {
        text-align: center;
        font-size: 26px;
        color: #050e29;
        font-weight: 400;
        &.title-1 {
            padding: 50px 0 60px;
        }
    }
    .cont-parallel,
    .dividing-line2 {
        width: $pc_main_size;
        margin: 0 auto;
    }
    .cont-scenes {
        margin-bottom: 100px;
        .introduction-box:last-child {
            margin-right: 0;
        }
    }
}
#contLint {
    .parallel-box:last-child {
        position: relative;
        &::after {
            content: "";
            width: 100%;
            height: 1px;
            background-color: rgba(120, 131, 152, 0.2);
            position: absolute;
            top: -10px;
            left: 0;
        }
    }
}

.banner-cont {
    position: absolute;
    top: 260px;
    z-index: 100;
    left: 100px;
    width: 612px;
    color: #ffffff;
    letter-spacing: 1px;
    .intro {
        font-size: 24px;
    }
    .intro-stress {
        line-height: 88px;
        font-size: 46px;
    }
    .intro-history {
        font-size: 18px;
        margin-top: 50px;
    }
    .intro-future {
        margin-top: 10px;
        font-size: 14px;
        line-height: 20px;
    }
}
.stress-color {
    color: #ffcc1a;
}
</style>
