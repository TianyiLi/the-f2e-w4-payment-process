<template>
  <div class="container">
    <Title>STEP1. 選擇付款方式</Title>
    <div class="select-wrap">
      <Card v-for="(pm, i) in pms"
        :key="i"
        :card="pm.card"></Card>
    </div>
    <button class="next">下一步</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/PaymentWrapper.vue'
import Title from '@/components/PageTitle.vue'

const types = Object.freeze(['creditcard',
  'unionPay',
  'shop',
  'webAtm',
  'atm'])

@Component({
  components: { Card, Title }
})
export default class PaymentSelect extends Vue {
  private pms = types.map((e, i) => ({ index: i, card: e }))
}
</script>
<style lang="stylus" scoped>
.select-wrap
  margin-top 85px
  .card
    margin 11px 7.5px
    cursor pointer
.next
  cursor pointer
  width 89px
  height 40px
  background-color #36b996
  border-radius 5px
  color white
  font-size 14px
  border 0
  float right
  margin 44px 61px auto auto
</style>
