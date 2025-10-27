<script setup>
import{RouterLink, useRoute} from 'vue-router'
import{computed} from 'vue'

const route = useRoute();

/* This computed property will dynamically change the 
   title based on the current page's route meta info. */
const pageTitle = computed(() => route.meta.title || 'Phone Website');
</script>

<template>
    <div class="topnav">
        <h1 id="Nav_Title">{{ pageTitle }}</h1>
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/cyberdecks">Cyberdecks</RouterLink></li>
            <li><RouterLink to="/linux-phones">Linux Phones</RouterLink></li>
            <li><RouterLink to="/lora-phones">Lora Phones</RouterLink></li>
            <li><a href="https://github.com/Zexolver/vue-PaC_Website" target="_blank">Source Code</a></li>
        </ul>
    </div>
</template>