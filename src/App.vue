<template>
  <div id="app">
    <div class="left-side"
      v-if="!isFinish"
      @click="() => sidebarActive = !sidebarActive"
      :class="sidebarActive ? 'is-active' : ''">
      <div class="mbl-btn">訂單資訊</div>
      <transition name="slide">
        <div class="finish"
          v-if="isFinish">
          <span class="up-line"></span>
          <span class="text">Finish</span>
          <span class="bottom-line"></span>
        </div>
      </transition>
      <div class="side-list"
        :class="isFinish ? 'on-finish' : '' ">
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
      <button class="back-to-shop"
        v-show="!isFinish"
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
import { State, Action } from 'vuex-class'
import progress from '@/components/progress.vue'
import { Step } from './store'
@Component({
  components: {
    'step-progress': progress
  }
})
export default class App extends Vue {
  @State('step') step !: Step
  @Action('stepTo') stepTo !: Function
  private sidebarActive = false
  mounted () {
    this.stepTo(Step.Select)
  }
  get isFinish () {
    return this.step === Step.Finish
  }
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
.mbl-btn
  display none
.left-side
  display inline-block
  width 234px
  margin-top 120px
  font-family 'Noto Sans TC'
  position relative
  .back-to-shop
    background-color #4b4b4b
    border-radius 5px
    text-align center
    height 40px
    margin-top 24px
    color white
    font-size 14px
    font-weight 700
    border none
  .finish
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items flex-end
    padding-right 50px
    font-weight bold
    box-sizing border-box
    .text
      font-size 20px
    .up-line, .bottom-line
      height 2px
      width 14px
      background-color #000
    .up-line
      margin-bottom 17px
      transform rotate(45deg)
    .bottom-line
      margin-top 17px
      transform rotate(-45deg)
  .side-list
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
    transition-delay 0.5s
    transition 0.5s
    &.on-finish
      transition-delay 0
      z-index -1
      transform translateX(214px)
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
  z-index 1
  .main-ctn
    width 100%
    box-sizing border-box
    padding-top 38px
    height calc(100vh - 120px)
    background #FFFFFF
    box-shadow 0 2px 13px 0 rgba(0, 0, 0, 0.08)
    border-radius 0 10px 0 0
.group
  text-align left
  margin-bottom 30px
  select, input[type='text'], input[type='email'], input[type=number]
    width 235px
    height 34px
    border-radius 5px
    border 1px solid #979797
    color #979797
    margin-top 10px
    &.after-input
      color black
  ol
    padding-left 16px
    margin-top 19px
    font-size 14px
    li
      margin-top 5px
      line-height 30px
button
  border-radius 5px
  padding 10px 18px
  border unset
  cursor pointer
  &.back
    float left
    background-color #D5F5E9
  &.confirm
    background-color #36B996
    color white
    float right
    &[disabled='disabled']
      background-color rgba(#36b996, 0.7)
.slide-enter-active
  transition 0.5s
  transition-delay 0.3s
.slide-leave-active
  transition 0.5s
.slide-enter, .slide-leave-to
  transform translateX(200)
  opacity 0
[class^='error']
  position absolute
  font-size 12px
  color red
input, select
  &[error='true']
    border-color #e10000 !important
@media (max-width: 767px)
  .app
    position relative
    width 100vw
    overflow-x hidden
  .left-side
    position fixed
    margin-top 60px
    left 0
    z-index 5
    transition 0.2s
    transform translateX(calc(-100%))
    .side-list
      box-shadow unset
    &.is-active
      transform translateX(0)
      .side-list
        box-shadow 0px 2px 13px 0 rgba(0, 0, 0, 0.8)
      .mbl-btn
        box-shadow 5px 2px 5px 0 rgba(0, 0, 0, 0.8)
    .side-list
      border-radius 0 0px 10px 0
    .mbl-btn
      box-shadow 0px 2px 5px 0 rgba(0, 0, 0, 0.8)
      background-color #f3f3f3
      padding 0.5em
      border-radius 0 10px 10px 0
      position absolute
      display inline-block
      left 100%
      top 0
      width 16px
    .back-to-shop
      display none
  .main-page
    width 100vw
    margin 0 auto
    margin-bottom 22.5vh
    .main-ctn
      height auto
      display inline-block
      padding-bottom 50px !important
      select, input[type='text'], input[type='email']
        width 100%
</style>
