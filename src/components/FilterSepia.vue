<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">染色效果</p>
        <p class="style-text">filter：(saturate: 转换图像饱和度, sepia: 将图像转换为深褐色, hue-rotate: 给图像应用色相旋转)</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text">
            <span class="tag">box-shadow: 0 6px 4px -4px black, 6px 0 4px -4px black;</span>
            </div>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text"></p>
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
  transition: all .4s ease;
  filter: sepia(1) saturate(4) hue-rotate(66deg);
  &:hover {
    filter: none;
  }
}
</style>
