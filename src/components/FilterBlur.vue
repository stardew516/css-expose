<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">毛玻璃效果</p>
        <p class="style-text">filter: blur(5px);</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view">
          <div class="style-text">
            <p>江南好，风景旧曾谙；日出江花红胜火，春来江水绿如蓝。能不忆江南？</p>
            <p>江南忆，最忆是杭州；山寺月中寻桂子，郡亭枕上看潮头。何日更重游！</p>
            <p>江南忆，其次忆吴宫；吴酒一杯春竹叶，吴娃双舞醉芙蓉。早晚复相逢！</p>
          </div>
        </div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text">
            <span class="tag">filter: blur(5px);</span>
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
  padding: 20px;
  width: 80%;
  height: 80%;
  transition: all .4s ease;
  position: relative;
  overflow: hidden;
  background: hsla(0, 0%, 100%, 0.3);
  .style-text {
    width: 100%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    padding: 20px;
  }
  p {
    padding-top: 20px;
    color: #333;
  }
  &:hover {
   p {
      color: #000;
    }
    &:before {
      filter: none;
    }
  }
  &:before {
    background: url(http://t1.aixinxi.net/o_1crk3n0l61dkr1clj1225185a6eta.jpg-w.jpg) no-repeat center center/ auto 100%;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(5px);
    margin: -30px;
  }
}
</style>
