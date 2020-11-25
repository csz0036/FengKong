<template>
    <div id="pageContent">
        <div class="applyCentre">
            <div class="applyContent">
                <div class="leftText">
                    <h2>您是否希望了解数智风控产品，可预约演示</h2>
                    <p>慧点科技大数据风控产品全面关联风险、内控、合规等管理要素，形成一体化的风险管控体系，业务互通互融，消除管理壁垒；整合大数据智能分析需求，集成业务数据，通过指标、模型、图谱等手段实时监控业务运行，及时洞察，快速纠偏。                        
                    </p>
                </div>
                <div class="rightTable">
                    <p class="title">预约演示</p>
                    <p class="subTitle">完善信息，我们的顾问会在1个工作日内与您取得联系</p>
                    <div class="inputLab">
                        <label for="input_1">
                            <img src="./imgs/ic_1.png" class="iconImg" alt=""> 
                            <input type="text" id="input_1" v-model="formObj.name" placeholder="您的名字">
                        </label>
                        <p class="errorInfo" id="userName" v-if="formError.nameEeeor">请输入姓名</p>
                    </div>
                    <div class="inputLab">
                        <label for="input_2"><img src="./imgs/ic_2.png" class="iconImg" alt=""> 
                            <input type="text" id="input_2" v-model="formObj.companyName" placeholder="公司名称">
                        </label>
                        <p class="errorInfo" id="companyName" v-if="formError.companyNameEeeor">请输入公司名称</p>
                    </div>
                    <div class="inputLab"><label for="input_3">
                        <img src="./imgs/ic_3.png" class="iconImg" alt="">
                            <div class="selectBox">
                                <!-- <p class="defaultText" @click="showUl" @blur.prevent="showUl">{{formObj.companyScale}}</p> -->
                                <input type="text" class="defaultText" @focus="showUl" @blur="hideUl" v-model="formObj.companyScale" >
                                <ul id="scaleNumber" :style="{height: ulHeight}">
                                    <li v-for="(item, ind) in list" :key="ind" @click="scaleItem(item)">{{item}}</li>
                                </ul>
                            </div>
                        </label>
                        <p class="errorInfo" id="selsectCompany" v-if="formError.companyScaleEeeor">请选择企业规模</p>
                    </div>
                    <div class="inputLab">
                        <label for="input_4"><img src="./imgs/ic_4.png" class="iconImg" alt=""> 
                            <input type="text" id="input_4" placeholder="公司邮箱"  v-model="formObj.companyMail">
                        </label>
                        <p class="errorInfo" id="companyMail" v-if="formError.companyMailEeeor">请输入正确的邮箱</p>
                    </div>
                    <div class="inputLab2"><textarea name="" id="textareaId" placeholder="备注"  v-model="formObj.textarea"></textarea></div>
                    <div class="inputLab">
                        <label for="input_5">
                            <img src="./imgs/ic_5.png" class="iconImg" alt=""> 
                            <input type="text" id="input_5" placeholder="手机号码"  v-model="formObj.phoneNumber">
                        </label>
                        <p class="errorInfo" id="phoneNumber" v-if="formError.phoneNumberEeeor">请输入正确的手机号码</p>
                    </div>
                    <div class="inputLab">
                        <label for="input_6">
                            <input type="text" id="input_6" placeholder="验证码"  v-model="formObj.getYZM">
                        </label>
                        <p class="YZMInfo" @click="getYZM" v-if="djs == '获取验证码'">{{djs}}</p>
                        <p class="YZMInfo" v-else>{{djs}}</p>
                        <p class="YZMInfo" id="showTime"></p>
                    </div>
                    <p id="submitBut" @click="getAuthority">申请申请，免费体验</p>
                </div>
            </div>
        </div>
        <div id="successSubmit" class="submitInfo" v-show="successPoput">
            <div class="innerSuccess"><img src="@/assets/success.png" class="successImg" alt="">
                <p class="tit">您已经成功提交申请</p>
                <p class="cont">我们的顾问会在1个工作日内与您取得联系，为您安排产品体验。</p>
            </div>
        </div>
        <div id="errorInfo" class="submitInfo" v-show="errorPoput" @click="hideErrorInfo">
            <div class="innerSuccess"><img src="@/assets/error.png" class="successImg" alt="">
                <p class="tit">错误提示</p>
                <p class="cont" id="errorContent">{{errorMsg}}</p>
            </div>
        </div>
        <div id="universalTotl" v-show="changeMsg">
            <div class="infoText">{{msg}}</div>
        </div>
    </div>
</template>

<script>
// import $ from 'jquery';
// import './js/applyLoding.min.js'
export default {
    components: {
    },
    data() {
        return {
            formObj:{
                name:'',
                companyName:'',
                companyMail:'',
                textarea:'',
                phoneNumber:'',
                getYZM:'',
                companyScale:'请选择企业规模'
            },
            formError:{
                nameEeeor:false,
                companyNameEeeor:false,
                companyMailEeeor:false,
                phoneNumberEeeor:false,
                companyScaleEeeor:false,
            },
            errorPoput: false,
            successPoput: false,
            errorMsg:'',
            ulHeight:0,
            list:['20人以下', '20-100人', '100-300人', '300-500人', '500人以上'],
            msg:'',
            changeMsg: false,
            djs:'获取验证码',
        };
    },
    mounted() {
    },
    methods: {
        scaleItem(item){
            this.formObj.companyScale = item;
            this.ulHeight = 0;
        },
        showUl(){
            this.ulHeight = 'auto';
        },
        hideUl(){
            setTimeout(()=>{
                this.ulHeight = 0;
            },100);
        },
        getYZM(){
            if(!this.formObj.phoneNumber){
                this.formError.phoneNumberEeeor = true
                return
            }

            this.time(60,()=>{
                this.djs = '获取验证码';
            }, 'djs')


            this.axios.post('http://fzy.smartdot.com/api/v1/user/sms_code',{phone: this.formObj.phoneNumber}).then((response) => {
                this.changeMsg = true;
                console.log(response)
                 if(response.data.head.error == 0){
                    this.msg = '验证码已经发送，请查收'
                 }else{
                     this.msg = '验证码发送失败，请稍后再试'
                 }
                 this.time(3,()=>{
                     this.changeMsg = false;
                 })
            })
        },
        hideErrorInfo(){
            this.errorPoput = false
        },
        time(Stime, callBack, elem, clear = false){
            let t ;
            clearInterval(t)
            if(clear) return;
            t = setInterval(()=>{
                Stime--;
                if(elem){
                    this[elem] = Stime
                }
                console.log(Stime)
                if(Stime <= 0){
                    clearInterval(t)
                    callBack()
                }
                
            },1000)
        },
        ResetErrorInfo(){
            this.formError = {
                nameEeeor:false,
                companyNameEeeor:false,
                companyMailEeeor:false,
                phoneNumberEeeor:false,
                companyScaleEeeor:false,
            }
        },
        getAuthority(){
            const {name, companyName, companyMail, phoneNumber, getYZM, textarea, companyScale} =  this.formObj
            this.ResetErrorInfo();
            if(!name){
                this.formError.nameEeeor = true
                return
            }

            if(!companyName){
                this.formError.companyNameEeeor = true
                return
            }

            if(companyScale == '请选择企业规模'){
                this.formError.companyScaleEeeor = true
                return
            }

            if(!companyMail){
                this.formError.companyMailEeeor = true
                return
            }

            if(!phoneNumber){
                this.formError.phoneNumberEeeor = true
                return
            }

            this.axios.post('http://fzy.smartdot.com/api/v1/user/post_info',{
                name: name,
                company_scale: companyScale,
                company_email: companyMail,
                company: companyName,
                phone: phoneNumber,
                code: getYZM,
                memo: textarea,
                source:1
            }).then((response) => {
                if(response.data.head.error == 1){
                    this.errorPoput = true
                    this.errorMsg = response.data.head.message;
                    this.time(3,()=>{
                        this.errorPoput = false;
                    })
                }else{
                    this.successPoput = true;
                    this.time(3,()=>{
                        this.$router.push('/')
                    })
                }
            })
        }
    },
};
</script>

<style scoped src="./css/applyLoding.min.css"> </style>