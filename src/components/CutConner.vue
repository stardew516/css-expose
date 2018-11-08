<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">切角</p>
        <p class="style-text">linear-gradient: (旋转角度, 填充色 填充位移, 填充色 填充位移...)</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <span class="tag">linear-gradient(135deg, transparent 15px, #ffffff 0) top left</span><br>
          <span class="tag">linear-gradient(225deg, transparent 5px, #ffffff 0) top right</span><br>
          <span class="tag">linear-gradient(-45deg, transparent 15px, #ffffff 0) bottom right</span><br>
          <span class="tag">linear-gradient(45deg, transparent 5px, #ffffff 0) bottom left</span>
        </div>
      </div>
      <div class="style-result">
        <div class="style-view-colors"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <span class="tag">linear-gradient(135deg, transparent 15px, #735a54 0) top left</span><br>
          <span class="tag">linear-gradient(225deg, transparent 5px, #ffffff 0) top right</span><br>
          <span class="tag">linear-gradient(-45deg, transparent 15px, #6fbbf9 0) bottom right</span><br>
          <span class="tag">linear-gradient(45deg, transparent 5px, #b6d3f3 0) bottom left</span>
        </div>
      </div>
      <div class="style-result">
        <div class="style-view-radius"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <span class="tag">radial-gradient(circle at top left, transparent 15px, #ffffff 0) top left</span><br>
          <span class="tag">radial-gradient(circle at top right, #ffffff 0) top right</span><br>
          <span class="tag">radial-gradient(circle at bottom right, #ffffff 0) bottom right</span><br>
          <span class="tag">radial-gradient(circle at bottom left, #ffffff 0) bottom left</span>
        </div>
      </div>
      <div class="style-result">
        <div class="style-view-radius-colors"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <span class="tag">radial-gradient(circle at top left, transparent 15px, #735a54 0) top left</span><br>
          <span class="tag">radial-gradient(circle at top right, #ffffff 0) top right</span><br>
          <span class="tag">radial-gradient(circle at bottom right, #6fbbf9 0) bottom right</span><br>
          <span class="tag">radial-gradient(circle at bottom left, #b6d3f3 0) bottom left</span>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">切角的原理：四块个色块合并而成，每块由一个纯色和透明色填充，然后分别旋转，最后缩放成上下左右各50%得到。</p>
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
  @include clip-corners(#ffffff, 15px, 5px);
}
.style-view-colors {
  width: 80%;
  height: 80%;
  @include clip-corners-colors(#735a54, #ffffff, #6fbbf9, #b6d3f3, 15px, 5px);
}
.style-view-radius {
  width: 80%;
  height: 80%;
  @include clip-corners-radius(#ffffff, 15px, 5px);
}
.style-view-radius-colors {
  width: 80%;
  height: 80%;
  @include clip-corners-radius-colors(#735a54, #ffffff, #6fbbf9, #b6d3f3, 15px, 5px);
}
</style>
