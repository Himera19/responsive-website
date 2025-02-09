<script setup lang="ts">
import { useScreenInfo } from '@/helpers/screenWidthType'

const { widthValue, widthNames } = useScreenInfo()
</script>

<template>
  <div v-if="widthNames.sm"><h1>Küçük</h1></div>
  <div v-if="widthNames.md"><h1>Orta</h1></div>
  <div v-if="widthNames.hg"><h1>Büyük</h1></div>
  <h1>{{ widthValue }}</h1>
</template>

<style></style>
