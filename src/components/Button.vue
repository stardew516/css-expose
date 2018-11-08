<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <p class="style-title">糖果按钮</p>
        <p class="style-text">border-radius</p>
      </div>
      <p class="style-title">效果</p>
      <div class="style-result">
        <div class="style-view">
          <a class="button candy" data-icon="ღ">love</a>
        </div>
      </div>
      <p class="style-title">css 代码</p>
      <div class="style-code">
        <div class="style-text">
          <div class="style-text"><span class="tag"></span></div>
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
// http://simurai.com/archive/buttons/#
.style-view {
  width: 80%;
  height: 90%;
  padding: 10px;
}
.button {
  text-decoration: none;
  font: bold 24px/1em 'Droid Sans', sans-serif;
  text-shadow: rgba(255,255,255,.5) 0 1px 0;
  user-select: none;
  padding: .5em;
  display: inline-block;
  position: relative;
  border-radius: 8px;
  border-top: 1px solid rgba(255,255,255,0.8);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-image: gradient(radial, 50% 0, 100, 50% 0, 0, from( rgba(255,255,255,0) ), to( rgba(255,255,255,0.7) ));
  transition: background .2s ease-in-out;
  color: #666 !important;
  background-color: #bfbfbf;
  box-shadow: inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ hsl(0, 0%, 60%) 0 .1em 3px, hsl(0, 0%, 45%) 0 .3em 1px, /* color border */ rgba(0,0,0,0.2) 0 .5em 5px;
  &:before {
    content: attr(data-icon);
    font: 1.2em/0 sans-serif;
    margin-right: 5px;
  }
  &:after {
    border-radius: 1rem;
  }
  &:focus {
    outline: none;
    color: rgba(254, 255, 255, 0.9) !important;
    text-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px;
  }
  &:hover {
    background: #d4d4d4;
  }
  &:active {
    background-image: gradient(radial, 50% 0, 100, 50% 0, 0, from( rgba(255, 255, 255, 0) ), to( rgba(255, 255, 255, 0) ));
    box-shadow: inset rgba(255, 255, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.2) 0 -0.1em .3em, /* inner shadow */ rgba(0, 0, 0, 0.4) 0 .1em 1px, /* border */ rgba(0, 0, 0, 0.2) 0 .2em 6px;
    transform: translateY(.2em);
  }
}
.candy {
  background: #8fcbff;
  color: #336999;
  text-shadow: 0px 1px 1px #508217;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background: #a8d7ff;
  }
}
</style>
