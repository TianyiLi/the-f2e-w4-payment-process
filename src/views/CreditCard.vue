<template>
  <div class="container">
    <Title>STEP2. 填寫付款資訊</Title>
    <span>信用卡/金融卡</span>
    <div class="form">
      <div class="group pay-limit">
        <label for="once">
          <input type="radio"
            name="pay-limit"
            id="once">
          <span>一次付款</span>
        </label>
        <label for="seperate">
          <input type="radio"
            name="pay-limit"
            id="seperate">
          <span>分期付款</span>
        </label>
      </div>
      <div class="group">
        <label class="title">信用卡卡號：</label>
        <div class="creditcard-input">
          <input type="number"
            min="0"
            max="9999"
            v-model="inputValue[0]"
            @input="num => onInput(1)()"
            ref="col-1"
            class="card-ele">
          <span>-</span>
          <input type="number"
            min="0"
            max="9999"
            v-model="inputValue[1]"
            @input="num => onInput(2)()"
            ref="col-2"
            class="card-ele">
          <span>-</span>
          <input type="number"
            min="0"
            max="9999"
            v-model="inputValue[2]"
            @input="num => onInput(3)()"
            ref="col-3"
            class="card-ele">
          <span>-</span>
          <input type="number"
            min="0"
            max="9999"
            ref="col-4"
            v-model="inputValue[3]"
            @input="num => onInput(4)()"
            class="card-ele">
        </div>
        <div class="card-is"></div>
      </div>
      <div class="group">
        <label for="date-valid">有效年月：</label><br>
        <select name=""
          id=""></select>
        <span>/</span>
        <select name=""
          id=""></select>
      </div>
      <div class="group">
        <label for="security-code">背面末三碼：</label><br>
        <input type="number"
          class="three"
          name=""
          id="security-code">
      </div>
      <div class="group">
        <label for="email">填寫付款人信箱 :</label><br>
        <input type="email"
          name=""
          id="email">
      </div>
      <div class="group no-wrap">
        <div>
          <input type="checkbox"
            name=""
            id="">
        </div>
        <div class="word-wrap">
          <div>請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱</div>
          <div class="hint">第三方支付金流平台服務條款</div>
        </div>
      </div>
    </div>
    <button class="back">上一步</button>
    <button class="confirm">確認付款</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Title from '@/components/PageTitle.vue'

@Component({
  components: {
    Title
  }
})
export default class CreditCardPaymentProcess extends Vue {
  private inputValue = ['', '', '', '']
  onInput (col: number) {
    return () => {
      let num: any = this.$refs['col-' + col]
      num = num.value
      console.log(num)
      if (col !== 4 && ('' + num).length === 4) {
        let ref: any = this.$refs['col-' + (col + 1)]
        ref.focus()
      } else if (col === 4 && this.inputValue[col - 1].length > 4) {
        this.inputValue[col - 1] = this.inputValue[col - 1].substring(0, 4)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  padding 0 68px
  padding-top 38px
  box-sizing border-box
  font-family 'Noto Sans TC'
label
  margin-right 30px
.no-wrap
  display flex
.group
  margin-top 30px
input[type=number], input[type=text]
  height 34px
select
  width 61px
  &:first-of-type
    margin-right 10px
  &:last-of-type
    margin-left 10px
input[type=number]
  text-align center
  color #000
  &.card-ele
    &:not(:first-of-type)
      margin-left 10px
    &:not(:last-of-type)
      margin-right 10px
    width 61px
  &.three
    width 93px
label
  font-size 1px
input[type=radio]
  appearance none
  display inline-block
  position relative
  box-sizing border-box
  margin 0
  margin-right 5px
  vertical-align middle
  background-color transparent
  border solid 2px #979797
  width 16px
  height 16px
  border-radius 50%
  &:hover
    opacity 0.8
  &:checked
    border-color #979797
    &:after
      content ''
      position absolute
      border-radius 50%
      background-color #41C897
      width 10px
      height 10px
      top 50%
      left 50%
      transform translate(-50%, -50%)
</style>
