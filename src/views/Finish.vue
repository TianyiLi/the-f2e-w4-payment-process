<template>
  <div class="container">
    <Title>您的訂單已完成付款！</Title>
    <div class="img-wrapper">
      <img src="@/assets/finish.svg"
        alt="">
    </div>
    <div class="row hint">
      稍後將寄送訂單詳細資訊至您的E-mail
    </div>
    <button class="confirm" @click="$router.push({name: 'select'})">返回首頁</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Title from '@/components/PageTitle.vue'
import { Action } from 'vuex-class'
import { Step } from '../store'

@Component({
  components: {
    Title
  }
})
export default class Finish extends Vue {
  @Action('stepTo') stepTo!: Function
  mounted () {
    this.stepTo(Step.Finish)
  }
}
</script>
<style lang="stylus" scoped>
.container
  text-align center
  font-family 'Noto Sans TC'
.img-wrapper
  margin-top 84px
  display inline-block
  height 146px
  width 146px
  border-radius 50%
  background-color #B5FFE4
  opacity 0
  animation slideup 1s ease 0.2s forwards
  @keyframes slideup
    from
      transform translateY(100px)
      opacity 0
    to
      transform translateY(0)
      opacity 1
.hint
  margin-top 64px
button
  margin-top 30px
  float unset
</style>
