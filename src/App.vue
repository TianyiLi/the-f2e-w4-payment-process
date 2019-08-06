<template>
  <div id="app">
    <div class="left-side">
      <div class="mbl-btn">訂單資訊</div>
      <div class="finish">
        <span class="up-line"></span>
        <span>Finish</span>
        <span class="bottom-line"></span>
      </div>
      <div class="side-list">
        <div class="title">訂單資訊</div>
        <div>
          <div class="sub-title">商品名稱：</div>
          <div class="content">Iphone XR手機殼 x1</div>
        </div>
        <div>
          <div class="sub-title">訂單編號：</div>
          <div class="content">17485739</div>
        </div>
        <div>
          <div class="sub-title">訂單金額：</div>
          <div class="content">NT$ 600</div>
        </div>
      </div>
      <button class="back"
        @click.stop="$router.push('/')">返回商店</button>
    </div>
    <div class="main-page">
      <step-progress :step="'step' + step"></step-progress>
        <router-view class="main-ctn" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import progress from '@/components/progress.vue'
import { Step } from './store'
@Component({
  components: {
    'step-progress': progress
  }
})
export default class App extends Vue {
  @State('step') step !: Step
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Roboto&display=swap')
html, body
  margin 0
  padding 0
  width 100%
  height 100%
#app
  width 100%
  height 100%
  display flex
  justify-content center
  align-items flex-start
  &:before
    content ''
    width 100vw
    height 22.5vh
    position fixed
    bottom 0
    background-image url('~@/assets/footer-background.svg')
    z-index -1
    background-size 70px
    background-color #defff2
.mbl-btn, .finish
  display none
.left-side
  display inline-block
  width 234px
  .back
    background-color #4b4b4b
    border-radius 5px
    text-align center
    height 40px
    width 89px
    margin-top 24px
    color white
    font-size 14px
    font-weight 700
    border none
  .side-list
    margin-top 120px
    background-color #f3f3f3
    border-radius 10px 0 0 10px
    width 100%
    box-sizing border-box
    padding 24px 0 35px 26px
    display flex
    justify-content space-between
    flex-direction column
    align-items flex-start
    font-family 'Noto Sans TC'
    .title
      font-size 18px
      font-weight 700
      color #000000
      letter-spacing 1.88px
    .sub-title
      font-weight 700
      font-size 16px
      color #5E5E5E
      letter-spacing 1.67px
      line-height 24px
    .content
      font-size 16px
      color #000000
      letter-spacing 1.67px
      line-height 24px
.main-page
  width 628px
  display inline-block
  text-align center
  .main-ctn
    width 100%
    box-sizing border-box
    padding-top 38px
    min-height calc(100vh - 120px)
    background #FFFFFF
    box-shadow 0 2px 13px 0 rgba(0, 0, 0, 0.08)
    border-radius 0 10px 0 0
.error
  position relative
  input
    border-color #e10000!important
  &:after
    content '輸入訊息錯誤'
    position absolute
    color #e10000
    top calc(100% + 5px)
    font-size 12px
    left 0
</style>
