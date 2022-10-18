<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'New User Login',
  meta: [
    { name: 'description', content: 'A sign up form for new user login.' }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: './assets/static/favicon.ico' }],
})

</script>