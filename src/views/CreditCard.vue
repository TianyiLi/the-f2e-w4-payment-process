<template>
  <div class="container">
    <Title>STEP2. 填寫付款資訊</Title>
    <span>信用卡/金融卡</span>
    <div class="form">
      <div class="group">
        <label for="once">
          <input type="radio" name="" id="once">
          <span>一次付款</span>
        </label>
        <label for="seperate">
          <input type="radio" name="" id="seperate">
          <span>分期付款</span>
        </label>
      </div>
      <div class="group">
        <div class="title">信用卡卡號：</div>
        <div class="creditcard-input">
          <input type="number" class="card-ele" size="4">
          <input type="number" class="card-ele" size="4">
          <input type="number" class="card-ele" size="4">
          <input type="number" class="card-ele" size="4">
        </div>
        <div class="card-is"></div>
      </div>
    </div>
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

}
</script>

<style lang="stylus" scoped></style>
