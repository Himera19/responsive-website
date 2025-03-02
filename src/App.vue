<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuthStore } from './stores/authStore'
import type { IUserModel } from './models/todo-model'

const currentUser = ref<IUserModel | null>()
const authStore = useAuthStore()

onMounted(async () => {
  currentUser.value = await authStore.user
})

const handleLogOut = async () => {
  await authStore.logOut()
  location.href = '/login'
}
</script>

<template>
  <div class="nav">
    <RouterLink to="/">Ana Sayfa</RouterLink>
    <RouterLink to="/about">Hakkımda</RouterLink>
  </div>

  <div v-if="authStore.isLogged">
    <p>
      Hoş Geldin: <strong>{{ currentUser?.name }}</strong>
    </p>
    <button @click="handleLogOut()">Çık</button>
  </div>

  <RouterView />
</template>

<style scoped>
.nav a {
  font-size: 20px;
  margin-right: 30px;
}
</style>
