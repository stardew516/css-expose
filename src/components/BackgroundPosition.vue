<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">背景定位</p>
        <p class="style-text">background-position：背景图片可以距离容器实现任意偏移量</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">background: rgba(255, 255, 255, 0.5) url(http://t1.aixinxi.net/o_1crk3n0l61dkr1clj1225185a6eta.jpg-w.jpg) no-repeat center <span class="tag">bottom 2px</span>/30%;</div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">background-position在关键字后面可以指定偏移量</p>
      <p class="style-title">附</p>
      <p class="style-text">background-origin也可以实现这个功能</p>
      <p class="style-text">background-origin: content-box; 背景图像相对于内容框定位</p>
      <p class="style-text">background-origin: padding-box; 背景图像相对于内边距框定位(默认)</p>
      <p class="style-text">background-origin: border-box; 背景图像相对于边框盒定位</p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";
.style-view {
  width: 80%;
  height: 80%;
  display: inline-block;
  background: rgba(255, 255, 255, 0.5) url(http://t1.aixinxi.net/o_1crk3n0l61dkr1clj1225185a6eta.jpg-w.jpg) no-repeat center bottom 2px/30%;
}
</style>
