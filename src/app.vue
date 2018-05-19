<template>
  <div>
    biba i'm an App
    <first-component></first-component>
  </div>
</template>
<script>
  import firstComponent from './first_component.vue'
  export default {
    name: 'app',
    components: {
      'first-component': firstComponent
    }
  }
</script>
<style lang="sass">
  body
    background: red

</style>