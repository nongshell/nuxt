<script setup lang="ts">
import { message } from 'antdv-next'

function info() {
  message.info('This is an info message')
}
</script>

<template>
  <a-button type="primary" @click="info">
    Static Method
  </a-button>
</template>
