<template>
    <div id="foot">
      <p>慧点科技旗下品牌 服务中国500强及行业百强企业</p>
      <p>Copyright 2013 © Smartdot Technologies Co., Ltd. 北京慧点科技有限公司版权所有 京ICP备12041864号-1 | 京公网安备11010802015712</p>
    </div>
</template>
<script>
export default {
    data() {
      return {
      }
    }
}
</script>
<style lang="scss" scoped>
#foot{
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    height: 150px;
    background: #1B2433;
    p{
        margin: 0;
        &:first-child{
            padding: 50px 0 10px 0;
        }
    }
}
</style>