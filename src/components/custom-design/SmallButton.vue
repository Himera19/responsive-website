<script setup lang="ts">
defineProps<{
  backgroundColor: 'red' | 'green' | 'yellow'
}>()

const emit = defineEmits(['onSmallButtonClick'])

function onSmallButtonClicked() {
  emit('onSmallButtonClick', 'Small buton tıklandı!')
  console.log('Tıklandım')
}
</script>

<template>
  <button :class="backgroundColor" @click="onSmallButtonClicked">
    <slot name="key"> Bas </slot>
   </button>
</template>

<style scoped>
button {
  font-size: 20px;
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
}
</style>
