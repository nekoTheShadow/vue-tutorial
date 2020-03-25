<template>
  <p class="message">メッセージ:{{msg}}</p>
</template>

<script>
export default {
  data() {
    return {msg: 'こんにちは'}
  }
}
</script>

<style src="./style.css"></style>
<style scoped>
  .message {color:#42b983;}
</style>
