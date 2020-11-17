<template>
  <headroom>
    <div class="header-top" id="headTransform">
      <div class="header-inner">
        <div class="left">
          <span>中国电子科技集团太极股份成员企业</span>
        </div>
        <div class="right">
          <span>服务热线：</span> <span>4000-550-650</span>
        </div>
      </div>
    </div>
    <div id="menu">
      <div class="cw dis-cont">
        <div class="menu_logo dis-cont">
          <!-- logo -->
          <img
            class="menu__container_logo"
            src="@/assets/Logo.png"
            @click="$router.push('/')"
          />
          <!-- <span>
                        
                    </span> -->
          <img
            class="logo_fzy"
            src="@/assets/logo_fzy.png"
            @click="$router.push('/')"
          />
        </div>
        <div class="menu_nav">
          <ul>
            <li
              v-for="(i, iIndex) in nav"
              :key="iIndex"
              class="item"
              :class="{
                active: isActive === iIndex
              }"
              @click="openMenu(i.path, iIndex)"
            >
              <span>{{ i.name }}</span>
            </li>
          </ul>
          <!-- todo：链接是多是 -->
          <div class="demo_link" @click="openPage('/reservation')">
            预约演示
          </div>
        </div>
      </div>
    </div>
  </headroom>
</template>

<script>
import scroll from "@/utils/scroll";
import { headroom } from 'vue-headroom'
export default {
  name: "Menu",
  data() {
    return {
      nav: [
        {
          name: "数智风控",
          path: "/"
        },
        {
          name: "产品介绍",
          path: "/about"
        },
        {
          name: "风控案例",
          path: "/riskControl"
        },
        {
          name: "专项方案",
          path: "/scheme"
        }
      ],
      isActive: -1 // 选中
    };
  },
  components: {
      headroom
  },
  created() {},
  methods: {
    getPath() {
      let curPath = this.$route.path;
      // console.log("路由------", this.$route);

      // menu tab重置
      for (let i = this.nav.length - 1; i >= 0; i--) {
        if (this.nav[i].path == curPath) {
          this.isActive = i;
          break;
        }
      }

      scroll.clearScrollList();
    },
    openMenu(path, index) {
      this.isActive = index;
      this.openPage(path);
    },
    openPage(path) {
      if (this.$route.fullPath !== path) {
        this.$router.push(path);

        // 滚动到顶部
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  },
  watch: {
    $route: "getPath"
  }
};
</script>

<style lang="scss" scoped>
.cw {
  height: 80px;
}
.header-top {
    height: 44px;
    background: #1f2126;
    color: #999;
    font-size: 14px;
}
.header-inner{
    height: 44px;
    line-height: 44px;
    width: 1122px;
    margin: 0 auto;
    .left{
        display: inline;
    }
    .right{
        float: right;
    }
}


#menu {
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  z-index: 200;
  .dis-cont {
    position: relative;
  }
  span {
    font-weight: 400;
  }
  .menu_logo {
    // flex: 1;
    display: flex;
    align-items: baseline;
    img {
      // width: 126px;
      height: 42px;
      // display: block;
      margin-right: 20px;
      // vertical-align: middle;
    }
    .logo_fzy {
      height: 34px;
      border-left: 1px solid rgba(151, 151, 151, 0.3);
      padding-left: 20px;
    }
    font-size: 20px;
    color: #333333;
  }

  .menu_nav {
    position: absolute;
    right: 0;
    background-color: #ffffff;
    ul {
      overflow: visible;
      display: inline-block;
    }
    li {
      float: left;
      font-size: 16px;
      color: #5d749f;
      margin-right: 40px;
      position: relative;
      cursor: pointer;
      transition: color 0.3s;
      &::after {
        content: "";
        // width: 100%;
        height: 3px;
        position: absolute;
        background: #2970d5;
        border-radius: 3px;
        bottom: -10px;
        left: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.2s;
        width: 0%;
      }
      &.active {
        color: #2970d5;
        position: relative;
        &::after {
          // content: "";
          width: 100%;
          // height: 3px;
          // position: absolute;
          // background: #2970d5;
          // border-radius: 3px;
          // bottom: -10px;
          // left: 0;
        }
      }
    }
  }
  .demo_link {
    display: inline-block;
    width: 92px;
    height: 36px;
    line-height: 36px;
    background-image: linear-gradient(180deg, #f39800 0%, #f18e00 100%);
    border-radius: 2px;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
}
@media screen and (max-width: 1180px) {
  #menu {
    .menu_nav {
      position: fixed;
    }
  }
}
</style>
