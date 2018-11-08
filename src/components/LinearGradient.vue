<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">横向条纹</p>
        <p class="style-text">repeating-linear-gradient: 色标无限循环，直到填满整个背景</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view-row"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text">background: <span class="tag">repeating-linear-gradient( 0deg, rgba(111, 215, 0, .8) 0%, rgba(111, 215, 0, .8) 25%, rgba(111, 215, 0, .4) 0%, rgba(111, 215, 0, .4) 50%)</span>;</div>
          <div class="style-text">background-size: 45px 45px;</div>
        </div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text"></p>
    </el-card>
    <el-card>
      <div slot="header">
        <p class="style-title">竖向条纹</p>
        <p class="style-text"></p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view-col"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-text">
        <div class="style-text">background: <span class="tag">repeating-linear-gradient( 90deg, rgba(111, 215, 0, .8) 0%, rgba(111, 215, 0, .8) 25%, rgba(111, 215, 0, .4) 0%, rgba(111, 215, 0, .4) 50%)</span>;</div>
        <div class="style-text">background-size: 45px 45px;</div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text"></p>
    </el-card>
    <el-card>
      <div slot="header">
        <p class="style-title">倾斜条纹</p>
        <p class="style-text"></p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-text">
        <div class="style-text">background: <span class="tag">repeating-linear-gradient( 45deg, rgba(111, 215, 0, .8) 0%, rgba(111, 215, 0, .8) 25%, rgba(111, 215, 0, .4) 0%, rgba(111, 215, 0, .4) 50%)</span>;</div>
        <div class="style-text">background-size: 30px 30px;</div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text"><span class="tag"></span></div>
      </div>
      <p class="style-title">小结</p>
      <p class="style-text"></p>
    </el-card>
    <el-card>
      <div slot="header">
        <p class="style-title">复杂条纹</p>
        <p class="style-text"></p>
      </div>
      <p class="style-title">效果</p>
      <el-row>
        <el-col :span="4"><div class="style-text slide-text">旋转角度</div></el-col>
        <el-col :span="8"><el-slider v-model="offset1"></el-slider></el-col>
        <el-col :span="4"><div class="style-text slide-text">尺寸</div></el-col>
        <el-col :span="8"><el-slider v-model="offset6"></el-slider></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="style-text slide-text">第一个色块起始位置</div></el-col>
        <el-col :span="8"><el-slider v-model="offset2"></el-slider></el-col>
        <el-col :span="4"><div class="style-text slide-text">第一个色块结束位置</div></el-col>
        <el-col :span="8"><el-slider v-model="offset3"></el-slider></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="style-text slide-text">第二个色块的起始位置</div></el-col>
        <el-col :span="8"><el-slider v-model="offset4"></el-slider></el-col>
        <el-col :span="4"><div class="style-text slide-text">第二个色块的结束位置</div></el-col>
        <el-col :span="8"><el-slider v-model="offset5"></el-slider></el-col>
      </el-row>
      <div class="style-result">
        <div class="style-view-other" :style="{background: 'repeating-linear-gradient('+offset1+'deg, rgba(111, 215, 0, .8) '+offset2+'%, rgba(111, 215, 0, .8) '+offset3+'%, rgba(111, 215, 0, .4) '+offset4+'%, rgba(111, 215, 0, .4) '+offset5+'%)  0% 0% / '+offset6+'px '+offset6+'px'}"></div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">background: <span class="tag">repeating-linear-gradient( {{offset1}}deg, rgba(111, 215, 0, .8) {{offset2}}%, rgba(111, 215, 0, .8) {{offset3}}%, rgba(111, 215, 0, .4) {{offset4}}%, rgba(111, 215, 0, .4) {{offset5}}%)</span>;</div>
        <div class="style-text">background-size: {{offset6}}px {{offset6}}px;</div>
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
      offset1: 45,
      offset2: 0,
      offset3: 20,
      offset4: 0,
      offset5: 40,
      offset6: 30
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
.style-view-row {
  width: 80%;
  height: 80%;
  display: inline-block;
  background: repeating-linear-gradient(0deg,rgba(111, 215, 0, .8) 0, rgba(111, 215, 0, .8) 25%, rgba(111, 215, 0, .4) 0, rgba(111, 215, 0, .4) 50%);
  background-size: 45px 45px;
}
.style-view-col {
  width: 80%;
  height: 80%;
  display: inline-block;
  background: repeating-linear-gradient(90deg,rgba(111, 215, 0, .8) 0, rgba(111, 215, 0, .8) 25%, rgba(111, 215, 0, .4) 0, rgba(111, 215, 0, .4) 50%);
  background-size: 45px 45px;
}
.style-view-lean {
  width: 80%;
  height: 80%;
  display: inline-block;
  background: repeating-linear-gradient(45deg,rgba(111, 215, 0, .8) 0, rgba(111, 215, 0, .8) 25%, rgba(111, 215, 0, .4) 0, rgba(111, 215, 0, .4) 50%);
  background-size: 30px 30px;
}
.style-view-other {
  width: 80%;
  height: 80%;
  display: inline-block;
  background: repeating-linear-gradient(45deg,rgba(111, 215, 0, .8) 0, rgba(111, 215, 0, .8) 20%, rgba(111, 215, 0, .4) 0, rgba(111, 215, 0, .4) 40%);
  background-size: 30px 30px;
}
.slide-text {
  line-height: 38px;
  text-align: right;
  padding-right: 15px;
}
</style>
