<script lang="ts" setup>
import { useFetchApi } from '@/composables/useFetchApi'
import type { ITodoModel } from '@/models/todo-model'
import axiosInstance from '@/plugins/axiosClient'
import { onMounted, ref } from 'vue'

const axiosData = ref()

onMounted(() => {
  axiosInstance.get<ITodoModel>('/6').then((response) => {
    axiosData.value = response
  })
})
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in axiosData" :key="todo.userId">
        <p>{{ todo.title }}</p>
        <p>{{ todo.completed }}</p>
      </li>
    </ul>
  </div>
</template>
