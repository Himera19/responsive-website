<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { reactive } from 'vue'

const authStore = useAuthStore()

const loginForm = reactive({
  userName: '',
  password: '',
})

const handleLogin = async () => {
  const isLogged = await authStore.login(loginForm.userName, loginForm.password)
  if (isLogged) {
    location.href = '/'
  } else {
    alert('Kullanıcı Bulunamadı')
  }
}
</script>

<template>
  <div>
    <h1>Giriş Yap</h1>
    <form @submit.prevent="handleLogin">
      <p>Kullanıcı Adı<input required v-model="loginForm.userName" /></p>
      <p>Şifre<input required type="password" v-model="loginForm.password" /></p>
      <button>Giriş</button>
    </form>
  </div>
</template>
