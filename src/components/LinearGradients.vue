<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">图像边框</p>
        <p class="style-text">linear-gradient</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view-letter">信封边框</div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text">background: <span class="tag">linear-gradient(white, white) padding-box, </span>repeating-linear-gradient(-45deg, rgba(111, 215, 0, .8) 0, rgba(111, 215, 0, .8) 25%, rgba(111, 215, 0, .4) 0, rgba(111, 215, 0, .4) 50%) 0 0 / 20px 20px;</div>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">原理是在原本的条纹背景上面通过linear-gradient铺一层内置背景</p>
    </el-card>
    <el-card>
      <div slot="header">
        <p class="style-title">图像边框</p>
        <p class="style-text"></p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view">蚂蚁行军边框</div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text"><span class="tag">@keyframes ants { to { background-position: 100%; } }</span>;</div>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">原理是同上，调整距离然后加入动画。这里巧妙的用background-position的改变模拟动画。</p>
      <p class="style-title">附</p>
      <p class="style-text">background的绘制顺序是从后面的开始向前面的绘制的</p>
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

.style-view-letter {
  padding: 40px;
  border: 10px solid transparent;
  background: linear-gradient(white, white) padding-box,
              repeating-linear-gradient(-45deg, rgba(111, 215, 0, .8) 0, rgba(111, 215, 0, .8) 25%, rgba(111, 215, 0, .4) 0, rgba(111, 215, 0, .4) 50%) 0 0 / 20px 20px;
}
@keyframes ants {
  to {
    background-position: 100%;
  }
}
.style-view {
  padding: 40px;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
              repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 / 5px 5px;
  animation: ants 12s linear infinite;
}
</style>
