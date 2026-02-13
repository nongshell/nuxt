<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(false)
const value = ref(30)
const valueRange = ref([20, 50])
</script>

<template>
  <a-slider v-model:value="value" :disabled="disabled" />
  <a-slider v-model:value="valueRange" range :disabled="disabled" />
  Disabled: <a-switch v-model:checked="disabled" size="small" />
</template>
