<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">梯形</p>
        <p class="style-text">perspective：3D 元素距视图的距离</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text">
            <span class="tag">transform: scaleY(1.3) perspective(.3em) rotateX(5deg);</span>
            </div>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">3d变换所得</p>
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
  transform: scaleY(1.3) perspective(.3em) rotateX(5deg);
  transform-origin: bottom;
  transition: all .4s ease;
  background: url(http://t1.aixinxi.net/o_1crk3n0l61dkr1clj1225185a6eta.jpg-w.jpg) no-repeat center center / 100% 100%;
  &:hover {
    transform: scaleY(1);
  }
}
</style>
