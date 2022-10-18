<template>
    <div
        class="h-screen w-screen overflow-x-hidden overflow-y-auto flex place-content-center bg-white dark:bg-slate-900">
        <section class="w-[90vw] max-w-md h-fit m-auto flex flex-col gap-4 ">
            <h1 class="text-3xl font-bold text-black dark:text-blue-100 text-center select-none mt-4">New User Sign Up
            </h1>
            <form @submit="submit" method="post"
                class="flex flex-col gap-4 justify-center w-full px-6 pt-4 pb-5 mb-4 bg-sky-100 dark:bg-sky-900 rounded-xl">
                <div class="flex flex-col sm:flex-row gap-4">
                    <FormInput require v-model:value="formAnswers.name" option="input" type="text" attribute="name">Full
                        Name
                    </FormInput>
                    <FormInput require v-model:value="formAnswers.email" option="input" type="email" attribute="email">
                        Email
                    </FormInput>
                </div>
                <FormInput require v-model:value="formAnswers.password" option="input" type="password"
                    attribute="new-password">Password</FormInput>
                <FormInput require v-model:value="formAnswers.occupation" option="select"
                    :select-options="occupationOption" attribute="new-password">
                    Occupation</FormInput>
                <FormInput require v-model:value="formAnswers.state" option="select" :select-options="stateOption"
                    attribute="new-password">
                    State</FormInput>

                <ButtonPrimary block>Submit</ButtonPrimary>
            </form>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { Buffer } from 'buffer'
import { FormAnswersObject, FormOptionsObject } from '~~/composables';

useHead({
    title: 'New User Sign Up',
    meta: [
        {
            name: 'description',
            content: 'A sign up form for new users.'
        },
        {
            name: "keywords",
            content:
                "fetch rewards, user, new user, sign up, authenticate",
        },
    ],
})

const formData: Ref<FormOptionsObject> | null = ref(null);
const occupationOption: Ref<Array<[string, string]>> | null = computed(() => {
    if (!formData) return null;
    else return formData.value.occupations.map((item) => [item, item]);
});
const stateOption: Ref<Array<[string, string]>> | null = computed(() => {
    if (!formData) return null;
    else return formData.value.states.map(item => [item.abbreviation, item.name]);
});

const formAnswers: Ref<FormAnswersObject> = ref({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: '',
});

const submit = async () => {
    formAnswers.value.password = Buffer.from(formAnswers.value.password).toString('base64')
    await fetch("https://frontend-take-home.fetchrewards.com/form", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formAnswers.value),
    })
        .then(response => response.status == 201 ? alert('Success!') : alert('Failed'))
}

await fetch("https://frontend-take-home.fetchrewards.com/form")
    .then(response => response.json())
    .then(data => formData.value = FormOptionsObjectFromJSONTyped(data))

</script>