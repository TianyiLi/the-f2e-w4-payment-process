<template>
  <div class="container">
    <Title :subtitle="'Web ATM'">STEP2. 填寫付款資訊</Title>
    <div class="form">
      <div class="group">
        <label for="bank">付款銀行:</label><br>
        <select name=""
          :error="bankHasError"
          @blur="bankCheck"
          v-model="bankSelect"
          id="bank">
          <option value="none"
            disabled>選擇</option>
          <option :value="bank.value"
            v-for="(bank, i) in bankOptions"
            :key="i">{{bank.name}}</option>
        </select>
        <div class="error-bank-select"
          v-if="bankHasError">沒有選擇銀行</div>
      </div>
      <div class="group">
        <ol>
          <li>請準備晶片金融卡 + 晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。</li>
          <li>持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程</li>
        </ol>
      </div>
    </div>
    <div class="group">
      <label for="email">填寫付款人信箱 :</label><br>
      <input type="text"
        :error="emailHasError"
        name=""
        @blur="emailCheck"
        v-model="email"
        id="email">
      <div class="error-email"
        v-if="emailHasError">沒有輸入email</div>
    </div>
    <div class="group no-wrap">
      <div>
        <input v-model="contract"
          type="checkbox"
          name=""
          id="">
      </div>
      <div class="word-wrap" @click="contract = !contract">
        <div>請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱</div>
        <div class="hint">第三方支付金流平台服務條款</div>
      </div>
    </div>
    <button class="back" @click="$router.go(-1)">上一步</button>
    <button :disabled="!contract" class="confirm" @click="onConfirm">確認付款</button>
  </div>
</template>
<script lang="ts">
import Title from '@/components/PageTitle.vue'
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { Step } from '../store'

const bank = [
  { value: '004', name: '臺灣銀行' },
  { value: '005', name: '臺灣土地銀行' },
  { value: '006', name: '合作金庫商業銀行' },
  { value: '007', name: '第一商業銀行' },
  { value: '008', name: '華南商業銀行' },
  { value: '009', name: '彰化商業銀行' },
  { value: '011', name: '上海商業儲蓄銀行' },
  { value: '012', name: '台北富邦銀行' },
  { value: '013', name: '國泰世華銀行' },
  { value: '016', name: '高雄銀行' },
  { value: '017', name: '兆豐國際商業銀行' },
  { value: '021', name: '花旗(台灣)商業銀行' },
  { value: '050', name: '臺灣中小企業銀行' },
  { value: '053', name: '台中商業銀行' },
  { value: '081', name: '匯豐(台灣)商業銀行' },
  { value: '102', name: '華泰商業銀行' },
  { value: '103', name: '臺灣新光銀行' },
  { value: '108', name: '陽信商業銀行' },
  { value: '147', name: '三信商業銀行' },
  { value: '803', name: '聯邦商業銀行' },
  { value: '805', name: '遠東國際商業銀行' },
  { value: '806', name: '元大銀行' },
  { value: '807', name: '永豐商業銀行' },
  { value: '808', name: '玉山商業銀行' },
  { value: '809', name: '凱基銀行' },
  { value: '810', name: '星展銀行（台灣）' },
  { value: '812', name: '台新商業銀行' },
  { value: '815', name: '日盛國際商業銀行' },
  { value: '816', name: '安泰商業銀行' },
  { value: '822', name: '中國信託商業銀行' },
  { value: '960', name: '台灣樂天信用卡股份有限公司' },
]

@Component({
  components: { Title }
})
export default class WebAtm extends Vue {
  private emailHasError = false
  private bankHasError = false

  private email = ''
  private bankSelect = 'none'
  private bankOptions = bank

  private contract = false
  @Action('stepTo') stepTo !: Function
  mounted () {
    this.stepTo(Step.PaymentInput)
  }

  emailCheck () {
    this.emailHasError = !/.+@.+\..+/.test(this.email)
  }
  bankCheck () {
    this.bankHasError = this.bankSelect === 'none'
  }

  onConfirm () {
    this.emailCheck()
    this.bankCheck()
    if (this.bankHasError || this.emailHasError) {
      return false
    }
    this.$router.push('/finish')
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding 0 68px
  padding-top 38px
  box-sizing border-box
  font-family 'Noto Sans TC'
input[type='checkbox']
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
