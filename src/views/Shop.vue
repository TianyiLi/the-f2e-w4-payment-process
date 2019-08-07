<template>
  <div class="container">
    <Title :subtitle="'超商付款'">STEP2. 填寫付款資訊</Title>
    <div class="form">
      <div class="group">
        <label for="shop">付款超商：</label><br>
        <select name="" id="shop"></select>
      </div>
      <div class="group">
        <label for="email">填寫付款人信箱 :</label><br>
        <input type="email" name="" id="email">
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
export default class Shop extends Vue {

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
