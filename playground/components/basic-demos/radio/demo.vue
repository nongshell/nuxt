<script setup lang="ts">
import { shallowRef } from 'vue'

const val = shallowRef()
</script>

<template>
  <a-radio v-model:checked="val">
    Radio
  </a-radio>
</template>
