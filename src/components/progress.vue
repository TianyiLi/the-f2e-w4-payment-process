<template>
  <div class="wrap"
    :class="roundClass">
    <div class="linear-line"></div>
    <div class="first-round">1</div>
    <div class="second-round">2</div>
    <div class="third-round">3</div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class Progress extends Vue {
  @Prop() step !: string

  get roundClass () {
    return this.step
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  position relative
  width 306px
  margin 40px auto
  display flex
  justify-content space-between
  align-items center
  display inline-flex
  &>[class$='round']
    position relative
    width 40px
    height 40px
    text-align center
    line-height 40px
    flex-shrink 0
    border-radius 50%
    color white
  .first-round
    background #8DEFCB
  &.step1
    .second-round
      background #D8D8D8
    .third-round
      background-color #afafaf
    .linear-line
      background-image linear-gradient(to left, #d8d8d8 80%, #8defcb 100%)
  .linear-line
    height 3px
    width calc(100% - 40px)
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
  &.step2
    .second-round
      background-color #8DEFCB
    .third-round
      background #AFAFAF
    .linear-line
      background-image linear-gradient(to left, #d8d8d8 50%, #8defcb 100%)
  &.step3
    .second-round, .third-round, .linear-line
      background-color #8DEFCB

</style>
