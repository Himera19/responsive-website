import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShoppingCardStore = defineStore('shoppingCard', () => {
  const cards = ref<string[]>([])
  function addItem(item: string) {
    cards.value.push(item)
  }

  function getCardCount() {
    return cards.value.length
  }
  return { cards, addItem, getCardCount }
})
