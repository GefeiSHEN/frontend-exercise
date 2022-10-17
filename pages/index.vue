<template>
    <p class="text-zinc-500 text-3xl">Hello World</p>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { FormOptionsObject } from '~~/composables';

const formData: Ref<FormOptionsObject> | null = ref(null);

fetch("https://frontend-take-home.fetchrewards.com/form")
    .then(response => response.json())
    .then(data => formData.value = FormOptionsObjectFromJSONTyped(data))

</script>