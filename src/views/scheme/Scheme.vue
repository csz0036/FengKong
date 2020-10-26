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
            <div class="parallel" id="scheme-container">
                <h2 class="title title-1">“四位一体”落地应用场景</h2>
                <Tab :tabList="tabList" @changTab="getChangTab" ref="Tab"></Tab>
            </div>

            <div class="tab-cont">
                <div class="scenes_ht" v-show="acitveIndex == 0">
                    <TopBottom :dataList="scenes_ht.partOneData"></TopBottom>

                    <div class="focus-box cw">
                        <p class="focus color-1 focus1">
                            合同全生命周期监控预警
                        </p>
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
                        :dataList="scenes_ht.hoverSwitchList"
                    ></HoverSwitch>

                    <TopBottom :dataList="scenes_ht.partTwoData"></TopBottom>
                </div>
                <div class="scenes_zt" v-show="acitveIndex == 1">
                    <TopBottom :dataList="scenes_zt.partOneData"></TopBottom>

                    <HoverSwitch
                        title="价值"
                        size="big"
                        :dataList="scenes_zt.hoverSwitchList"
                    ></HoverSwitch>

                    <TopBottom :dataList="scenes_zt.partTwoData"></TopBottom>
                </div>
                <div class="scenes_cg" v-show="acitveIndex == 2">
                    <TopBottom :dataList="scenes_cg.partOneData"></TopBottom>

                    <HoverSwitch
                        title="价值"
                        size="reverse"
                        :dataList="scenes_cg.hoverSwitchList"
                    ></HoverSwitch>

                    <TopBottom :dataList="scenes_cg.partTwoData"></TopBottom>
                </div>
                <div class="scenes_gl" v-show="acitveIndex == 3">
                    <TopBottom :dataList="scenes_gl.partOneData"></TopBottom>

                    <HoverSwitch
                        title="价值"
                        size="smallPadding"
                        :dataList="scenes_gl.hoverSwitchList"
                    ></HoverSwitch>

                    <TopBottom :dataList="scenes_gl.partTwoData"></TopBottom>
                </div>
                <div class="scenes_jr" v-show="acitveIndex == 4">
                    <TopBottom :dataList="scenes_jr.partOneData"></TopBottom>

                    <HoverSwitch
                        title="价值"
                        :dataList="scenes_jr.hoverSwitchList"
                    ></HoverSwitch>

                    <TopBottom :dataList="scenes_jr.partTwoData"></TopBottom>
                </div>
                <div class="scenes_hg" v-show="acitveIndex == 5">
                    <TopBottom :dataList="scenes_hg.partOneData"></TopBottom>

                    <HoverSwitch
                        title="价值"
                        :dataList="scenes_hg.hoverSwitchList"
                    ></HoverSwitch>

                    <TopBottom :dataList="scenes_hg.partTwoData"></TopBottom>
                </div>
                <div class="scenes_ced" v-show="acitveIndex == 6">
                    <TopBottom :dataList="scenes_ced.partOneData"></TopBottom>

                    <HoverSwitch
                        title="价值"
                        size="middlePadding"
                        :dataList="scenes_ced.hoverSwitchList"
                    ></HoverSwitch>

                    <TopBottom :dataList="scenes_ced.partTwoData"></TopBottom>

                    <div class="parallel bg-1">
                        <h2 class="title title-1 cw">部分偿二代客户名称</h2>
                        <ul class="companyList cw">
                            <li>中华联合财产保险股份有限公司</li>
                            <li>中华联合人寿保险股份有限公司</li>
                            <li>泰康保险集团股份有限公司及其下级子公司</li>
                            <li>阳光人寿保险股份有限公司</li>
                            <li>阳光信用保证保险股份有限公司</li>
                            <li>中国人寿保险（集团）公司及其下级子公司</li>
                            <li>中邮人寿保险股份有限公司</li>
                            <li>新华人寿保险股份有限公司</li>
                            <li>华泰保险集团股份有限公司及其下级子公司</li>
                            <li>和泰人寿保险股份有限公司</li>
                            <li>英大泰和人寿保险股份有限公司</li>
                            <li>英大泰和财产保险股份有限公司</li>
                            <li>光大永明人寿保险有限公司</li>
                            <li>中意财产保险有限公司</li>
                            <li>中美联泰大都会人寿保险有限公司</li>
                            <li>中国出口信用保险公司</li>
                            <li>信泰人寿保险股份有限公司</li>
                            <li>信美人寿相互保险社</li>
                            <li>北京人寿保险股份有限公司</li>
                            <li>中银三星人寿保险有限公司</li>
                            <li>民生人寿保险股份有限公司</li>
                            <li>利安人寿保险股份有限公司</li>
                            <li>招商信诺人寿保险有限公司</li>
                            <li>众安在线财产保险股份有限公司</li>
                            <li>交银康联人寿保险有限公司</li>
                            <li>国泰财产保险有限责任公司</li>
                            <li>浙商财产保险股份有限公司</li>
                            <li>东海航运保险股份有限公司</li>
                            <li>国元农业保险股份有限公司</li>
                            <li>诚泰财产保险股份有限公司</li>
                            <li>鼎和财产保险股份有限公司</li>
                            <li>华安财产保险股份有限公司</li>
                            <li>北部湾财产保险股份有限公司</li>
                        </ul>
                    </div>
                </div>
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
            bannerBg: require("@/assets/scheme/banner.jpg"),
            tabList: [
                "合同履约风险",
                "投资风险管理",
                "采购风险管理",
                "关联交易管理",
                "金融领域投资",
                "合规管理",
                "偿二代-保险",
            ],
            scenes_ht: {
                partOneData: [
                    { type: "TITLE", title: "概述" },
                    {
                        type: "CONT",
                        conts: [
                            "合同管理是企业法律风险、合规风险防控的重要落地手段，也是企业经营管理的重要保障，围绕合同管理信息系统落地“四位一体”信息化核心能力，实现合同全生命周期的风险防控措施，业务部门或地区公司可以自定义配置风险指标或预警规则，对合同各环节存在的风险进行及时预警和管控。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/scenes1Img1.png"),
                        imgWidth: "1053",
                    },
                ],
                hoverSwitchList: [
                    {
                        iconUrl: require("@/assets/scheme/scenes1Icon1.png"),
                        name: "履约监控",
                        datail:
                            "合同全生命周期履行状态集中监控，整体布局风险监控点，防范业务执行中潜在风险的发生",
                    },
                    {
                        iconUrl: require("@/assets/scheme/scenes1Icon2.png"),
                        name: "资金控制",
                        datail:
                            "强化资金管理的控制力度，建立收款控制，付款控制以及资金核算，全面监控资金风险",
                    },
                    {
                        iconUrl: require("@/assets/scheme/scenes1Icon3.png"),
                        name: "权限控制",
                        datail:
                            "从组织制度层面，进行岗位职责的权限互斥，建立授权审批等制度，降低人为因素导致的经营风险",
                    },
                ],
                partTwoData: [
                    { type: "TITLE", title: "案例" },
                    {
                        type: "SUBTITLE",
                        conts: ["中国石油合同管理系统2.0项目智能应用软件"],
                    },
                    {
                        type: "SUBTITLE",
                        subTtitle: "中国石油合同管理系统2.0项目智能应用软件",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "1. 建设合同风险管理，将合同全生命周期的风险防控措施固化到系统中，对风险进行及时预警和管控；",
                            "2. 增加合同智能应用，构建合同的辅助审查、智能校对、智能检索、智能客服等智能化能力。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/scenes1Img3.png"),
                        imgWidth: "1053",
                    },
                ],
            },
            scenes_zt: {
                partOneData: [
                    { type: "TITLE", title: "概述" },
                    {
                        type: "CONT",
                        conts: [
                            "投资管理专项方案，以投资者利益为出发点，能够实现投资项目全类型、全生命周期、全过程管控，达到投资项目管理信息化、业务运作高效化、风险控制体系化、数据信息共享化。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/scenes2Img1.png"),
                        imgWidth: "1053",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "系统覆盖投资计划、项目立项与可研决策、项目实施、投产运营管理（投后管理）、项目后评价全生命周期，实现决策过程、实施环节、投产运营、后评价各环节的全过程闭环管控，有效控制过程风险。",
                            "可横向协同各工作平台：如主数据系统、财务系统、审计系统、OA办公系统、电子招标平台等，确保数据的唯一性和准确性，达到数据信息共享的目的。",
                        ],
                    },
                ],
                hoverSwitchList: [
                    {
                        iconUrl: require("@/assets/scheme/tz_icon1.png"),
                        name: "流程合规化",
                        datail:
                            "达到投资项目流程合规化的目标，通过对投资业务流程信息化的管理，将业务管理过程标准固化，一方面能保证业务过程的合规，一方面也可以提高业务运转的效率",
                    },
                    {
                        iconUrl: require("@/assets/scheme/tz_icon2.png"),
                        name: "项目信息一体化",
                        datail:
                            "“项目信息一体化”是从项目管理的全局出发，实现从项目的采集、项目的立项、管理、投资后评价的全过程管理，保证信息的完整性、元数据结构的一致性",
                    },
                    {
                        iconUrl: require("@/assets/scheme/tz_icon3.png"),
                        name: "统计标准化",
                        datail:
                            "“统计标准化”是为了使统计工作能够及时、准确地反映企业投资情况，实现其服务、监督的管理职能，既能节省同类报表的重复填报量、提高工作效率，也能为业务部门、相关领导提供投资业务的数据分析，把握总体投资概况，统筹安排后续工作",
                    },
                    {
                        iconUrl: require("@/assets/scheme/tz_icon4.png"),
                        name: "监控常态化",
                        datail:
                            "“监控常态化”是将投资管理过程的不定期抽查、检查管理转变为根据预先设置的业务规则进行常态化监督管理",
                    },
                ],
                partTwoData: [
                    { type: "TITLE", title: "案例" },
                    {
                        type: "SUBTITLE",
                        subTtitle: "河南国控管控企业综合管理系统",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "河南国控集团作为省级综合性资产经营公司，具有企业重组、债务处置、股权管理三大职能。综合管理信息系统涵盖合同、法务、风控、审计、决策分析等功能；通过信息系统的建设可以有效识别集团各业务领域风险，落实风险控制措施，为管理层的战略决策提供数据分析基础。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/tz_img2.png"),
                        imgWidth: "1053",
                    },
                ],
            },
            scenes_cg: {
                partOneData: [
                    { type: "TITLE", title: "概述" },
                    {
                        type: "CONT",
                        conts: [
                            "重新定义智能时代的数字采购，为企业开启新的数字化采购时代。",
                            "数字化采购管理平台面向供应商、代理机构、业务部门以及采购管理部门，统一的多方协同、规范管理工作平台，所有数据和流程可管理、可追溯。",
                            "从供应商管理、采购管理、电子招投标管理、电子合同签署、采购执行跟踪、采购归档、采购风险的全程电子化采购管理。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/cg_img1.png"),
                        imgWidth: "1053",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "平台按照一个门户（采购门户/阳光采购门户）、六大平台（采购业务管理平台、监督管理平台、供应商协同平台、数据分析平台、风险防控平台、应用管理平台）、三个体系（供应商管理体系、评标专家管理体系、代理机构管理体系）的“163”框架搭建采购风险管理体系。",
                        ],
                    },
                ],
                hoverSwitchList: [
                    {
                        iconUrl: require("@/assets/scheme/cg_icon3.png"),
                        name: "风险防控",
                        datail:
                            "通过规则引擎的设置，将采购业务的内控、风险、合规等管理规范预置在系统中，通过业务流程和数据分析相结合的方式预警采购风险",
                    },
                    {
                        iconUrl: require("@/assets/scheme/cg_icon4.png"),
                        name: "数据分析",
                        datail:
                            "积累和挖掘采购数据价值，利用大数据和智能化对采购数据分析和预测，对企业经营决策提供支撑",
                    },

                    {
                        iconUrl: require("@/assets/scheme/cg_icon5.png"),
                        name: "阳光采购",
                        datail:
                            "实现采购全流程风险控制的监督平台和公开透明的阳光采购平台，遵循公开、公平、公正和诚实信用原则",
                    },
                    {
                        iconUrl: require("@/assets/scheme/cg_icon1.png"),
                        name: "采购一体化",
                        datail:
                            "实现从预算、采购计划、采购立项、供应商准入、招财过程、合同管理、采购执行和采购归档的全过程数字化采购",
                    },
                    {
                        iconUrl: require("@/assets/scheme/cg_icon2.png"),
                        name: "集中管控",
                        datail:
                            "建立统一的集采目录和管控标准，实现集中采购和分散授权采购相结合的采购模式",
                    },
                ],
                partTwoData: [
                    { type: "TITLE", title: "案例" },
                    { type: "SUBTITLE", subTtitle: "西部机场" },
                    {
                        type: "CONT",
                        conts: [
                            "西部机场集团作为全国第二大跨省运营的集团化管理机场集团，每年集中采购的数量和金额巨大，供应商、代理商、采购流程等管理相对分散、业务流程无法贯穿、数据无法共享；通过建设采购管理信息化平台规范采购流程、建立采购数据标准、实现内部用户与外部供应商/代理机构的数字化协同，打造阳光采购工程。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/cg_img2.png"),
                        imgWidth: "1083",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "通过数字化采购平台的建设，西部机场完成合同全生命周期管理框架，同时，实现业务规划及采购-招投标-合同的业务整合，完成电子采购管理平台建设并向全集团单位应用推广。",
                        ],
                    },
                ],
            },
            scenes_gl: {
                partOneData: [
                    { type: "TITLE", title: "概述" },
                    {
                        type: "CONT",
                        conts: [
                            "关联交易，是企业关联方之间的交易，是上市公司日常交易中特殊的交易，在市场经济条件下广为存在。随着业务发展、战略投资者增加，其股权渐呈多元化状态，关联交易管理作为日常管理核心内容之一显得愈发重要，日渐增多的关联交易行为将会给企业带来管理风险。",
                            "关联交易管理信息系统提供了关联方管理、关联交易录入、事前筛选、事后预警和报告报表管理等功能。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/gl_img1.png"),
                        imgWidth: "950",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "• 其中关联方管理用于法律合规部及各相关业务部门关联方管理员逐条信息录入或者批量导入，实现对于关联自然人在系统中的新增、信息修改和关系解除的数据录入；",
                            "• 股东股权管理支持逐条录入股东信息，字段包括股东名称、股东编号、住址、证件号码、持股数额、持股比例、股东类型等，支持股东信息批量导入（Excel形式），持股比例5%以上的股东信息同步更新到关联方名单库。",
                            "• 关联交易录入模块提供关联交易数据的维护功能，关联交易的采集，一般来说采用通过大数据平台和费控系统进行系统采集及人工录入相结合的方式进行； ",
                            "• 事前筛选模块可以实现根据监管机构要求，系统自动对采集的关联交易进行监测指标计算并自动筛选出符合禁止提示、审议/审批公告披露、持续关联交易提示条件的关联交易数据； ",
                            "• 事后预警模块会根据实际交易金额，有额度交易的信息进行预警；",
                            "• 报告报表管理功能中根据预设逻辑，按季度使用采集的关联交易数据自动生成银保监1104报告G15报表，同时，也可以生成年度财务报表、银保监月度关联交易台账等相关的报表。",
                        ],
                    },
                ],
                hoverSwitchList: [
                    {
                        iconUrl: require("@/assets/scheme/gl_icon1.png"),
                        name: "灵活适用监管规则",
                        datail:
                            "通过规则引擎将银保监会、内地交易所、联交所监管规则通进行数据封装，形成标准化的服务接口，便于规则的统一管理和维护，同时易于调用，提升数据运算效率，进而强化对关联交易的实时、动态预警效果",
                    },
                    {
                        iconUrl: require("@/assets/scheme/gl_icon2.png"),
                        name: "关联交易全流程管控",
                        datail:
                            "通过信息系统的实施，实现关联交易全过程信息化管理，灵活配置审批流程，审批流程可追踪，可留痕；覆盖关联交易事前、事中和事后管理",
                    },
                    {
                        iconUrl: require("@/assets/scheme/gl_icon3.png"),
                        name: "数据统一服务业务",
                        datail:
                            "根据关联交易相关业务规范统一关联方主数据及元数据，对业务数据按照业务类型进行分类存储，比如授信类业务、非授信类业务等，对数据进行标记，归类，按照不同的数据类型归类存储，对数据使用及调用过程进行记录和跟踪，灵活设置数据访问权限，保障关联交易数据的标准化、统一化",
                    },
                ],
                partTwoData: [
                    { type: "TITLE", title: "案例" },
                    { type: "SUBTITLE", subTtitle: "微众银行" },
                    {
                        type: "CONT",
                        conts: [
                            "作为一家快速发展的新型商业银行，微众银行现存许多不同于传统银行的新型金融业务和银行产品；作为一家业务领域持续拓展的企业，未来关联交易管理的难度和复杂程度与日俱增，亟需通过建立关联交易管理系统提高关联交易管理能力，确保关联交易信息的完整性、准确性、有效性、一致性和及时性。",
                            "通过建立关联交易管理系统，实现对关联交易的监控和流程化管理，提高关联交易数据统计的完整性和准确性。",
                            "<span style='color:#2565B4;font-weigth:400'>事前管控：</span>采购系统和电子签报系统的关联交易数据的自动采集；",
                            "<span style='color:#2565B4;font-weigth:400'>事后统计：</span>大数据平台中的来自源业务系统的关联交易数据的自动采集，并关联事前管控的合同编号。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/gl_img2.png"),
                        imgWidth: "1056",
                    },
                    { type: "SUBTITLE", subTtitle: "新华保险" },

                    {
                        type: "CONT",
                        conts: [
                            "为进一步规范新华人寿保险股份有限公司关联交易管理，根据保监会、上交所、联交所、企业会计准则和税务管理相关的制度，结合公司合同管理业务的需求，针对合同签订过程建设关联方数据库、合同关联交易识别、合同关联交易审批、合同关联交易查询等应用功能。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/gl_img3.png"),
                        imgWidth: "1056",
                    },
                    { type: "SUBTITLE", subTtitle: "晋商银行" },
                    {
                        type: "CONT",
                        conts: [
                            "为了规范关联交易行为，满足上市和监管要求，实现关联方和关联交易申报、审批、监控以及信息披露等工作的电子化操作，对接信贷管理系统、核心系统、财会等系统，达到关联交易事前提示和风险预警等目的，搭建晋商银行关联交易管理体系。",
                            "1.实现不同监管条件下存量关联方维护、新增关联方以及认定流程,并实现与各业务系统关联方下发和上收。",
                            "2.对于准备发生和已经发生的关联交易，确认后对相应业务系统反馈相应的处置信息。认定的已发生关联交易进入系统事后监测模型进行规制匹配，为最后的信息披露提供数据。",
                            "3.根据各监管机构的监管要求，对关联交易系统的监测情况进行相应的披露。",
                            "4.为了便于日常关联交易管理，提供关联方、关联方交易明细查询以及各维度的统计查询。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/gl_img4.png"),
                        imgWidth: "1056",
                    },
                ],
            },
            scenes_jr: {
                partOneData: [
                    { type: "TITLE", title: "概述" },
                    {
                        type: "CONT",
                        conts: [
                            "投资风险专项管理方案帮助您监控投资收益的不确定性，预测在投资中可能会遭受收益损失甚至本金损失的风险。",
                        ],
                    },
                    { type: "TITLE", title: "详述", class:"superHeight"},
                    {
                        type: "CONT",
                        conts: [
                            "由于投资存在差异性，导致投资风险的主要因素有也很多：诸如政府政策的变化、管理措施的失误、形成产品成本的重要物资价格大幅度上涨或产品价格大幅度下跌、借款利率急剧上升等。投资风险管理工作区别于项目投资管理业务（募投管退/投前投后），存在数据口径不一样，数据决算规则不一样等特点，采用投管系统中建设风险管理功能不益于风险管理工作的开展。",
                            "投资风险专项管理方案能够对相关风险偏好体系下监控指标进行实时监测、预警以及多场景压力测试，并且在风险PD、LGD主标尺数据发生变化后需要重新计算历史监测结果。",
                        ],
                    },
                ],
                hoverSwitchList: [
                    {
                        iconUrl: require("@/assets/scheme/jr_icon1.png"),
                        name: "搭建风险偏好指标监测体系",
                        datail:
                            "实现风险容忍度、风险偏好指标的报送、监测等日常管理；对风险状况进行实时分析、监控和预警",
                    },
                    {
                        iconUrl: require("@/assets/scheme/jr_icon2.png"),
                        name: "文档线上备案及处理",
                        datail:
                            "形成风险管理报表与报告，实现留档备查、报告传递功能",
                    },
                    {
                        iconUrl: require("@/assets/scheme/jr_icon3.png"),
                        name: "数据共享",
                        datail:
                            "实现投资风险管理信息在各职能部门之间的汇总和共享，并能够按照不同访问权限区分风险信息列示的内容",
                    },
                ],
                partTwoData: [
                    { type: "TITLE", title: "案例" },
                    {
                        type: "SUBTITLE",
                        subTtitle: "国寿投资控股有限公司风险管理信息系统",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "为落实中国人寿集团对风险偏好体系的管理要求，完善公司风险管理体系，提高风险管理能力，国寿投资控股公司集中各项资源，启动建设满足公司当前风险偏好指标管理、文件批复、报告生成等管理工作要求的投资风险管理信息系统，实现风险偏好管理工作的系统化、规范化、信息化。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/jr_img1.png"),
                        imgWidth: "1056",
                    },
                ],
            },
            scenes_hg: {
                partOneData: [
                    {
                        type: "CONT",
                        conts: [
                            "为贯彻落实党的十八届三中、四中、五中全会精神和党中央、国务院关于深化国有企业改革的部署要求，进一步推进中央企业法制建设，提升依法治企能力水平，国资委下发《关于全面推进法治央企建设的意见》；2018年，国资委下发《中央企业合规管理指引（试行）》的通知。",
                            "纵观近几年国内企业的发展，人们对合规风险的认识逐步加深，在全面风险管理体系下，合规风险成为企业机构的一项核心风险活动。在这样的背景下，大量的企业开始规范自己的风险合规管理手段，建设信息管理平台，通过信息化手段规范管理手段，提高管理效率；为保障公司的合法、合规运营提供了非常好的保障。",
                        ],
                    },
                    { type: "TITLE", title: "详述",class:"superMiddle" },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/hg_img1.png"),
                        imgWidth: "1056",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "以合规管理规则为依据，通过系统的实施，帮助公司建立“及时、准确、独立、有效“的合规管理体系。",
                            "内外规管理模块将公司内外部合规管理规章制度，以电子化的形式展示，及时有效的共享、发布，方便公司员工了解、学习合规依据。",
                            "通过合规信息报送结合本公司实际情况，完成对本公司临时风险合规信息的收集、编写和报送工作。",
                            "在报送完成后，应用合规检查，帮助合规部在日常工作中，通过合规检查对经营管理活动是否符合法律、规则和准则要求等进行调查、测试、分析和评估。并根据检查结果，记录并管理内外部合规检查和审计发现的问题。",
                            "合规考核模块通过建立不同维度的考核模版来确定合规考核的要点以及评分标准，支持考核线上打分与结果汇总，实现对已有考核结果数据的查询。",
                            "通过合规培训，完善内控合规培训资料库的建立，可以促进各机构培训资料的共享和交流，并可以精选部分培训资料重点学习，提高培训质量，便于总公司掌握和统计全公司培训开展情况。",
                            "合规报告管理模块帮助合规部门人员便捷、快速地完成报告的报送工作，可自动生成相关报告。",
                            "统计分析模块能按时间范围、机构或相关其他任务逻辑对各机构的合规情况展现多维度统计分析。",
                        ],
                    },
                ],
                hoverSwitchList: [
                    {
                        iconUrl: require("@/assets/scheme/hg_icon1.png"),
                        name: "提升合规风险防范能力",
                        datail:
                            "通过系统实现合规检查及合规信息报送功能，及时高效了解公司合规风险状况，快速决策，提升合规风险防范能力",
                    },
                    {
                        iconUrl: require("@/assets/scheme/hg_icon2.png"),
                        name: "构建合规管理闭环管理体系",
                        datail:
                            "通过平台搭建，打通业务数据关联，构建可持续优化的闭环合规管理体系",
                    },
                    {
                        iconUrl: require("@/assets/scheme/hg_icon3.png"),
                        name: "提升合规管理的效率及效果",
                        datail:
                            "固化表单，统一标准，信息获取、高效统计，全面提升合规管理的效率和效果",
                    },
                ],
                partTwoData: [
                    { type: "TITLE", title: "案例" },
                    {
                        type: "SUBTITLE",
                        subTtitle: "中华保险",
                    },
                    {
                        type: "SUBTITLE",
                        subTtitle: "建设目标",
                        class:"small"
                    },
                    {
                        type: "CONT",
                        conts: [
                            "搭建公司统一的合规管理信息化处理平台，全面涵盖日常合规管理工作；通过平台实施提升合规管理水平，强化公司合规意识，实现人人合规管理要求。/代理机构的数字化协同，打造阳光采购工程。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/jr_img2.png"),
                        imgWidth: "993",
                    },
                    {
                        type: "SUBTITLE",
                        subTtitle: "项目成果",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "总部层面统一设计，支持各分子公司一体化管控；",
                            "通过系统构建内外规管理，合规信息报送、合规检查、问题整改、合规考核闭环管理模式；",
                            "系统提供多维度统计分析，为管理决策提供有力支持。",
                        ],
                    },
                ],
            },
            scenes_ced: {
                partOneData: [
                    { type: "TITLE", title: "概述" },
                    {
                        type: "CONT",
                        conts: [
                            "2015年2月，保监会发布中国风险导向的偿付能力体系（简称偿二代），保险业进入偿二代过渡期。根据过渡期试运行情况，经国务院同意，保监会决定正式实施偿二代，自2016年1月1日起施行《保险公司偿付能力监管规则（第1号－第17号）》。",
                            "其中《保险公司偿付能力监管规则第11号：偿付能力风险管理要求与评估》明确提出“保险公司应当建立满足自身风险管理要求的风险管理信息系统”，并提出应至少满足数据采集与存储、指标监测及预警、压力测试、风险管理报告及报表、信息汇总与共享等五大功能要求。",
                            "2019年偿二代二期建设工作逐渐开展，银监会、保监会合并为银保监后，相关管理机制逐渐完善并统一。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/ced_img1.png"),
                        imgWidth: "1056",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "慧点科技偿二代产品提供了风险库、风险指标、偿付能力风险管理要求与评估（SARMRA）、损失事件管理、风险报告管理、风险综合评级和规章制度管理等功能模块。",
                            "• 风险库管理用于定义公司的风险分类框架；",
                            "• 风险指标部分实现了风险指标的定义、下发、集成与报送、监测、预警及整改跟踪的全过程；",
                            "• SARMRA功能中可自定义评估模板，下发评估任务，开展多人评估，系统自动计算评估结果及导出银保监标准格式的评估结果；",
                            "• 损失事件管理用于收集各分子公司或各部门的损失事件，在系统中可对事件进行跟踪整改；",
                            "• 风险报告用于生成、存储与归档风险管理相关的规则制度、管理报告及报表；",
                            "• 风险综合评级是在系统中完成银保监下发的10号文报送工作；",
                            "• 规章制度库用于存储归档公司内外部制度。",
                        ],
                    },
                ],
                hoverSwitchList: [
                    {
                        iconUrl: require("@/assets/scheme/ced_icon1.png"),
                        name: "满足外部监管要求",
                        datail:
                            "产品通过指标监测及相关业务模块，满足保险公司进行重要监控预警指标分析评价为主的综合性分类业务管理工作；同时，支持各保险公司定期通过系统开展风险排查并及时报送风险报告",
                    },
                    {
                        iconUrl: require("@/assets/scheme/ced_icon2.png"),
                        name: "多维度数据统计分析预警",
                        datail:
                            "通过丰富的统计图表视图及管理驾驶舱，风险管理人员可从组织、业务、产品等多维度分析风险状况，预警风险发生，及时纠正，避免损失",
                    },
                    {
                        iconUrl: require("@/assets/scheme/ced_icon3.png"),
                        name: "提升工作效率，增强部门协同",
                        datail:
                            "风险管理信息系统最终目标是帮助公司建立全业务条线，各部门协同的统一风险管理信息化平台。系统帮助企业加强业务管理，实现公司偿付能力管理的持续改进。同时，强化部门之间的信息共享，提升部门之间的协同效率",
                    },
                ],
                partTwoData: [
                    { type: "TITLE", title: "案例" },
                    {
                        type: "SUBTITLE",
                        subTtitle: "泰康保险",
                    },
                    {
                        type: "CONT",
                        conts: [
                            "将风控工作由大量的手工劳动转变为自动化工作，提高工作效率，实现风险管理与内控管理工作的标准化、信息化、自动化，为公司贯彻落实“偿二代”要求、有效控制风险奠定基础。",
                            "• 总部层面统一设计，构建集团统一的风险管理架构，方法统一、流程统一、数据统一、语言统一；",
                            "• 支持各级公司风险、内控、合规管理体系融合，全面应对偿二代监管，支持业务发展需求；",
                            "• 与业务数据的深度集成，通过与业务系统、财务系统集成实现风险指标自动化监控；",
                            "• 建立多样化的数据分析能力，建设风险仪表盘，使管理层能及时了解全集团风险状态，为管理决策提供有力支持。",
                        ],
                    },
                    {
                        type: "IMG",
                        imgUrl: require("@/assets/scheme/ced_img2.png"),
                        imgWidth: "1054",
                    },
                ],
            },
            acitveIndex: 0,
        };
    },
    methods: {
        getChangTab(acitveIndex) {
            this.acitveIndex = parseInt(acitveIndex);
        },
        scrollHack() {
            document.getElementById("scheme-container").scrollIntoView();
        },
    },
    mounted() {
        let tabIndex = this.$route.query.tabIndex;
        if (tabIndex != undefined) {
            this.$router.push({ query: {} }); // 清除参数
            this.scrollHack();
            this.getChangTab(tabIndex);
            this.$refs.Tab.changeActive(parseInt(tabIndex));
        }
    },
};
</script>

<style lang="scss" scoped>
.scheme {
    .tab-cont {
        margin-top: 120px;
        //  padding-bottom: 80px;
    }
}

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
            padding: 82px 0 60px;
        }
    }
}
.focus-box {
    margin-top: -80px;
    // padding-bottom: 10px;
    font-size: 16px;
    color: #788398;
    line-height: 50px;
    .focus {
        font-size: 18px;
        margin: 14px 0;
    }
    .focus1 {
        margin-bottom: 0;
    }
    .color-1 {
        color: #2565b4;
    }
}

.companyList {
    li {
        display: inline-block;
        vertical-align: top;
        width: 33%;
        text-align: left;
        position: relative;
        padding-left: 6px;
        box-sizing: border-box;
        &::before{
            // content: "• ";
            content: ".";
            // display: inline-block;
            // width: 2px;
            // height: 2px;
            // background-color: #788398;;
            border-radius: 50%;
            position: absolute;
            top:18px;
            left: -6px;            
            line-height: 4px;
        }
    }

    font-size: 18px;
    color: #788398;
    line-height: 50px;
    padding-bottom: 80px;
    padding-left: 124px;
}
</style>
