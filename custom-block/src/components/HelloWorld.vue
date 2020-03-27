<docs>
# HelloWorldコンポーネント
## 概要
これはHelloWorldコンポーネントについて書かれたドキュメントです。
## 使用方法
</docs>

<template>
  <div class="hello">
    <p class="messsage">メッセージ:{{msg}}</p>
    <p v-html="docs"></p>
  </div>
</template>

<script>
import markd from 'marked';

export default {
  name: 'HelloWorld',
  data() {
    return {
      docs: markd(this.$options._docs),
      msg: 'こんにちは'
    }
  }
}
</script>

<style scoped>
.message { color: #42b983}
</style>