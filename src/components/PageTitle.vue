<template>
  <div class="title-wrapper">
    <slot></slot>
  </div>
</template>
<style lang="stylus">
.title-wrapper
  background-image linear-gradient(to bottom, #fff 50%, #B5FFE4 50%)
  height 34px
  display inline-flex
  justify-content center
  align-items center
  padding 4px 10px
  font-family 'Noto Sans TC'
  font-weight 600
  font-size 20px
  color #000000
  letter-spacing 2.09px
</style>
