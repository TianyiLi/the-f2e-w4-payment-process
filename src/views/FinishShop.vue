<template>
  <div class="container">
    <Title>您的訂單已成立！</Title>
    <div class="group first">
      <div class="title">
        付款超商 :
      </div>
      <h2>
        {{shop}}
      </h2>
    </div>
    <div class="group">
      <div class="title">
        付款代碼 :
      </div>
      <h2>
        HSD6DSK2349
      </h2>
    </div>
    <div class="group">
      <div class="title">
        付款期限 :
      </div>
      <h2>
        2019-08-08 23:59:59
      </h2>
    </div>
    <div class="hint">
      * 請至您選擇之超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。
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
  private shop !: string
  created () {
    if (this.$route.query && typeof this.$route.query.shop === 'string') {
      this.shop = this.$route.query.shop
    }
  }
  mounted () {
    this.stepTo(Step.Finish)
  }
}
</script>
<style lang="stylus" scoped>
.container
  text-align center
  font-family 'Noto Sans TC'
  padding 0 68px
  padding-top 38px
  .group.first
    margin-top 61px
.hint
  margin-top 39px
  font-family 'Noto Sans TC'
  font-weight bold
  font-size 14px
  float left
button
  margin-top 66px
  float right
h2
  margin-top 6px
@media (max-width: 768px)
  .container
    .group
      margin-bottom 15px
      &.first
        margin-top 30px
</style>
