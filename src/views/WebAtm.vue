<template>
  <div class="container">
    <Title :subtitle="'Web ATM'">STEP2. 填寫付款資訊</Title>
    <div class="form">
      <div class="group">
        <label for="bank">付款銀行:</label><br>
        <select name=""
          id="bank">
          <option value="-1"
            disabled>選擇</option>
        </select>
      </div>
      <div class="group">
        <ol>
          <li>請準備晶片經融卡 + 晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。</li>
          <li>持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程</li>
        </ol>
      </div>
    </div>
    <div class="group">
      <label for="email">填寫付款人信箱 :</label><br>
      <div :class="emailIsError ? 'error' : ''">
        <input type="text"
          name=""
          id="email">
      </div>
    </div>
    <div class="group no-wrap">
      <div>
        <input type="checkbox" name="" id="">
      </div>
      <div class="word-wrap">
        <div>請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱</div>
        <div class="hint">第三方支付金流平台服務條款</div>
      </div>
    </div>
    <button class="back" @click="$router.go(-1)">上一步</button>
    <button class="confirm" @click="$router.push('/finish')">確認付款</button>
  </div>
</template>
<script lang="ts">
import Title from '@/components/PageTitle.vue'
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { Step } from '../store'
@Component({
  components: { Title }
})
export default class WebAtm extends Vue {
  private emailIsError = false
  private selectNotSelect = false
  @Action('stepTo') stepTo !: Function
  mounted () {
    this.stepTo(Step.PaymentInput)
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding 0 68px
  padding-top 38px
  box-sizing border-box
  font-family 'Noto Sans TC'

input[type="checkbox"]
  border-radius 5px
  border solid 1px #979797
  margin-right 15px
  background transparent
  width 15px
  height 15px
.no-wrap
  display flex
.hint
  color #969696
  font-family 'Noto Sans TC'
  font-size 14px

</style>
