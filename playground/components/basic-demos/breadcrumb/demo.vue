<script setup lang="ts">
const items = [
  {
    title: 'Home',
  },
  {
    title: 'Application Center',
    href: '',
  },
  {
    title: 'Application List',
    href: '',
  },
  {
    title: 'An Application',
  },
]
</script>

<template>
  <a-breadcrumb :items="items" />
</template>
