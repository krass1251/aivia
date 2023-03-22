<template>
  <v-card class="mx-auto mt-8" max-width="500">
    <v-toolbar color="secondary">
      <v-toolbar-title>SignIn to Aivia</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="authenticate">
        <v-text-field
          v-model.trim="credentials.email"
          :error-messages="v$?.email?.$errors[0]?.$message"
          label="E-mail Address"
          type="email"
          required
        ></v-text-field>

        <v-text-field
          v-model.trim="credentials.password"
          :error-messages="v$?.password?.$errors[0]?.$message"
          label="Passphrase"
          type="password"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn type="submit" color="secondary" @click="authenticate">Log in</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { required, email, minLength } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import router from '@/router';

const credentials = reactive({
  email: '',
  password: '',
});

const validationRules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const v$ = ref(useVuelidate(validationRules, credentials));

async function authenticate() {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    return;
  }
  await router.push({ path: '/game' });
}
</script>
