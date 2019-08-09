<template>
  <div class="container">
    <Title :subtitle="'超商付款'">STEP2. 填寫付款資訊</Title>
    <div class="form">
      <div class="group">
        <label for="shop">付款超商：</label><br>
        <select name=""
          @blur="checkShopSelect"
          v-model="shopSelected"
          :error="shopHasError"
          id="shop">
          <option value="false"
            disabled>請選擇</option>
          <option :value="option"
            v-for="(option , i) in options"
            :key="i">{{option}}</option>
        </select>
        <div class="error-shop-select"
          v-if="shopHasError">尚未選擇商店</div>
      </div>
      <div class="group">
        <label for="email">填寫付款人信箱 :</label><br>
        <input type="email"
          @blur="checkEmail"
          v-model="email"
          :error="emailHasError"
          name=""
          id="email">
        <div class="error-email"
          v-if="emailHasError">沒有輸入email</div>
      </div>
    </div>
    <div class="group no-wrap">
      <div>
        <input type="checkbox"
          v-model="contractConfirm"
          name=""
          id="">
      </div>
      <div class="word-wrap"
        @click="() => contractConfirm = !contractConfirm">
        <div>請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱</div>
        <div class="hint">第三方支付金流平台服務條款</div>
      </div>
    </div>
    <button class="back"
      @click="() => $router.go(-1)">上一步</button>
    <button class="confirm"
      :disabled="!contractConfirm"
      @click="onConfirm">確認付款</button>
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
export default class Shop extends Vue {
  private options = [
    '統一超商',
    '全家便利商店',
    'OK便利商店',
    '萊爾富便利商店'
  ]

  private shopSelected = 'false'
  private email = ''
  private contractConfirm = false
  private emailHasError = false
  private shopHasError = false

  @Action('stepTo') stepTo!: Function
  mounted () {
    this.stepTo(Step.PaymentInput)
  }
  checkShopSelect () {
    this.shopHasError = this.shopSelected === 'false'
  }

  checkEmail () {
    this.emailHasError = !/.+@.+\..+/.test(this.email)
  }
  onConfirm () {
    if (this.shopHasError || this.emailHasError) {
      return false
    }
    this.$router.push({ path: '/finish-shop', query: { shop: this.shopSelected } })
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding 0 68px
  padding-top 38px
  box-sizing border-box
  font-family 'Noto Sans TC'
.no-wrap
  display flex
.group
  margin-top 30px
</style>
