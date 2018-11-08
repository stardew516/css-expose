<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">多重边框</p>
        <p class="style-text">box-shadow：支持逗号分隔语法，可以创建任意数量的投影</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">box-shadow: 0 0 0 10px #ebb773,
              <span class="tag">0 0 0 20px rgba(235, 173, 102, 0.8)</span>,
              <span class="tag">0 0 0 30px rgba(228, 172, 95, 0.6)</span>,
             <span class="tag"> 0 0 0 40px rgba(237, 108, 2, 0.4)</span>,
              <span class="tag">0 0 0 50px rgba(230, 77, 14, 0.2)</span>;</div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">box-shadow支持多重投影，且可以使用rgba添加透明度</p>
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
  border-radius: 50%;
  margin: 50px auto;
  // background: $warn;
  box-shadow: 0 0 0 10px #ebb773,
              0 0 0 20px rgba(235, 173, 102, 0.8),
              0 0 0 30px rgba(228, 172, 95, 0.6),
              0 0 0 40px rgba(237, 108, 2, 0.4),
              0 0 0 50px rgba(230, 77, 14, 0.2);
}
</style>
