<template>
    <div class="flex flex-col gap-1">
        <label class="text-md font-semibold text-sky-900 select-none">
            <slot />
        </label>
        <input v-if="isInput" :type="props.type" :value="props.value" @input="e => onInput(e) "
            :required="props.require" :autocomplete="props.attribute" class="px-2 h-8 rounded-md" />
        <select v-else :value="props.value" @input="e => onInput(e)" :required="props.require"
            class="px-2 h-8 rounded-md select-none">
            <option value="" disabled selected>Select your option</option>
            <template v-for="option in props.selectOptions">
                <option :value="option[0]" :id="option[0]">{{option[1]}}</option>
            </template>
        </select>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    option: {
        type: String as PropType<'select' | 'input'>,
    },
    type: {
        type: String as PropType<'text' | 'email' | 'password'>,
        default: 'text',
        required: false,
    },
    require: {
        type: Boolean as PropType<boolean>,
        default: false,
        required: false,
    },
    selectOptions: {
        type: Array<[string, string]>,
        required: false,
    },
    value: String,
    attribute: {
        type: String as PropType<string>,
        default: '',
        required: false,
    }
})

const isInput = computed(() => {
    return props.option === 'input';
})

const emit = defineEmits<{
    (e: 'update:value', val: string),
}>();

const onInput = (e: Event) => {
    const value = eventToVal(e);
    emit('update:value', value);
}

const eventToVal = (e: Event) => {
    const elem = e.target as HTMLInputElement;
    return elem.value;
}
</script>