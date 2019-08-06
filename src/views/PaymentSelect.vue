<template>
  <div class="container"
    @click.stop="mainPayment = ''">
    <Title>STEP1. 選擇付款方式</Title>
    <div class="select-wrap">
      <Card v-for="(pm, i) in pms"
        @click.native.stop="cardOnClick(pm.card)"
        :class="mainPayment === pm.card ? 'active' : ''"
        :key="i"
        :card="pm.card"></Card>
    </div>
    <button class="next"
      @click.prevent="routerTo"
      :disabled="mainPayment === ''">下一步</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/PaymentWrapper.vue'
import Title from '@/components/PageTitle.vue'
import { Action, State } from 'vuex-class'
import { Payment } from '../store'

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
  private mainPayment = ''

  @State('payment') payment!: Payment
  @Action('setPayment') setPayment!: (payment: Payment) => void
  @Action('setMainPayment') setMainPayment!: (mp: string) => void

  cardOnClick (card: string) {
    if (~['unionPay', 'creditcard'].indexOf(card)) {
      this.setPayment(Payment.CreditCard)
    } else if (card === 'shop') {
      this.setPayment(Payment.Shop)
    } else {
      this.setPayment(Payment.WebATM)
    }
    this.setMainPayment(card)
    this.mainPayment = card
  }
  routerTo () {
    if (this.payment === Payment.CreditCard) {
      this.$router.push({ name: 'creditcard' })
    } else if (this.payment === Payment.Shop) {
      this.$router.push({ name: 'web-atm' })
    } else {
      this.$router.push({ name: 'shop' })
    }
  }
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
  &[disabled='disabled']
    background-color rgba(#36b996, 0.7)
</style>
