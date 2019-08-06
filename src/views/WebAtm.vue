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
  </div>
</template>
<script lang="ts">
import Title from '@/components/PageTitle.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: { Title }
})
export default class WebAtm extends Vue {
  private emailIsError = false
  private selectNotSelect = false
}
</script>
<style lang="stylus" scoped>
.container
  padding 0 68px
  padding-top 38px
  box-sizing border-box
  font-family 'Noto Sans TC'
.group
  text-align left
  select, input[type='text']
    width 235px
    height 34px
    border-radius 5px
    border 1px solid #979797
    color #979797
    margin-top 10px
    &.after-input
      color black
  ol
    padding-left 16px
    margin-top 19px
    font-size 14px
    li
      margin-top 5px
      line-height 30px
</style>
