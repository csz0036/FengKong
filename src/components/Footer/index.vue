<template>
  <footer id="pageFooter">
    <div class="footer wrapper">
      <div class="footmain">
        <ul class="ov footerList">
          <li class="footActive">
            <dl>
              <dt>产品</dt>
              <dd><a href="./contract.html">合同全生命周期管理</a></dd>
              <dd><a href="./dataCentre.html">合同数据中台</a></dd>
              <dd><a href="./infoConsult.html">合同信息化咨询</a></dd>
              <dd><a href="./affair.html">法律事务管理</a></dd>
              <dd><a href="./robot.html">人工智能应用</a></dd>
              <dd><a href="./purchase.html">集中采购管理</a></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>客户案例</dt>
              <dd><a href="./caseList.html">客户案例</a></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>资源中心</dt>
              <dd><a href="./resourceCenter.html?tabId=0">新闻动态</a></dd>
              <dd><a href="./resourceCenter.html?tabId=1">专业分析</a></dd>
              <dd><a href="./resourceCenter.html?tabId=2">行业报告</a></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>渠道合作</dt>
              <dd><a href="./cooperation.html">渠道合作</a></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>关于我们</dt>
              <dd><a href="./aboutUs.html">公司介绍</a></dd>
              <dd>
                <a
                  href="http://www.smartdot.com/about_Smartdot.html#lianxi"
                  target="_blank"
                  >联系我们</a
                >
              </dd>
              <dd>
                <a
                  href="http://www.smartdot.com/about_Smartdot.html#zhaoxian"
                  target="_blank"
                  >加入我们</a
                >
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>服务热线</dt>
              <dd class="tel">4000-550-650</dd>
              <dd><img src="@/assets/qr-code.png" /></dd>
            </dl>
          </li>
        </ul>
        <p class="partner-link">
          <span>友情链接：</span>
          <a href="http://www.cetc.com.cn/" target="_blank">中国电科</a>
          <a href="http://www.taiji.com.cn/" target="_blank">太极股份</a>
          <a href="http://www.smartdot.com/" target="_blank">慧点科技</a>
        </p>
      </div>
    </div>
    <div class="footer-copyright">
      <p class="copyright">
        <span>慧点科技旗下品牌 服务中国500强及行业百强企业</span>
        <span>Copyright 2013 © Smartdot Technologies Co., Ltd.
          北京慧点科技有限公司版权所有 京ICP备12041864号-1 |
          京公网安备11010802015712</span>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
a:link, a:visited {
    text-decoration: none;
}
#pageFooter {
    width: 100%;
    height: 430px;
    background: #1b2433
}

#pageFooter .copyright,#pageFooter .wrapper {
    width: 1012px;
    margin: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

#pageFooter .wrapper .footmain {
    width: 100%
}

#pageFooter .wrapper .footerList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 60px
}

#pageFooter .wrapper .footerList li:last-child {
    margin-left: 82px
}

#pageFooter .wrapper .footerList dl {
    width: 162px
}

#pageFooter .wrapper .footerList dt {
    color: #fff;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 28px;
    font-weight: 300
}

#pageFooter .wrapper .footerList dd {
    font-size: 13px;
    line-height: 13px;
    color: #8D9299
}

#pageFooter .wrapper .footerList dd:not(:last-child) {
    margin-bottom: 18px
}

#pageFooter .wrapper .footerList dd.tel {
    color: #0082E8;
    font-size: 16px;
    line-height: 16px
}

#pageFooter .wrapper .footerList dd.tel:hover {
    color: #0082E8
}

#pageFooter .wrapper .footerList dd:hover {
    color: #fff;
    cursor: pointer
}

#pageFooter .wrapper .footerList dd img {
    width: 120px;
    height: 120px
}

#pageFooter .wrapper .footerList dd a:active,#pageFooter .wrapper .footerList dd a:link,#pageFooter .wrapper .footerList dd a:visited {
    color: #8D9299
}

#pageFooter .wrapper .footerList dd a:hover {
    color: #fff
}

#pageFooter .wrapper .partner-link {
    margin-top: 60px;
    font-size: 13px;
    line-height: 13px;
    color: #8D9299
}

#pageFooter .wrapper .partner-link a {
    color: #8D9299;
    margin-right: 16px
}

#pageFooter .wrapper .partner-link a:hover {
    color: #fff
}

#pageFooter .wrapper {
    height: 380px
}

#pageFooter .footer-copyright {
    height: 50px;
    background: #17202D;
    color: #8D9299;
    font-size: 12px
}

#pageFooter .footer-copyright p {
    width: 1012px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}
</style>