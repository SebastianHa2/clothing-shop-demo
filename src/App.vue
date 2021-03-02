<!-- Main file holding always holding the route shown -->
<template>
  <options-container v-if="$route.path === '/'"></options-container>
  <div>
      <router-view v-if="$route.path !== '/'"></router-view>
  </div>
  <router-view name="coat-items-man"></router-view>
  <router-view name="sweatshirts-items-man"></router-view>
  <router-view name="registration"></router-view>
</template>

<script>
import OptionsContainer from './components/containers/OptionsContainer.vue'

export default {
  components: {OptionsContainer}
}
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

  /* Global styling */

  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: 'Noto Sans', sans-serif;
  }
</style>
