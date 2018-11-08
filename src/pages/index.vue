<template>
  <section class="container" ref="layerout">
    <div class="left-side__bar">
      <div class="left-side__menu">
        <el-menu
          :default-active="activeIndex"
          class="left-menu__nav"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#65cea7"
          @select="handleSelect"
          :router="true"
          :unique-opened="true"
          >
          <el-submenu v-for="item in menu" :index="item.name" :key="item.name">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="it in item.submenu" :key="it.name">
              <el-menu-item :index="it.path">{{it.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="main-content" >
      <div class="header-section">css-expose</div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  data () {
    return {
      selectMenu: {},
      menu: [{
        name: '通用',
        icon: 'el-icon-menu',
        submenu: [{
          name: '主页',
          path: '/css-expose/main'
        }]
      },
      {
        name: '背景',
        icon: 'el-icon-menu',
        submenu: [{
          name: '背景尺寸',
          path: '/css-expose/background-size'
        },
        {
          name: '背景裁剪',
          path: '/css-expose/background-clip'
        },
        {
          name: '多重边框',
          path: '/css-expose/box-shadow-more'
        },
        {
          name: '背景定位',
          path: '/css-expose/background-position'
        },
        {
          name: '条纹',
          path: '/css-expose/linear-gradient'
        },
        {
          name: '条纹边框',
          path: '/css-expose/linear-gradients'
        }]
      },
      {
        name: '形状',
        icon: 'el-icon-menu',
        submenu: [{
          name: '糖果按钮',
          path: '/css-expose/button'
        },
        {
          name: '路径裁剪',
          path: '/css-expose/clip-path'
        },
        {
          name: '切角',
          path: '/css-expose/cut-conner'
        },
        {
          name: '梯形',
          path: '/css-expose/perspective'
        },
        {
          name: '饼状图',
          path: '/css-expose/pie'
        },
        {
          name: '阴影',
          path: '/css-expose/box-shadow'
        }]
      },
      {
        name: '效果',
        icon: 'el-icon-menu',
        submenu: [{
          name: '阴影',
          path: '/css-expose/box-shadow'
        },
        {
          name: '不规则投影',
          path: '/css-expose/drop-shadow'
        },
        {
          name: '染色效果',
          path: '/css-expose/filter-sepia'
        },
        {
          name: '毛玻璃效果',
          path: '/css-expose/filter-blur'
        }]
      }]
    }
  },
  computed: {
    activeIndex () {
      let path = ''
      this.menu.forEach((item) => {
        item.submenu.forEach((itm) => {
          if (this.$route.path.indexOf(itm.path) > -1) {
            path = itm.path
          }
        })
      })
      return path
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.pathToMenu(keyPath[1])
    },
    pathToMenu (path) {
      this.menu.forEach((item) => {
        item.submenu.forEach((itm) => {
          if (path.indexOf(itm.path) > -1) {
            this.selectMenu.mainMenu = item.name
          }
        })
      })
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.container .el-menu-item {
  height: 50px;
  line-height: 50px;
}
.el-menu-item-group__title {
  padding: 0;
}
</style>
<style lang="scss">
  .container {
    .left-side__bar {
      position: fixed;
      height: 100%;
      z-index: 100;
      width: 250px;
      background-color: #545c64;
      overflow-x: hidden;
      overflow-y: inherit;
      .el-menu {
        border: 0 none;
      }
    }
    .header-section {
      font-size: 20px;
      line-height: 60px;
      text-align: center;
      font-weight: bold;
    }
    .main-content {
      margin-left: 250px;
    }
    .el-menu-item {
      margin: 0;
      height: 56px;
      line-height: 56px;
    }
  }
</style>
