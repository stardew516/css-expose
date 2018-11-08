<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">半透明边框</p>
        <p class="style-text">background-clip: 背景的绘制区域</p>
        <p class="style-text">background-clip: border-box(背景被裁剪到边框盒)</p>
        <p class="style-text">background-clip: padding-box(背景被裁剪到内边距框)</p>
        <p class="style-text">background-clip: content-box(背景被裁剪到内容框)</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">border: 10px solid rgba(255, 255, 255, 0.5);</div>
        <div class="style-text">background: $white;</div>
        <div class="style-text">background-clip:<span class="tag"> padding-box</span>;</div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">这个样式在chrome下不稳定</p>
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
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border: 10px solid rgba(255, 255, 255, 0.5);
  background: $white;
  background-clip: padding-box;
}
</style>
