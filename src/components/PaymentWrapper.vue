<template>
  <div class="card">
    <component class="img-wrapper"
      :is="card"
      :[card]="card==='unionPay'"></component>
    <div class="text">{{card | text}}</div>
  </div>
</template>
<script>
import creditcard from './svg/credit-card'
import unionPay from './svg/union-pay'
import shop from './svg/shop'
import webAtm from './svg/web-atm'
import atm from './svg/atm'
export default {
  props: ['card'],
  components: {
    creditcard,
    unionPay,
    shop,
    webAtm,
    atm
  },
  filters: {
    text (value) {
      const pm = {
        creditcard: '信用卡',
        unionPay: '銀聯卡',
        shop: '超商付款',
        webAtm: 'Web ATM',
        atm: 'ATM 轉賬'
      }
      return pm[value]
    }
  }
}
</script>
<style lang="stylus" scoped>
.card
  display inline-block
  width 161px
  height 139px
  text-align center
  transition all 0.3s
  background #F7F7F7
  border-radius 5px
  &:hover
    color white
    background-color rgba(#36b996, 0.7)
    .img-wrapper
      fill white
    .text
      color #fff
  .img-wrapper
    height 53px
    width auto
    margin-top 32px
    transition 0.2s
    fill #4b4b4b
    &[unionPay='true'] .st2
      fill #4b4b4b
  .text
    margin-top 10px
    font-family 'Noto Sans TC'
    font-weight 400
    font-size 14px
    color #000000
    letter-spacing 1.46px
.card.active
  background-color #36b996
  .img-wrapper
    fill #fff
  .text
    color white
</style>
