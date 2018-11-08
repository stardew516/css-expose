<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">背景尺寸</p>
        <p class="style-text">background-size：在 background 简写属性中指定 background-size 时，需要同时提供一个 background-position 值(哪怕它的值就是其初始值也需要写出来)，而且还要使 用一个斜杠(/)作为分隔。</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">background: url(http://t1.aixinxi.net/o_1crk3n0l61dkr1clj1225185a6eta.jpg-w.jpg) no-repeat top right<span class="tag"> / 50px 50px</span>;</div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">background-size可以直接跟在background后面，注意：需使用/隔开</p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'backgroundSize',
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
  border: 1px solid $border;
  background: url(http://t1.aixinxi.net/o_1crk3n0l61dkr1clj1225185a6eta.jpg-w.jpg) no-repeat top right / 50px 50px;
}
</style>
