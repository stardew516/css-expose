<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">路径裁剪</p>
        <p class="style-text">clip-path进行裁剪</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text"><span class="tag">clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);</span></div>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">polygon裁剪的多边形，括号内为坐标</p>
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
  background: url(http://t1.aixinxi.net/o_1crk3n0l61dkr1clj1225185a6eta.jpg-w.jpg) no-repeat center center/ auto 100%;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transition: 1s clip-path;
}
.style-view:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>
