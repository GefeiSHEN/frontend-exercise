<template>
    <section>
        <h1>User Creation Form</h1>
        <form @submit="submit" method="post">
            <label>Full Name</label><br>
            <input type="text" name="name" v-model="formAnswers.name" required /><br>
            <label>Email</label><br>
            <input type="email" name="email" v-model="formAnswers.email" required><br>
            <label>Password</label><br>
            <input type="password" name="password" v-model="formAnswers.password" required /><br>
            <label>Occupation</label><br>
            <select v-if="formData" name="occupation" v-model="formAnswers.occupation" required>
                <template v-for="option in formData.occupations">
                    <option :value="option">{{option}}</option>
                </template>
            </select><br>
            <label>State</label><br>
            <select v-if="formData" type="text" name="state" v-model="formAnswers.state" required>
                <template v-for="option in formData.states">
                    <option :value="option.abbreviation">{{option.name}}</option>
                </template>
            </select><br>
            <button>Submit</button>
            <ButtonPrimary block>Submit</ButtonPrimary>
        </form>
    </section>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { Buffer } from 'buffer'
import { FormAnswersObject, FormOptionsObject } from '~~/composables';

const formData: Ref<FormOptionsObject> | null = ref(null);

const formAnswers: Ref<FormAnswersObject> = ref({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: '',
})

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