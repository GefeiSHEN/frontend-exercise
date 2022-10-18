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
    /**
     * Specify which HTMLFormElement to use.
     * @required
     * @value 'select', 'input'
    */
    option: {
        type: String as PropType<'select' | 'input'>,
    },
    /**
     * Specify type of <input>.
     * @required if option is set to 'input'
     * @value 'text', 'email', 'password'
    */
    type: {
        type: String as PropType<'text' | 'email' | 'password'>,
        default: 'text',
        required: false,
    },
    /**
     * Specify if this form item is required, default to false.
    */
    require: {
        type: Boolean as PropType<boolean>,
        default: false,
        required: false,
    },
    /**
     * The list of options for <select>
     * Tuple's first item is used as id, second item as value
     * @required if option is set to 'select'
    */
    selectOptions: {
        type: Array<[string, string]>,
        required: false,
    },
    /**
     * User's input for this form item.
     * Use v-model:value to acheive two way binding of user entry.
     * @required
    */
    value: String,
    /**
     * Notation for browser autocomplete function
    */
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