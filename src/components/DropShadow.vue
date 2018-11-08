<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">投影</p>
        <p class="style-text">drop-shadow：(水平阴影，垂直阴影，模糊距离， 负的扩张半径, 投影颜色，内侧外侧投影)</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text">
            <span class="tag">drop-shadow(0 0 0 rgba(0, 0, 0, .5))</span>
            </div>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text"><p>修改颜色：<input type="color"></p>
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
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, .5));
  &:hover {
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, .5));
  }
}
</style>
