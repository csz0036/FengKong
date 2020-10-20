<template>
    <!-- 风控案例 -->
    <div class="scheme">
        <Banner
            enName="Special scheme"
            cnName="专项方案"
            introduction="“四位一体”落地的具体应用场景"
            :bg="bannerBg"
        ></Banner>
        <!-- 合作方 -->
        <div class="parallel">
            <h2 class="title title-1">“四位一体”落地应用场景</h2>
            <Tab :tabList="tabList" @changTab="getChangTab"></Tab>
        </div>

        <div class="tab-cont">
            <div class="scenes1" v-show="acitveIndex == 0">
                <TopBottom
                    title="概述"
                    cont="合同管理是企业法律风险、合规风险防控的重要落地手段，也是企业经营管理的重要保障，围绕合同管理信息系统落地“四位一体”信息化核心能力，实现合同全生命周期的风险防控措施，业务部门或地区公司可以自定义配置风险指标或预警规则，对合同各环节存在的风险进行及时预警和管控。"
                    :imgUrl="scenes1Img1"
                    imgWidth="1053"
                ></TopBottom>
                <div class="unknow">
                    <p class="focus color-1">合同全生命周期监控预警</p>
                    <p>
                        <span class="color-1">签订前：</span
                        >对于外部大数据，开展相对方信用风险评估，合同申报合规性审查；
                    </p>
                    <p>
                        <span class="color-1">签订中：</span
                        >合同文本条款风险提示，利用规则引擎自动判断是否符合内控要求；
                    </p>
                    <p>
                        <span class="color-1">履行中：</span
                        >相对方动态风险监控，依托智能分析服务设计风控指标和预警等级，自动预警履约风险。
                    </p>
                    <p class="focus color-1">在合同场景中的风险管控要求</p>
                    <img
                        src="@/assets/scheme/scenes1Img2.png"
                        alt=""
                        style="width: 1142px"
                    />
                </div>

                <HoverSwitch
                    title="价值"
                    :dataList="scenes1DataList"
                ></HoverSwitch>

                <TopBottom
                    title="案例"
                    subTtitle="中国石油合同管理系统2.0项目智能应用软件"
                    cont="1. 建设合同风险管理，将合同全生命周期的风险防控措施固化到系统中，对风险进行及时预警和管控；\n\n
                        2. 增加合同智能应用，构建合同的辅助审查、智能校对、智能检索、智能客服等智能化能力。"
                    :imgUrl="scenes1Img3"
                    imgWidth="1051"
                ></TopBottom>
            </div>
            <div class="scenes2" v-show="acitveIndex == 1">
                <TopBottom
                    title="概述"
                    cont="投资管理专项方案，以投资者利益为出发点，能够实现投资项目全类型、全生命周期、全过程管控，达到投资项目管理信息化、业务运作高效化、风险控制体系化、数据信息共享化。"
                    :imgUrl="scenes2Img1"
                    imgWidth="1053"
                ></TopBottom>
                <div class="unknow">
                    <p>
                        系统覆盖投资计划、项目立项与可研决策、项目实施、投产运营管理（投后管理）、项目后评价全生命周期，实现决策过程、实施环节、投产运营、后评价各环节的全过程闭环管控，有效控制过程风险。<br><br>
                    </p>
                    <p>
                        可横向协同各工作平台：如主数据系统、财务系统、审计系统、OA办公系统、电子招标平台等，确保数据的唯一性和准确性，达到数据信息共享的目的。
                    </p>
                </div>
                <HoverSwitch
                    title="价值"
                    :dataList="scenes1DataList"
                ></HoverSwitch>
            </div>
            <div class="scenes3" v-show="acitveIndex == 2">3</div>
            <div class="scenes4" v-show="acitveIndex == 3">4</div>
            <div class="scenes5" v-show="acitveIndex == 4">5</div>
            <div class="scenes6" v-show="acitveIndex == 5">6</div>
            <div class="scenes7" v-show="acitveIndex == 6">7</div>
        </div>

    </div>
</template>

<script>
import Tab from "@/components/tab";
import HoverSwitch from "@/components/styles/hoverSwitch";
import TopBottom from "@/components/styles/TopBottom";
import Banner from "@/components/styles/Banner";


export default {
    components: {
        Tab,
        HoverSwitch,
        TopBottom,
        Banner,
    },

    data() {
        return {
            bannerBg: require("@/assets/about/banner.png"),
            tabList: [
                "合同履约风险",
                "投资风险管理",
                "采购风险管理",
                "关联交易",
                "金融领域投资",
                "合规管理",
                "偿二代-保险",
            ],
            // todo 很多hover详情没有
            scenes1Img1: require("@/assets/scheme/scenes1Img1.png"),
            scenes1Img3: require("@/assets/scheme/scenes1Img3.png"),
            scenes2Img1: require("@/assets/scheme/scenes2Img1.png"),
            scenes1DataList: [
                {
                    iconUrl: require("@/assets/scheme/scenes1Icon1.png"),
                    name: "履约监控",
                    datail:
                        "“项目信息一体化”是从项目管理的全局出发，实现从项目的采集、项目的立项、管理、投资后评价的全过程管理，保证信息的完整性、元数据结构的一致性。 ",
                },
                {
                    iconUrl: require("@/assets/scheme/scenes1Icon2.png"),
                    name: "资金控制",
                    datail: "1111",
                },
                {
                    iconUrl: require("@/assets/scheme/scenes1Icon3.png"),
                    name: "权限控制",
                    datail: "1111",
                },
            ],
            acitveIndex: 0,
        };
    },
    methods: {
        getChangTab(acitveIndex) {
            console.log("aa--", acitveIndex);
            this.acitveIndex = acitveIndex;
        },
    },
};
</script>

<style lang="scss" scoped>
.parallel {
    text-align: center;
    .dividing-line2 {
        width: 1094px;
        margin: 0 auto;
    }
    .title {
        text-align: center;
        font-size: 26px;
        color: #050e29;
        font-weight: 400;
        &.title-1 {
            padding: 50px 0 60px;
        }
    }
}
.scheme {
    width: 1180px;
    margin: 0 auto;
}

.unknow {
    font-size: 16px;
    color: #788398;
    line-height: 24px;
    img {
        margin: 20px 0;
    }
}
.focus {
    font-size: 18px;
}
.color-1 {
    color: #2565b4;
}
</style>