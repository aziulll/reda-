<template>
  <div class="background-father">
    <div class="q-pa-md background-child" style="max-width: 900px">
      <h6>Seja Bem-Vindo Novamente!</h6>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          dense
          v-model="email"
          label="Email *"
          hint="Digite seu email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor, digite seu email',
            isEmailValid,
          ]"
        />

        <q-input
          dense
          type="password"
          v-model="password"
          label="Senha *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor, digite sua senha',
          ]"
        />

        <div>
          <q-btn label="Acessar" type="submit" />
          <q-btn
            label="Criar Conta  "
            type="reset"
            flat
            class="q-ml-sm"
            @click="resetForm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

// Validação de e-mail simples
const isEmailValid = (val) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(val) || "Email inválido";
};

// Função chamada no submit do form
function onSubmit() {
  if (!email.value || !password.value) {
    console.log("Campos de login estão incompletos");
    return;
  }
  console.log("Formulário enviado:", {
    email: email.value,
    password: password.value,
  });
}

function onReset() {
  resetForm();
}

function resetForm() {
  email.value = "";
  password.value = "";
}
</script>

<style scoped>
.background-father {
  background: #e7d2f9;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.background-child {
  background: white;
  height: 400px;
  border: none;
  border-radius: 24px;
  margin: 40px 0 0 0;
  width: 600px;
}
</style>
