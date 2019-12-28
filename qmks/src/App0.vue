<template>
  <div id="app">
  	<header-nav></header-nav>	
  	<router-view></router-view>
  	<footer-nav></footer-nav>	
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    headerNav,
    footerNav
  }
}
</script>

<style>

</style>
