<template>
  <div class="main">
    <chat></chat>
  </div>
</template>

<script>
  import "../node_modules/normalize.css";
  import chat from './components/chat.vue'

  export default {
    name: 'app',
    components: {
      'chat': chat
    }
  }
</script>

<style lang="scss">
 @import "./styles/main.scss";
  .main {
    width: 100%;
    height: 100%;
    background: #191919;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>