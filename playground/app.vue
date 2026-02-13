<script setup lang="ts">
import { theme } from 'antdv-next'

const dark = ref(false)
</script>

<template>
  <a-config-provider :theme="{ algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm, zeroRuntime: true }">
    <a-layout style="min-height: 100vh;">
      <a-layout-header style="display: flex; align-items: center; gap: 12px;">
        <a-typography-title
          :level="4"
          style="margin: 0; color: #fff;"
        >
          Antdv Next Nuxt Playground
        </a-typography-title>
        <a-switch
          :checked="dark"
          checked-children="Dark"
          un-checked-children="Light"
          @update:checked="dark = !!$event"
        />
      </a-layout-header>
      <a-layout-content style="padding: 24px;">
        <NuxtPage />
      </a-layout-content>
    </a-layout>
  </a-config-provider>
</template>
