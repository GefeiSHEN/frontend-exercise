<template>
    <button class="px-6 py-1 bg-orange-200 border-[1px] border-orange-600 rounded-md font-semibold text-orange-900"
        :class="[blockClass]">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
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