<script setup lang="ts"></script>

<template>
  <div class="nav">
    <RouterLink to="/">Ana Sayfa</RouterLink>
    <RouterLink to="/screen-size">Ekran Boyutu</RouterLink>
    <RouterLink to="/fetch-api">Api Erişimi</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
.nav a {
  font-size: 20px;
  margin-right: 30px;
}
</style>
