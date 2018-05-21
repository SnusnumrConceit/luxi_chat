<template>
  <div class="chat">
    <div class="chat__messages">
      <div class="chat__message">

      </div>
    </div>

    <div class="chat__input-panel">
      <input type="text" v-model="message">
      <button class="chat__button-send-message">
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chat',

    data() {
      return {
        message: ''
      }
    },

    methods: {

    },

    mounted() {

    }
  }
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .chat {
    overflow-y: scroll;
    background: whitesmoke;
    border: 1px solid deepskyblue;
    box-shadow: 0 0 100px deepskyblue;
    font-size: 2em;
    width: 90%;
    height: 94%;
    position: relative;
    &__messages {

    }
    &__message {

    }
    &__input-panel {
      position: absolute;
      bottom: 0px;
      width: 100%;
      padding: 10px;
      input {
        padding: 5px;
        font-size: .8em;
        width: inherit;
        border-radius: 5px;
        border: 1px solid gray;
      }
    }
    &__button-send-message {
      background: url("../images/send-button.svg");
      position: absolute;
      border: 0;
      right: 15px;
      top: 14px;
      height: 30px;
      width: 30px;
      background-size: cover;
    }
  }

</style>
