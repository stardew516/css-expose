<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">饼状图</p>
        <p class="style-text">conic-gradient：锥形渐变</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text">
            <span class="tag">background: conic-gradient($danger 0, $danger 20%, $success 20%, $success 40%, $info 40%, $info 70%, $warn 70%, $warn 100%);</span>
            </div>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text">设置每个色块的起始位置与结束位置百分比，得到饼状图效果。</p>
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
  border-radius: 50%;
  background: conic-gradient($danger 0, $danger 20%, $success 20%, $success 40%, $info 40%, $info 70%, $warn 70%, $warn 100%);
}
</style>
