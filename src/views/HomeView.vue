<script setup lang="ts">
import { useShoppingCardStore } from '@/stores/shoppingCard'

const shoppingCard = useShoppingCardStore()
function handleSmallButtonClick() {
  shoppingCard.addItem('Ahmet')
}
</script>

<template>
  <small-button backgroundColor="green" @onSmallButtonClick="handleSmallButtonClick">
  </small-button>
  <p>{{ shoppingCard.getCardCount() }}</p>
  <ul v-for="card in shoppingCard.cards" :key="card">
    <li>{{ card }}</li>
  </ul>
</template>
