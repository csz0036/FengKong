<template>
    <div id="pageContent">
        <div class="applyCentre">
            <div class="applyContent">
                <div class="leftText">
                    <h2>您将了解电子签约如何</h2>
                    <p>慧点科技大数据风控产品全面关联风险、内控、合规等管理要素，形成一体化的风险管控体系，业务互通互融，消除管理壁垒；整合大数据智能分析需求，集成业务数据，通过指标、模型、图谱等手段实时监控业务运行，及时洞察，快速纠偏。                        
                    </p>
                </div>
                <div class="rightTable">
                    <p class="title">预约演示</p>
                    <p class="subTitle">完善信息，我们的顾问会在1个工作日内与您取得联系</p>
                    <div class="inputLab"><label for="input_1"><img src="./imgs/ic_1.png" class="iconImg"
                                alt=""> <input type="text" id="input_1" placeholder="您的名字"></label>
                        <p class="errorInfo" id="userName">请输入姓名</p>
                    </div>
                    <div class="inputLab"><label for="input_2"><img src="./imgs/ic_2.png" class="iconImg"
                                alt=""> <input type="text" id="input_2" placeholder="公司名称"></label>
                        <p class="errorInfo" id="companyName">请输入公司名称</p>
                    </div>
                    <div class="inputLab"><label for="input_3"><img src="./imgs/ic_3.png" class="iconImg"
                                alt="">
                            <div class="selectBox">
                                <p class="defaultText">请选择企业规模</p>
                                <ul id="scaleNumber">
                                    <li>20人以下</li>
                                    <li>20-100人</li>
                                    <li>100-300人</li>
                                    <li>300-500人</li>
                                    <li>500人以上</li>
                                </ul>
                            </div>
                        </label>
                        <p class="errorInfo" id="selsectCompany">请选择企业规模</p>
                    </div>
                    <div class="inputLab"><label for="input_4"><img src="./imgs/ic_4.png" class="iconImg"
                                alt=""> <input type="text" id="input_4" placeholder="公司邮箱"></label>
                        <p class="errorInfo" id="companyMail">请输入正确的邮箱</p>
                    </div>
                    <div class="inputLab2"><textarea name="" id="textareaId" placeholder="备注"></textarea></div>
                    <div class="inputLab"><label for="input_5"><img src="./imgs/ic_5.png" class="iconImg"
                                alt=""> <input type="text" id="input_5" placeholder="手机号码"></label>
                        <p class="errorInfo" id="phoneNumber">请输入正确的手机号码</p>
                    </div>
                    <div class="inputLab"><label for="input_6"><input type="text" id="input_6"
                                placeholder="验证码"></label>
                        <p class="YZMInfo" id="getYZM">获取验证码</p>
                        <p class="YZMInfo" id="showTime"></p>
                    </div>
                    <p id="submitBut">申请申请，免费体验</p>
                </div>
            </div>
        </div>
        <div id="successSubmit" class="submitInfo">
            <div class="innerSuccess"><img src="./imgs/success.png" class="successImg" alt="">
                <p class="tit">您已经成功提交申请</p>
                <p class="cont">我们的顾问会在1个工作日内与您取得联系，为您安排产品体验。</p>
            </div>
        </div>
        <div id="errorInfo" class="submitInfo">
            <div class="innerSuccess"><img src="./imgs/error.png" class="successImg" alt="">
                <p class="tit">错误提示</p>
                <p class="cont" id="errorContent"></p>
            </div>
        </div>
        <div id="universalTotl">
            <div class="infoText"></div>
        </div>
    </div>
</template>

<script>
// import $ from 'jquery';
import './js/applyLoding.min.js'
export default {
    components: {
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
        test(){
            // $('a').cl
            console.log("0000")
        }
    },
};
</script>

<style scoped src="./css/applyLoding.min.css"> </style>