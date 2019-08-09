<template>
  <div class="container">
    <Title>STEP2. 填寫付款資訊</Title>
    <span>信用卡/金融卡</span>
    <div class="form">
      <div class="group pay-limit">
        <label for="once">
          <input type="radio"
            name="pay-limit"
            value="once"
            v-model="payLimit"
            id="once">
          <span>一次付款</span>
        </label>
        <label for="seperate">
          <input type="radio"
            name="pay-limit"
            value="seperate"
            v-model="payLimit"
            id="seperate">
          <span>分期付款</span>
        </label>
        <div class="error-no-select"
          v-if="payLimitHasError">沒有選擇付款期限</div>
      </div>
      <div class="group">
        <label class="title">信用卡卡號：</label>
        <div class="card-input-wrap">
          <div class="creditcard-input">
            <input type="number"
              :error="cardNumHasError"
              min="0"
              max="9999"
              @blur="cardBlurCheck(0)"
              v-model="inputValue[0]"
              @focus="$ref => $ref.target.select()"
              @input="num => onInput(1)()"
              ref="col-1"
              class="card-ele">
            <span>-</span>
            <input type="number"
              :error="cardNumHasError"
              min="0"
              max="9999"
              @blur="cardBlurCheck(1)"
              v-model="inputValue[1]"
              @focus="$ref => $ref.target.select()"
              @input="num => onInput(2)()"
              ref="col-2"
              class="card-ele">
            <span>-</span>
            <input type="number"
              :error="cardNumHasError"
              min="0"
              max="9999"
              @blur="cardBlurCheck(2)"
              v-model="inputValue[2]"
              @focus="$ref => $ref.target.select()"
              @input="num => onInput(3)()"
              ref="col-3"
              class="card-ele">
            <span>-</span>
            <input type="number"
              :error="cardNumHasError"
              min="0"
              max="9999"
              @blur="cardBlurCheck(3)"
              ref="col-4"
              v-model="inputValue[3]"
              @focus="$ref => $ref.target.select()"
              @input="num => onInput(4)()"
              class="card-ele">
          </div>
          <div class="card-is">
            <img src="@/assets/visa.svg"
              v-if="(cardIs === 'none' || cardIs !== 'visa')"
              alt="">
            <img src="@/assets/visa-green.svg"
              v-if="cardIs === 'visa'"
              alt="">
            <img src="@/assets/mastercard.svg"
              v-if="(cardIs === 'none' || cardIs !== 'master')"
              alt="">
            <img src="@/assets/mastercard-green.svg"
              v-if="cardIs === 'master'"
              alt="">
            <img src="@/assets/jcb.svg"
              v-if="(cardIs === 'none' || cardIs !== 'jcb')"
              alt="">
            <img src="@/assets/jcb-green.svg"
              v-if="cardIs === 'jcb'"
              alt="">
          </div>
        </div>
        <div class="error-no-card-number"
          v-if="cardNumHasError">
          非法信用卡卡號
        </div>
      </div>
      <div class="group date">
        <label for="date-valid">有效年月：</label><br>
        <select name=""
          @blur="monthCheck"
          :error="validMonthHasError"
          v-model="monthInput"
          id="date-valid">
          <option :value="-1"
            disabled>請選擇</option>
          <option v-for="(month, i) in monthOptions"
            :value="month"
            :key="i">{{month}}</option>
        </select>
        <span>/</span>
        <select name=""
          :error="validYearHasError"
          @blur="yearCheck"
          v-model="yearInput"
          id="">
          <option :value="-1"
            disabled>請選擇</option>
          <option v-for="(year, i) in yearOptions"
            :value="year"
            :key="i">{{year}}</option>
        </select>
        <div class="error-date"
          v-if="validYearHasError || validMonthHasError">
          沒有輸入有效年月
        </div>
      </div>
      <div class="group">
        <label for="security-code">背面末三碼：</label><br>
        <input type="number"
          class="three"
          v-model="securityCode"
          name=""
          @blur="secureityCodeCheck"
          :error="securityCodeHasError"
          id="security-code">
        <img width="35"
          height="25"
          src="@/assets/back-three.svg"
          alt="">
        <div class="error-security-code"
          v-if="securityCodeHasError">安全碼錯誤</div>
      </div>
      <div class="group">
        <label for="email">填寫付款人信箱 :</label><br>
        <input type="email"
          name=""
          @blur="emailCheck"
          v-model="email"
          :error="emailHasError"
          id="email">
        <div class="error-email"
          v-if="emailHasError">沒有輸入email</div>
      </div>
      <div class="group no-wrap">
        <div>
          <input type="checkbox"
            v-model="contractConfirm"
            name=""
            id="">
        </div>
        <div class="word-wrap" @click="contractConfirm = !contractConfirm">
          <div>請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱</div>
          <div class="hint">第三方支付金流平台服務條款</div>
        </div>
      </div>
    </div>
    <button class="back"
      @click="() => $router.go(-1)">上一步</button>
    <button class="confirm"
      :disabled="!contractConfirm"
      @click="() => onConfirmClick() && $router.push('/finish')">確認付款</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Title from '@/components/PageTitle.vue'
const range = (length: number, start = 0) => Array.from({ length }, (_, i) => i + start)
@Component({
  components: {
    Title
  }
})
export default class CreditCardPaymentProcess extends Vue {
  private payLimit = 'once'
  private inputValue = ['', '', '', '']
  private monthOptions = range(12, 1)
  private yearOptions = range(12, new Date().getFullYear() - 6)
  private yearInput = -1
  private monthInput = -1
  private securityCode = ''
  private email = ''
  private contractConfirm = false

  private payLimitHasError = false
  private cardNumHasError = false
  private validMonthHasError = false
  private validYearHasError = false
  private securityCodeHasError = false
  private emailHasError = false

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
        this.cardNumIsValid()
      }
    }
  }
  get cardIs () {
    if (this.inputValue[0].length < 4) return 'none'
    if (this.inputValue[0].startsWith('4')) return 'visa'
    if (+(this.inputValue[0].slice(0, 2)) <= 55 && +(this.inputValue[0].slice(0, 2)) >= 51) return 'master'
    if (this.inputValue[0] === '1800' || this.inputValue[0] === '2131' || (+(this.inputValue[0].slice(0, 3)) >= 300 && +(this.inputValue[0].slice(0, 3)) < 400)) {
      return 'jcb'
    }
    return 'none'
  }
  cardNumIsValid () {
    this.cardNumHasError = !this.inputValue.every(e => e.length === 4)
  }
  cardBlurCheck (index = 0) {
    this.cardNumHasError = this.inputValue[index].length !== 4
  }

  yearCheck () {
    this.validYearHasError = this.yearInput === -1
  }

  monthCheck () {
    this.validMonthHasError = this.monthInput === -1
  }

  secureityCodeCheck () {
    this.securityCodeHasError = this.securityCode.length !== 3
  }

  emailCheck () {
    this.emailHasError = !/.+@.+\..+/.test(this.email)
  }

  onConfirmClick () {
    this.cardNumIsValid()
    this.yearCheck()
    this.monthCheck()
    this.secureityCodeCheck()
    this.emailCheck()
    if (this.cardNumHasError || this.validYearHasError || this.validMonthHasError || this.securityCodeHasError || this.emailHasError) {
      return false
    } else {
      return true
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
  img
    vertical-align middle
  .card-input-wrap
    margin-top 10px
    display flex
    flex-wrap nowrap
    justify-content flex-start
    align-items center
    input
      margin-top 0
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
  font-size 14px
.card-is
  display flex
  justify-content center
  align-items center
  margin-left 21px
  img
    width 41.4px
    height 25px
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
@media (max-width: 768px)
  .container
    padding-left 32px
    padding-right 32px
    .group
      margin-bottom 15px
      margin-top 15px
      &.no-wrap
        margin-bottom 50px
      .card-input-wrap
        flex-direction column
        align-items flex-start
        .card-is
          display none
        .creditcard-input
          margin-bottom 10px
        input
          &.card-ele
            width 16vw
          &:not(:first-of-type)
            margin-left 5px
          &:not(:last-of-type)
            margin-right 5px
      &.date
        select
          width 120px
</style>
