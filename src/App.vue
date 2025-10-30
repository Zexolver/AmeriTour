<script setup>
// (Using AI to help learn and understand Vue.js)
// We will import components here later
import{RouterView} from 'vue-router' // 
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div id="Gradient_1">
    <br>
    <TheHeader />

    <main>
      <RouterView />
    </main>

    <br>
    <TheFooter />
  </div>
</template>

<style scoped>
/* Scoped styles only apply to this component. 
   We're using global CSS for now,
   but this is here for future use. */
   main{
    min-height: calc(100vh - 200px); /* Simple calculation to help footer stay down */
   }
</style>
