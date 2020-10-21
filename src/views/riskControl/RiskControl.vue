<template>
    <!-- 风控案例 -->
    <div>
        <Banner
            enName="Rish control cases"
            cnName="风控案例"
            introduction="200+客户，覆盖央企、地方国企、上市公司等总多领域，涉及能源、交通、金融、建筑、钢铁、石油石化、电信等多个行业"
            :bg="bannerBg"
        ></Banner>
        <CaseItem
            postion="top"
            :icon="iconUrl1"
            name="中国中车集团有限公司"
            companyIntro="中国中车股份有限公司由中国北车股份有限公司、中国南车股份有限公司按照对等原则合并组建的A+H股上市公司。经中国证监会核准，2015年6月8日，中国中车在上海证券交易所和香港联交所成功上市。现有46（52）家全资及控股子公司，员工17万余人。"
            projectIntro="平台一体化：实现“一个平台、一套程序、一个数据库”，有效实现集团对于各级子公司风险管控的需求，提高协同效率和效果。\n\n
                        业务一体化：实现风险、内控、审计业务一体化管理，数据互联互通，提升业务协作。\n\n
                        知识一体化：实现风险库、内控矩阵、审计指引的统一管理和维护，实现风控审计报表的整合分析。 "
            :imgUrl="imgUrl1"
            imgWidth="962"
            imgHeight="291"
        ></CaseItem>

        <CaseItem
            class="bg-1"
            :icon="iconUrl2"
            name="中国诚通控股集团有限公司"
            companyIntro="中国诚通控股集团有限公司由国务院国资委代表国务院履行出资人职责的中央企业。2016年2月，中国诚通被确定为中央企业国有资本运营公司试点，搭建国有资产重组和资本运作的平台。中国诚通主营业务为股权运作、金融服务、资产管理，以及综合物流服务、生产资料贸易、林浆纸生产开发及利用等。"
            projectIntro="实现风险、合规、内控、法务“四位一体”信息化落地，统一工作入口、统一工作界面、统一工作流程、统一分析维度，打通业务壁垒，形成监督合力。\n\n
                        针对不同的二级公司的经营业态，设计差异化的业务风险预警指标，提升集团风险监控能力。\n\n
                        建立以风险为导向的合同管理全生命周期系统，合规审查、内控检查、风险预警与合同管理过程无缝对接。\n\n
                        实现风控合规法务知识的统一维护及全文检索，通过多样化的管理看板及时分析查询各单位或各业务线的风险防控情况，提高风险分析能力。 "
            :imgUrl="imgUrl2"
            imgWidth="595"
            imgHeight="656"
        ></CaseItem>

        <CaseItem
            postion="top"
            :icon="iconUrl3"
            name="北京市轨道交通运营管理有限公司"
            companyIntro="北京市轨道交通运营管理有限公司，是北京市轨道交通建设管理有限公司设立的全资子公司，是市政府批准的北京第三家轨道交通运营商。公司主营业务涵盖轨道交通客运服务、车辆及设备设施维修服务、技术研发、咨询培训、广告、民用通信等版块。目前，负责运营北京市轨道交通燕房线、北京大兴国际机场线。"
            projectIntro="<span style='color:#3565AE;'>文件管理：</span>实现对各类规章制度的数据格式化管理，对制度分章节、分段落结构化拆解，建立规章制度和风险事件，控制点的关联。\n\n
                        <span style='color:#3565AE;'>风险管理：</span>按照流程、风险分类等不同维度对风险事件进行识别；支持风险事件、内控措施、规章制度的关联展现。\n\n
                        <span style='color:#3565AE;'>内控管理：</span>固化控制识别、内控评价及缺陷整改的工作流程，提升工作效率。\n\n
                        <span style='color:#3565AE;'>审计管理：</span>提供风险评估、审计计划制定、审计项目实施、审计整改跟踪的全过程规范化管理。 "
            :imgUrl="imgUrl3"
            imgWidth="1055"
            imgHeight="426"
        ></CaseItem>

        <CaseItem
            class="bg-1"
            postion="top"
            :icon="iconUrl4"
            name="中国长江三峡集团有限公司"
            companyIntro='中国长江三峡集团有限公司于1993年9月27日经国务院批准成立，为建设三峡、开发长江，2009年9月27日更名为中国长江三峡集团公司。集团公司的战略定位是以大型水电开发与运营为主的清洁能源集团，主营业务是水电工程建设与管理、电力生产、相关专业技术服务。中国长江三峡集团公司全面负责三峡工程的建设与运营。2016年8月，中国长江三峡集团公司在"2016中国企业500强"中排名第216位。'
            projectIntro="有效规范风险管理体系：通过信息系统对集团风险管理制度、流程、管控体系进行统一和固化，形成集团统一管理下的差异化风险管控体系，风险管理的规范性得到大幅度提高。\n\n
                        有效提升风险管理能力：提高风险的规范化程度和透明度，快速、及时、准确地为有关决策者提供各种基础信息和分析数据，全程监督重大风险处理流程，跟踪违规追责管理流程，有效提升效率。\n\n
                        有效改进风险分析能力：集团风险管理信息化项目实施将大幅提高集团和出资企业风险管理效率和预判准确性，集团和出资企业风险分析能力将得到有效改进，对科学决策支持效果将日益体现。"
            :imgUrl="imgUrl4"
            imgWidth="1058"
            imgHeight="457"
        ></CaseItem>

        <CaseItem
            :icon="iconUrl5"
            name="上海机场集团有限公司"
            companyIntro="1998年5月28日，经上海市人民政府批准，组建上海机场（集团）有限公司，统一经营管理上海浦东和虹桥两大国际机场。公司经营范围包括机场建设、运营管理，与国内外航空运输有关的地面服务，国际国内贸易（除专项规定），对外技术合作等。2019年9月1日，2019中国服务业企业500强榜单在济南发布，上海机场（集团）有限公司排名第269位。"
            projectIntro="结合信息化手段，落实集团关于实施法定自查工作的“一个办法、三个规则”总体要求，以实践来检验制度制定的合理性与实用性。\n\n
                        通过建设“清单管理”、“检查实施计划”、“危险源管理”等系统功能，固化法定自查工作开展流程、明确管理职责，做到自查工作有法可依有据可循、自查工作闭环管理，风险提前预警。"
            :imgUrl="imgUrl5"
            imgWidth="654"
            imgHeight="436"
        ></CaseItem>

        <CaseItem
            class="bg-1"
            :icon="iconUrl6"
            name="美的集团股份有限公司"
            companyIntro="1998年5月28日，经上海市人民政府批准，组建上海机场（集团）有限公司，统一经营管理上海浦东和虹桥两大国际机场。公司经营范围包括机场建设、运营管理，与国内外航空运输有关的地面服务，国际国内贸易（除专项规定），对外技术合作等。2019年9月1日，2019中国服务业企业500强榜单在济南发布，上海机场（集团）有限公司排名第269位。"
            projectIntro="业务基础建设：通过风险管理信息平台，建立制度设计和风险管理的相互关联，推动循环改善。\n\n
                        风险管理效率提升：优化风险管理工作的工作流程和操作方法，提高工作效率与部门协作。\n\n
                        数据自动汇总统计：通过信息平台提升对数据的处理分析功能，实时出具各种管理报表，便于信息获取、传递和汇总，为集团战略目标实现提供支撑。"
            :imgUrl="imgUrl6"
            imgWidth="666"
            imgHeight="344"
        ></CaseItem>

        <CaseItem
            :icon="iconUrl7"
            name="上海电气集团"
            companyIntro="上海电气是一家大型综合性高端装备制造企业，主导产业聚焦能源装备、工业装备、集成服务三大领域，致力于为全球客户提供绿色、环保、智能、互联于一体的技术集成和系统解决方案。产品包括火力发电机组（煤电、气电）、核电机组、风力发电设备、输配电设备、环保设备、自动化设备、电梯、轨道交通、医疗设备、油气海工和工业互联网等。改革开放以来，集团诞生了一大批世界领先的创新产品，如全球首台百万千瓦超超临界二次再热发电机组、三代四代核电核岛和常规岛主设备、大型海上风电设备、西气东输的高频电动机等。"
            projectIntro="通过信息系统的建立，对风险管理与合规管理的工作流程和操作方法进行“固化”，“自动化”，“标准化”，提升工作效率；满足多层级，多岗位，多用户的需求；通过信息平台对数据的处理分析功能出具管理报表，便于信息获取，传递和汇总。\n\n
                         有利支撑集团风险管理的理论体系的实施，实现统一语言，统一标准的协同应用。"
            :imgUrl="imgUrl7"
            imgWidth="666"
            imgHeight="309"
        ></CaseItem>

        <CaseItem
            class="bg-1"
            :icon="iconUrl8"
            name="中原环保股份有限公司"
            companyIntro="中原环保股份有限公司是国有控股上市公司，全国国企改革“双百企业”。公司深化改革、创新发展，稳步实施“立足中原、走向世界”的市场战略，围绕“大公用、大环保、大生态”业务领域，科学布局全产业链，创新驱动高质量发展，全面打造行业典范，新动能加速成长，新业态蓬勃涌现，发展成为生态环境综合服务商。"
            projectIntro="风控审计监察一体化监督平台：建立公司总部、各级分子公司风险、内控、审计及纪检监察“四位一体”的大监督平台。\n\n
                        业务共享：系统产生的风险、内控、审计、纪检数据可以为总分公司共享和分析，且能够系统间数据互相流转，共享监督成果，形成监督合力。\n\n
                        数据预警：系统与公司包含但不限于现有信息系统（如ERP、OA、合同管理、智慧水务、供热收费与客服等）实现数据交换和融合，通过风险指标和模型实时监控业务系统。"
            :imgUrl="imgUrl8"
            imgWidth="680"
            imgHeight="456"
        ></CaseItem>

        <!-- 合作方 -->
        <div class="parallel bg-2">
            <div class="dividing-line2"></div>
            <h2 class="title title-1">他们的共同选择</h2>
            <LinkByColumn
                cloumnWidth="1094"
                cloumnHight="422"
                :showDecs="true"
                :linkList="linkList"
            ></LinkByColumn>
        </div>
    </div>
</template>

<script>
import CaseItem from "@/components/caseItem";
import LinkByColumn from "@/components/styles/LinkByColumn";
import Banner from "@/components/styles/Banner";

export default {
    components: {
        CaseItem,
        LinkByColumn,
        Banner,
    },

    data() {
        return {
             bannerBg: require("@/assets/riskControl/banner.png"),
            iconUrl1: require("@/assets/riskControl/icon1.png"),
            imgUrl1: require("@/assets/riskControl/img1.png"),
            iconUrl2: require("@/assets/riskControl/icon2.png"),
            imgUrl2: require("@/assets/riskControl/img2.png"),
            iconUrl3: require("@/assets/riskControl/icon3.png"),
            imgUrl3: require("@/assets/riskControl/img3.png"),
            iconUrl4: require("@/assets/riskControl/icon4.png"),
            imgUrl4: require("@/assets/riskControl/img4.png"),
            iconUrl5: require("@/assets/riskControl/icon5.png"),
            imgUrl5: require("@/assets/riskControl/img5.png"),
            iconUrl6: require("@/assets/riskControl/icon6.png"),
            imgUrl6: require("@/assets/riskControl/img6.png"),
            iconUrl7: require("@/assets/riskControl/icon7.png"),
            imgUrl7: require("@/assets/riskControl/img7.png"),
            iconUrl8: require("@/assets/riskControl/icon8.png"),
            imgUrl8: require("@/assets/riskControl/img8.png"),
            linkList: [require("@/assets/riskControl/links.png")],
        };
    },
    mounted() {},
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
</style>