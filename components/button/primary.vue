<template>
    <button
        class="px-6 py-2 bg-blue-500 dark:bg-blue-700 hover:shadow-md active:bg-blue-600 rounded-md font-semibold text-white select-none"
        :class="[blockClass]">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    /**
     * Weather the button shall take the entire width avaliable, default to false.
     * @value true: w-full, false: w-fit
    */
    block: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: false
    }
})

const blockClass = computed(() => {
    return {
        "w-full": props.block,
        "w-fit": !props.block,
    };
});
</script>